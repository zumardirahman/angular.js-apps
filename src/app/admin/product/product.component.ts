import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'angular-service';
  books :any = [];
  book  :any = {};



  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.api.get('books').subscribe((data) => {
    //   console.log(data)
    // })
  }

  getBooks() {
    this.api.get('books').subscribe((data) => {
      this.books = data;
      console.log(data)
    })
  }
  getBook(idBook:number) {
    this.api.get('books/'+idBook).subscribe((data) => {
      this.book = data;
      console.log(data)
    })
  }
}
