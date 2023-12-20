import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-del-cat',
  templateUrl: './del-cat.component.html',
  styleUrl: './del-cat.component.css'
})
export class DelCatComponent implements OnInit{
  cat_id: any
  token: any
  constructor(private catApi: CatsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cat_id = this.catApi.getSharedCatId()
    if (this.cat_id == undefined) this.cat_id = localStorage.getItem("cat_id")
    this.saveLastId(this.cat_id)
    this.token = localStorage.getItem('my_token')
    this.destroyCat(this.cat_id, this.token);
  }

  saveLastId(Id: any){
    // Сохранение последнего id для возможной перезагрузки страницы
    localStorage.setItem("cat_id", Id)
  }

  destroyCat = (Id: any, Token: any) => {
    this.catApi.deleteCat(Id, Token).subscribe(
      data => {
        this.router.navigate(['/cat-list'])
      },
      error => {
        console.log(error);
      }
    );

  }

}
