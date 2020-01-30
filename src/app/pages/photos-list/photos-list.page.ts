import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {

  constructor() { }
  ImagesList : any[] = [] ;

  ngOnInit() {
    this.ImagesList = JSON.parse(sessionStorage.getItem('imageList'));
  }

}
