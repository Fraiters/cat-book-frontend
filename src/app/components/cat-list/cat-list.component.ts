import {Component, OnInit} from '@angular/core';
import {CatsService} from "../../services/cats.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  // styleUrl: './app.component.css'
})
export class CatListComponent implements OnInit{
    cats: any
  constructor(private apiCats: CatsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCatList();
  }

  getCatList = () => {
    this.apiCats.getCatList().subscribe(
        data => {
        this.cats = data
      },
        error => {
        console.log(error);
      }
    );
  }

  setCatId = (Id: any) => {
    this.apiCats.setSharedCatId(Id)
    this.router.navigate(['/cat-id'])
  }

}
