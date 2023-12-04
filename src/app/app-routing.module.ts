import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EMPTY_PATH } from '@core/constants/router';
import { PagesModule } from '@pages/pages.module';

const routes: Routes = [
  {
    path: EMPTY_PATH,
    loadChildren: () =>
      import('@pages/pages.module').then(
        (m): typeof PagesModule => m.PagesModule
      ),
  },
  {
    path: '**',
    redirectTo: EMPTY_PATH,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
