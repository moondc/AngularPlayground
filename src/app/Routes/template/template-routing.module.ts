import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './Routes/interpolation/interpolation.component';
import { TemplateStatementsComponent } from './Routes/template-statements/template-statements.component';
import { BindingSyntaxComponent } from './Routes/binding-syntax/binding-syntax.component';
import { PropertyBindingComponent } from './Routes/property-binding/property-binding.component';
import { AttributeBindingComponent } from './Routes/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './Routes/class-binding/class-binding.component';
import { EventBindingComponent } from './Routes/event-binding/event-binding.component';
import { EventEmittingBindingComponent } from './Routes/event-emitting-binding/event-emitting-binding.component';
import { TwoWayBindingComponent } from './Routes/two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './Routes/template-reference-variable/template-reference-variable.component';
import { TemplateExpressionOperatorsComponent } from './Routes/template-expression-operators/template-expression-operators.component';
import { SvgComponent } from './Routes/svg/svg.component';


const routes: Routes = [
  { path: 'templates/interpolation', component: InterpolationComponent },
  { path: 'templates/template-statements', component: TemplateStatementsComponent },
  { path: 'templates/binding-syntax', component: BindingSyntaxComponent },
  { path: 'templates/property-binding', component: PropertyBindingComponent },
  { path: 'templates/attribute-binding', component: AttributeBindingComponent },
  { path: 'templates/class-binding', component: ClassBindingComponent },
  { path: 'templates/event-binding', component: EventBindingComponent },
  { path: 'templates/event-emitting-binding', component: EventEmittingBindingComponent },
  { path: 'templates/two-way-binding', component: TwoWayBindingComponent },
  { path: 'templates/template-reference-variable', component: TemplateReferenceVariableComponent },
  { path: 'templates/template-expression-operators', component: TemplateExpressionOperatorsComponent },
  { path: 'templates/svg', component: SvgComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TemplateRoutingModule { }