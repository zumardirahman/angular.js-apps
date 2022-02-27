import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public api: ApiService
  ) { }

  ngOnInit(): void {
  }
  loading:boolean | undefined
  saveData() {
    this.loading=true
    //jika id tidak terdefenisi maka buat data
    if (this.data.id == undefined) {
      //prosedur post laksanakan
        this.api.post('books', this.data).subscribe(result => {
        this.dialogRef.close(result)
        this.loading=false
      },error=>{
        //jika ada amsalaah
        this.loading=false
        alert('tidak dapat menyimpan data')
        
      })
    }else{
      //prosedur edit laksanakan
      this.api.put('books/'+this.data.id,this.data).subscribe(result => {
      this.dialogRef.close(result)
     // console.log(result);
      this.loading=false
      },error=>{
        //jika ada amsalaah
        this.loading=false
        alert('tidak dapat mengubah data')
      })
    }


  }

}
