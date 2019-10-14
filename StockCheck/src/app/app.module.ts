import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Views/home/home.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { InventoryComponent } from './Components/Views/inventory/inventory.component';
import { StepIndicatorComponent } from './Components/Actions/Workflow/step-indicator/step-indicator.component';
import { EmployeeDetailsComponent } from './Components/Actions/Workflow/InventoryFlow/employee-details/employee-details.component';
import { InventoryCheckListComponent } from './Components/Actions/Workflow/InventoryFlow/inventory-check-list/inventory-check-list.component';
import { CompleteInventoryOrderComponent } from './Components/Actions/Workflow/InventoryFlow/complete-inventory-order/complete-inventory-order.component';
import { StepIndicatorDetailsComponent } from './Components/Actions/Workflow/step-indicator-details/step-indicator-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    InventoryComponent,
    StepIndicatorComponent,
    EmployeeDetailsComponent,
    InventoryCheckListComponent,
    CompleteInventoryOrderComponent,
    StepIndicatorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
