import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LayoutConnectionComponent} from './components/layout-connection/layout-connection.component';
import {InputFieldComponent} from './utils/input-field/input-field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CreateFormComponent} from './utils/create-form/create-form.component';
import { MatListModule} from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule} from "@angular/material/icon";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";
import { HomePageComponent } from './components/home-page/home-page.component';
import {NgxsModule} from "@ngxs/store";
import {routes} from "./routes/route";
import {ngxsStates} from "./utils/constant/states";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormService} from "./request/form/service/form.service";
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './utils/button/button.component';
import {MatDialogModule} from "@angular/material/dialog";
import { TextFieldComponent } from './utils/text-field/text-field.component';
import { EditFieldComponent } from './utils/edit-field/edit-field.component';
import {TicketService} from "./request/ticket/service/ticket.service";
import { UserAccountComponent } from './components/user-account/user-account.component';

const material = [ MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];

const components = [AppComponent,
  LayoutConnectionComponent,
  InputFieldComponent,
  CreateFormComponent,
  HeaderComponent,
  HomePageComponent]

@NgModule({
  declarations: [
    ...components,
    ButtonComponent,
    TextFieldComponent,
    EditFieldComponent,
    UserAccountComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ...material,
        NgbModule,
        NgxsModule.forRoot([...ngxsStates]),
        MatDatepickerModule,
        ReactiveFormsModule
    ],
  providers: [ FormService, TicketService ],
  exports: [ RouterModule, ...components ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
