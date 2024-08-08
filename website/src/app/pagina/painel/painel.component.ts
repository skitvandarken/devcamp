import { Component, inject, Inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, ReactiveFormsModule, NavbarComponent, RodapeComponent],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent implements OnInit{

  http= inject(HttpClient)
  userList: any[]=[];
  
  ngOnInit(): void {
    this.getAllUser();

  }



  getAllUser(){
    debugger;
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((Res:any)=>{
      this.userList = Res.data
    })
  }
  
}
