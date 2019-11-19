import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MinimalExampleComponent} from './minimal-example/minimal-example.component';
import {AdvancedExampleComponent} from './advanced-example/advanced-example.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/advanced', pathMatch: 'full'
  },
  {
    path: 'minimal',
    component: MinimalExampleComponent
  },
  {
    path: 'advanced',
    component: AdvancedExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
