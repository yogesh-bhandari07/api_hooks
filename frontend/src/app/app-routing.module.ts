import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListRequestComponent } from './views/list-request/list-request.component';
import { HomeComponent } from './views/home/home.component';
import { CreateRequestComponent } from './views/create-request/create-request.component';
import { EditRequestComponent } from './views/edit-request/edit-request.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'mock-api',
    children: [
      {
        path: 'list',
        component: ListRequestComponent,
        pathMatch: 'full',
      },
      {
        path: 'create',
        component: CreateRequestComponent,
        pathMatch: 'full',
      },
      {
        path: 'edit/:id',
        component: EditRequestComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
