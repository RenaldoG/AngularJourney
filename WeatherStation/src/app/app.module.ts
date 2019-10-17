import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomeComponent } from './Views/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DataComponent } from './Views/data/data.component';
import { ElementsTableComponent } from './Controls/elements-table/elements-table.component';
import { NewTableComponent } from './Controls/new-table/new-table.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, DataComponent, ElementsTableComponent, NewTableComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    AppRoutingModule, 
    MatButtonModule, 
    MatTableModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatPaginatorModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
