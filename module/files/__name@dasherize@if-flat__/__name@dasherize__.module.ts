import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { AbpModule } from '@core/abp/abp.module';
<% if (routing) { %>import { <%= classify(name) %>RoutingModule } from './<%= dasherize(name) %>-routing.module';<% } %>

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule, AbpModule, LayoutModule,<% if (routing) { %>
    <%= classify(name) %>RoutingModule<% } %>
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class <%= classify(name) %>Module { }
