import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upd-cat',
  templateUrl: './upd-cat.component.html',
  // styleUrl: './upd-cat.component.css'
})
export class UpdCatComponent implements OnInit{
  cat_obj: any
  cat_id: any
  token: any
  constructor(private apiCats: CatsService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
    this.cat_id = this.apiCats.getSharedCatId()
    if (this.cat_id == undefined) this.cat_id = localStorage.getItem("cat_id")
    this.saveLastId(this.cat_id)
    this.getCatById(this.cat_id);
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

  saveLastId(Id: any){
    // Сохранение последнего id для возможной перезагрузки страницы
    localStorage.setItem("cat_id", Id)
  }

  formUpdateCat = new FormGroup({
    name: new FormControl(null),
    age: new FormControl(null),
    breed: new FormControl(""),
    weight: new FormControl(null),
    // photo: new FormControl(null),
    description: new FormControl(""),
  });

  updCat() {

    const formData= this.formUpdateCat.value;
    this.updateCat(
        this.cat_id,
        formData.name,
        formData.age,
        formData.breed,
        formData.weight,
        // formData.photo,
        formData.description,);
  }

  updateCat = (Id: any,
               Name: any,
               Age: any,
               Breed: any,
               Weight: any,
               // Photo: any,
               Description: any) => {
    this.apiCats.updateCat(Id, Name, Age, Breed, Weight, // Photo,
        Description, this.token).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["/cat-id"])
        },
        error => {
          console.log(error);
        }
    );
  }

}
