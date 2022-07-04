import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TDFormComponent } from './tdform/tdform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentComponent } from './assignment/assignment.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CalculatorComponent } from './calculator/calculator.component';
import { MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentbComponent } from './parentb/parentb.component';
import { ChildbComponent } from './childb/childb.component';
import { ValuesComponent } from './values/values.component';
import { PdfconverterComponent } from './pdfconverter/pdfconverter.component';
import { FlexComponent } from './flex/flex.component';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { DialogComponent } from './dialog/dialog.component';

const appRoutes: Routes=[
  {path: '', component: HomepageComponent },
  {path: 'tdform', component: TDFormComponent },
  {path: 'rform', component:ReactiveformComponent },
  {path: 'assignment', component:AssignmentComponent},
  {path: 'calculator', component:CalculatorComponent},
  {path: 'parent', component:ParentComponent},
  {path: 'parentb', component:ParentbComponent},
  {path: 'values', component:ValuesComponent},
  {path: 'pdfconverter', component:PdfconverterComponent},
  {path: 'flex', component:FlexComponent},
  {path: 'productmanage', component:ProductmanageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TDFormComponent,
    ReactiveformComponent,
    AssignmentComponent,
    CalculatorComponent,
    ParentComponent,
    ChildComponent,
    ParentbComponent,
    ChildbComponent,
    ValuesComponent,
    PdfconverterComponent,
    FlexComponent,
    ProductmanageComponent,
    DialogComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
