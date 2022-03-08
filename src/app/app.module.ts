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

@NgModule({
  declarations: [
    AppComponent,
    LayoutConnectionComponent,
    InputFieldComponent,
    CreateFormComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'connection', component: LayoutConnectionComponent },
      { path: '', component: HomePageComponent }

    ]),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
