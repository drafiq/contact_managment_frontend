import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  message: string | undefined;

  constructor(private service: LoginService, private router: Router) {
  }

  ngOnInit() {
  }

  doLogin() {
    let isAuth = this.service.login(this.username, this.password);
    if (isAuth) {
      this.router.navigate(["/contacts"])
      this.message = undefined;
    } else {
      this.message = "Authentification a échoué";
    }
  }

}
