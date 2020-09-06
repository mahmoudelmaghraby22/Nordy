import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { AlertifyService } from '../_service/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter
  model : any = {};

  constructor(private authService: AuthService, private alertify : AlertifyService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe(() =>{
      this.alertify.success('registration success..'); 
    }, error => {
      this.alertify.error(error);
    });
  }
  cancel() {
    this.cancleRegister.emit(false);
    console.log('canseled');
  }
}
