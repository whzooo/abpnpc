import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../../layout/default/default.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutDefaultComponent,
      children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.for<%= routingScope %>(routes)],
  exports: [RouterModule]
})
export class <%= classify(name) %>RoutingModule { }
