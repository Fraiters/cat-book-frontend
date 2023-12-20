import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";

@Component({
  selector: 'app-del-cat-page',
  templateUrl: './del-cat-page.component.html',
  styleUrl: './del-cat-page.component.css'
})
export class DelCatPageComponent implements OnInit{
  cat_obj: any
  cat_id: any
  constructor(private apiCats: CatsService) {
  }

  ngOnInit(): void {
    this.cat_id = this.apiCats.getSharedCatId()
    if (this.cat_id == undefined) this.cat_id = localStorage.getItem("cat_id")
    this.saveLastId(this.cat_id)
    this.getCatById(this.cat_id);
  }
  saveLastId(Id: any){
    // Сохранение последнего id для возможной перезагрузки страницы
    localStorage.setItem("cat_id", Id)
  }
  getCatById = (Id: any) => {
    this.apiCats.getCatById(Id).subscribe(
        data => {
          this.cat_obj = data
        },
        error => {
          console.log(error);
        }
    );
  }

}
