import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/web-api.service';
import { NavigationExtras, Router } from '@angular/router';
 @Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.page.html',
  styleUrls: ['./posts-list.page.scss']
})
export class PostsListPage implements OnInit {

  constructor(public apiService: ApiService, private router: Router) { }

  posts: any;

  ngOnInit() {
    this.apiService.getList().subscribe((response) => {
      this.posts = response;
     });
  }

}