import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    "EmailId": "string",
    "Password": "string"
  };

  http: HttpClient;
  router: Router;

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }

  ngOnInit() {
    // Optional: Perform any initialization logic here, if needed
  }

  onLogin() {
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj)
      .subscribe((res: any) => {
        if (res.result) {
          alert('Logado com sucesso');
          this.router.navigateByUrl('/painel');
        } else {
          alert(res.message);
        }
      });
  }
}
