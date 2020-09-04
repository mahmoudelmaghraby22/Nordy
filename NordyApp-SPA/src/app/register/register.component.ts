import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancleRegister = new EventEmitter
  model : any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.model).subscribe(() =>{
      console.log('registration success..'); 
    }, error => {
      console.log(error);
    })
  }
  cancel() {
    this.cancleRegister.emit(false);
    console.log('canseled');
  }
}
