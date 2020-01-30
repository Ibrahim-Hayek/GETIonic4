import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'posts-list', pathMatch: 'full' },
  {
    path: 'posts-list',
    loadChildren: () => import('./pages/posts-list/posts-list.module').then( m => m.PostsListPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./pages/post-details/post-details.module').then( m => m.PostDetailsPageModule)
  },
  {
    path: 'new-photo',
    loadChildren: () => import('./pages/new-photo/new-photo.module').then( m => m.NewPhotoPageModule)
  },
  {
    path: 'photos-list',
    loadChildren: () => import('./pages/photos-list/photos-list.module').then( m => m.PhotosListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
