import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';
import { InterpolationComponent } from './Routes/interpolation/interpolation.component';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateStatementsComponent } from './Routes/template-statements/template-statements.component';
import { BindingSyntaxComponent } from './Routes/binding-syntax/binding-syntax.component';
import { PropertyBindingComponent } from './Routes/property-binding/property-binding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './Routes/property-binding/child/child.component';
import { AttributeBindingComponent } from './Routes/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './Routes/class-binding/class-binding.component';
import { EventBindingComponent } from './Routes/event-binding/event-binding.component';
import { EventEmittingBindingComponent } from './Routes/event-emitting-binding/event-emitting-binding.component';
import { TwoWayBindingComponent } from './Routes/two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './Routes/template-reference-variable/template-reference-variable.component';
import { TemplateExpressionOperatorsComponent } from './Routes/template-expression-operators/template-expression-operators.component';
import { SvgComponent } from './Routes/svg/svg.component'



@NgModule({
  declarations: [TemplateDashboardComponent, InterpolationComponent, TemplateStatementsComponent, BindingSyntaxComponent, PropertyBindingComponent, ChildComponent, AttributeBindingComponent, ClassBindingComponent, EventBindingComponent, EventEmittingBindingComponent, TwoWayBindingComponent, TemplateReferenceVariableComponent, TemplateExpressionOperatorsComponent, SvgComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
