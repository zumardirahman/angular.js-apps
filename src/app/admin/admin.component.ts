import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // mode:string = "side"
  

  menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard'
    },
    {
      name: 'Produk',
      icon: 'list',
      url: '/admin/product'
    },
    {
      group: 'Menu Group',
      children: [
        {
          name: 'Image Gallery',
          icon: 'images',
          url: '/admin/gallery'
        }
      ]
    }
  ];
}