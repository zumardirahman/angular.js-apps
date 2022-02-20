import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent, ProductComponent, GalleryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //gunakan child krna ada module diatasnya
    MaterialDesign, //gunanya agar tidak mengimport lagi, caranya bikin folder material lalu file material.ts
  ],
})
export class AdminModule {}
