import {Component} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  // styleUrl: './app.component.css'
})
export class AddCatComponent {
  cats: any
  token: any
  constructor(private apiCats: CatsService,
              private router: Router) {
  }

  formCreateCat = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      breed: new FormControl(""),
      weight: new FormControl(null),
      // photo: new FormControl(null),
      description: new FormControl(""),
    });

  addCat() {
      const formData= this.formCreateCat.value;
      this.createCat(
          formData.name,
          formData.age,
          formData.breed,
          formData.weight,
          // formData.photo,
          formData.description,);
    }
  ngOnInit(): void {
    this.token = localStorage.getItem('my_token')
  }

  createCat = (Name: any,
               Age: any,
               Breed: any,
               Weight: any,
               // Photo: any,
               Description: any) => {
    this.apiCats.createCat(Name, Age, Breed, Weight, // Photo,
        Description, this.token).subscribe(
      data => {
        this.cats = data
        this.router.navigate([""])
      },
      error => {
        console.log(error);
      }
    );
  }
}
