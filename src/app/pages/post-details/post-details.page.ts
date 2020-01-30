import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/web-api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {
  
  constructor( public apiService: ApiService ,private route: ActivatedRoute, private router: Router, private navCtrl : NavController) {};


  selectedId;
  post : any;

  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe(paramMap => {
            if (!paramMap.has('id')) {
              this.navCtrl.navigateBack('/posts-list');
              return;
            }
      this.selectedId = paramMap.get('id');
            this.apiService.getItem(this.selectedId).subscribe((response) => {
        this.post = response;
       });
          }); 
    
    }

}
