import { Component, OnInit, DoCheck} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  user: any

  constructor(private apiUsers: UsersService) {
    console.log("CONSTRUCTORHEADER")
  }

  ngOnInit(): void {
    console.log("INITHEADER")
    this.getUserByToken(localStorage.getItem('my_token'));
  }

  getUserByToken(Token: any) {
    this.apiUsers.getUserByToken(Token).subscribe(
        data => {
          console.log(data)
          this.user = data;
        },
        error => {
          console.log(error);
        }
    );
  }
}
