import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'sdfsdfsdf',
    component: HomePageComponent,
    data: { luigiRoute: '/sdfsdfsdf' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroFrontendRoutingModule {
  constructor() {}
}
