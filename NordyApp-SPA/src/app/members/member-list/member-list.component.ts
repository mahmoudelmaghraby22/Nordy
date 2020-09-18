import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_service/alertify.service';
import { User } from '../../_models/user';
import { UserService } from '../../_service/user.service';
import { ActivatedRoute } from '@angular/router';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 users: User[];
 user: User = JSON.parse(localStorage.getItem('user'));
 genderList = [{value: 'male', display:'Males'}, {value: 'female', display:'Females'}]
 userParms: any ={};
 pagination: Pagination;
  
  constructor(private userService: UserService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.users = data['users'].result;
      this.pagination = data['users'].pagination;
    });

    this.userParms.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParms.minAge = 18;
    this.userParms.maxAge = 99;
    this.userParms.orderBy = 'lastActive';
  }

  pageChanged(event: any){
    this.pagination.currentPage = event.page;
    this.loadUsers();
  }

  resetFilters() {
    this.userParms.gender = this.user.gender === 'female' ? 'male' : 'female';
    this.userParms.minAge = 18;
    this.userParms.maxAge = 99;
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParms)
      .subscribe((res: PaginatedResult<User[]>) => {
        this.users = res.result;
        this.pagination = res.pagination;
      }, error =>{
      this.alertify.error(error);
    });
  }
}
