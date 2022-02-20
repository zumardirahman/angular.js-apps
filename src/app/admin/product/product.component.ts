import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title :any;
  desc :any;
  books :any = [];
  book  :any = {};

  // columns we will show on the table
 // public displayedColumns = ['judul', 'penulis', 'penerbit', 'tahunTerbit', 'harga' ];
  //the source where we will get the data

  public displayedColumns: string[] =  ['id','title', 'author', 'publisher', 'year', 'isbn', 'price' ];
  public dataSource:any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.api.get('books').subscribe((data) => {
    //   console.log(data)
    // })

    this.title='Data Produk'
    this.desc='Kelola data produk anda.'
    this.getBooks()
  }

  getBooks() {
    this.api.get('books').subscribe((data) => {
      this.dataSource = data;
      console.log(data)
   //  this.books.data = data;
    })
  }
  getBook(idBook:number) {
    this.api.get('books/'+idBook).subscribe((data) => {
      this.dataSource = data;
      console.log(data)
    })
  }
  
}
