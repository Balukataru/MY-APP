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
import { EmployeeComponent } from './employee/employee.component';
import { ShoppingDataComponent } from './shopping-data/shopping-data.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { AccountsComponent } from './accounts/accounts.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { BlogComponent } from './blog/blog.component';
import { WeatherComponent } from './weather/weather.component';
import { ImdbComponent } from './imdb/imdb.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { StudentsCardComponent } from './students-card/students-card.component';
import { CreateStudentIdComponent } from './create-student-id/create-student-id.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},    
    {path:'Derivatives',component:DerivativesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-details',component:StudentDetailsComponent}


  ]},
  {path:'mywebsite',component:MywebsiteComponent,children:[
    {path:'Home',component:HomeComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path: 'data-binding',component:DataBindingComponent},
    {path:'Rectangle',component:RectangleComponent},
    {path:'Circle',component:CircleComponent},
    {path:'BMI',component:BMIComponent},
    {path:'shopping',component:ShoppingDataComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'mail',component:MailComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:'blog',component:BlogComponent},
    {path:'weather',component:WeatherComponent},
    {path:'imdbrating',component:ImdbComponent},
    {path:'carousel',component:CarouselComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'students-card',component:StudentsCardComponent},
    {path:'create-student-id',component:CreateStudentIdComponent},
    {path:'vehicle-details/:id',canActivate:[AuthenticationGuard], component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
