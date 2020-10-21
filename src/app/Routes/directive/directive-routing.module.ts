import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgClassComponent } from './Routes/ng-class/ng-class.component';
import { NgModelComponent } from './Routes/ng-model/ng-model.component';
import { NgIfComponent } from './Routes/ng-if/ng-if.component';
import { NgForComponent } from './Routes/ng-for/ng-for.component';
import { NgSwitchComponent } from './Routes/ng-switch/ng-switch.component';
import { AttributeDirectiveComponent } from './Routes/attribute-directive/attribute-directive.component';


const routes: Routes = [
  { path: 'directives/ngclass', component: NgClassComponent },
  { path: 'directives/ngmodel', component: NgModelComponent },
  { path: 'directives/ngif', component: NgIfComponent },
  { path: 'directives/ngfor', component: NgForComponent },
  { path: 'directives/ngswitch', component: NgSwitchComponent },
  { path: 'directives/attribute-directive', component: AttributeDirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveRoutingModule { }