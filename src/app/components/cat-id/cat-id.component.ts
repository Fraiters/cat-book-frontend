import {Component, Input} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-cat-id',
  templateUrl: './cat-id.component.html',
  // styleUrl: './app.component.css'
})
export class CatIdComponent {
  cat_obj: any
  user: any
  token: any
  cat_id: any

  constructor(private apiCats: CatsService,
              private apiUsers: UsersService,){
  }

  ngOnInit(): void {
    // this.cat_id = localStorage.getItem("cat_id")
    console.log('ddddd')
    // console.log(this.cat)
    this.cat_id = this.apiCats.getSharedCatId();
    this.token = localStorage.getItem("my_token");
    this.getUserByToken(this.token)
    // this.cat_id = this.getCatId()
    this.getCatById(this.cat_id);
  }

  getUserByToken(Token: any) {
    this.apiUsers.getUserByToken(Token).subscribe(
        data => {
          this.user = data;
        },
        error => {
          console.log(error);
        }
    );
  }

  getCatId(){
    return this.apiCats.getSharedCatId()
  }

  getCatById = (Id: any) => {
    this.apiCats.getCatById(Id).subscribe(
      data => {
        console.log(data)
        this.cat_obj = data
        // console.log(this.cat_obj.photo)
      },
      error => {
        console.log(error);
      }
    );
  }
}
