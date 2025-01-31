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
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { ViewStudentComponent } from './view-student/view-student.component';
import { Sibbling1Component } from './sibbling1/sibbling1.component';
import { Sibbling2Component } from './sibbling2/sibbling2.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { CapitalDirective } from './capital.directive';
import { BalancePipe } from './balance.pipe';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';
import { ParentComponent } from './parent/parent.component';
import { TextAreaComponent } from './text-area/text-area.component';
// import { CardComponent } from './card/card.component';
// import { UpiComponent } from './upi/upi.component';

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
    VehicleDetailsComponent,
    ViewStudentComponent,
    Sibbling1Component,
    Sibbling2Component,
    ChildComponent,
    RatingComponent,
    CapitalDirective,
    BalancePipe,
    ParentComponent,
    TextAreaComponent,
    // CardComponent,
    // UpiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
    
  ],
  providers: [ {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
