import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
 
  loginObj: any = {
    "EmailId": "string",
    "Password": "string"
  };


  http= inject(HttpClient);
  router= Inject(Router);

  onLogin(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      if (res.result){
        alert('Logado com sucesso')
        this.router.navigateByUrl("/painel");
      } else{
        alert(res.message)
      }
    })

  }


}
