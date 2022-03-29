import {Routes} from "@angular/router";
import {LayoutConnectionComponent} from "../components/layout-connection/layout-connection.component";
import {HomePageComponent} from "../components/home-page/home-page.component";

export const routes : Routes = [
  { path: 'connection', component: LayoutConnectionComponent },
  { path: 'inscription', component: LayoutConnectionComponent },
  { path: '', component: HomePageComponent }
];
