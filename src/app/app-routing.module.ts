import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DerivativesComponent } from './derivatives/derivatives.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},    
    {path:'Derivatives',component:DerivativesComponent}

  ]},
  {path:'mywebsite',component:MywebsiteComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
