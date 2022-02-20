import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), //gunakan child krna ada module diatasnya
    MaterialDesign, //gunanya agar tidak mengimport lagi, caranya bikin folder material lalu file material.ts
  ],
})
export class AdminModule {}
