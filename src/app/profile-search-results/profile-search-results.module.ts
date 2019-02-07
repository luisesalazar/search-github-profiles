import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileSearchResultsPage } from './profile-search-results.page';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { RepositoriesComponent } from '../components/repositories/repositories.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSearchResultsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileSearchResultsPage, SearchResultsComponent, RepositoriesComponent]
})
export class ProfileSearchResultsPageModule {}
