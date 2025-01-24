import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MywebsiteComponent } from './mywebsite/mywebsite.component';
import { HomeComponent } from './home/home.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShoppingDataComponent } from './shopping-data/shopping-data.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule} from "@angular/common/http";
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
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    CalculatorComponent,
    DataBindingComponent,
    MywebsiteComponent,
    HomeComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DerivativesComponent,
    DirectivesComponent,
    EmployeeComponent,
    ShoppingDataComponent,
    VehicleComponent,
    FlipcartComponent,
    MailComponent,
    AccountsComponent,
    PinterestComponent,
    BlogComponent,
    WeatherComponent,
    ImdbComponent,
    CarouselComponent,
    CreateVehicleComponent,
    StudentsCardComponent,
    CreateStudentIdComponent,
    CreateUserComponent,
    StudentDetailsComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
