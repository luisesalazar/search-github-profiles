import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile-search', pathMatch: 'full' },
  { path: 'profile-search', loadChildren: './profile-search/profile-search.module#ProfileSearchPageModule' },
  {
    path: 'profile-search-results/:username',
    loadChildren: './profile-search-results/profile-search-results.module#ProfileSearchResultsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
