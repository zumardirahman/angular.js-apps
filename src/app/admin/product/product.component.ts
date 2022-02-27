import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title: any;
  desc: any;
  books: any = [];
  book: any = {};

  // columns we will show on the table
  // public displayedColumns = ['judul', 'penulis', 'penerbit', 'tahunTerbit', 'harga' ];
  //the source where we will get the data

  public displayedColumns: string[] = ['id', 'title', 'author', 'publisher', 'year', 'isbn', 'price'];
  public dataSource: any = [];

  constructor(
    private api: ApiService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // this.api.get('books').subscribe((data) => {
    //   console.log(data)
    // })

    this.title = 'Data Produk'
    this.desc = 'Kelola data produk anda.'
    this.getBooks()
  }
  loading: boolean | undefined
  getBooks() {
    this.loading = true
    this.api.get('books').subscribe((data) => {
      this.dataSource = data;
      console.log(data)
      this.books = data;
      this.loading = false
    }, erorr => {
      this.loading = false
      alert('ada masalah pengambilan data')
    })
  }
  // getBook(idBook:number) {
  //   this.api.get('books/'+idBook).subscribe((data) => {
  //     this.dataSource = data;
  //     console.log(data)
  //   })
  // }

  productDetail(data: any, idx: number) {
    let dialog = this.dialog.open(ProductDetailComponent, {
      width: '400px',
      data: data
    })
    dialog.afterClosed().subscribe(res => {
      if (res) {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if (idx == -1) this.books.push(res)
        else this.books[idx] = data
        //res ganti ke data karna res string, yang diinginkana dalah object 
      }
    })
  }
  loadingDelete: any = {}
  deleteProduct(id: number, idx: number) {
    
    var conf = confirm('Delete Item?')
    if (conf) {
      this.loadingDelete[idx] = true
      this.api.delete('books/' + id).subscribe(res => {

        this.books.splice(idx, 1)
        this.loadingDelete[idx] = false
      },error => {

        this.loadingDelete[idx] = true
        alert('tidak dapat menghapus data')
      })
    }
  }

}
