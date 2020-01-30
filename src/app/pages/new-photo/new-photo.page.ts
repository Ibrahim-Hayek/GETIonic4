import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Plugins,Capacitor,CameraSource,CameraResultType} from '@capacitor/core';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.page.html',
  styleUrls: ['./new-photo.page.scss'],
})
export class NewPhotoPage implements OnInit {

  constructor() { }

  
  selectedImage: string = '';
  ImagesList : any[] = [];
  PhotoName: string = '';
  ImageToAdd : ImageToAdd = {url:'',title:''};

  ngOnInit() {
    if(sessionStorage.getItem('imageList') != null || sessionStorage.getItem('imageList') != undefined){
      this.ImagesList = JSON.parse(sessionStorage.getItem('imageList'));
    }
    
  }

 
  saveImage(){
    this.ImageToAdd.url = this.selectedImage;
    this.ImageToAdd.title = this.PhotoName;
    let TempObject = this.ImageToAdd;
    this.ImagesList.push(TempObject);
    sessionStorage.setItem('imageList',JSON.stringify(this.ImagesList));
    this.PhotoName = '';
    this.selectedImage = '';
    this.ImageToAdd = {url:'',title:''};
    
  }

  takePhoto() {
    debugger;
    Plugins.Camera.getPhoto({
      quality: 100,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64
    }).then(image => {
        this.selectedImage = 'data:image/jpeg;base64,' + image.base64String;
      }).catch(error => {
        console.log(error);
        return false;
      });
  }
}


export interface ImageToAdd {
  url: string;
  title: string;
}