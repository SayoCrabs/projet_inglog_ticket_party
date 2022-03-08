import {Routes} from "@angular/router";
import {LayoutConnectionComponent} from "../components/layout-connection/layout-connection.component";
import {HomePageComponent} from "../components/home-page/home-page.component";

export const routes : Routes = [
  { path: 'layout-connection-component', component: LayoutConnectionComponent },
  { path: 'home-page-component', component: HomePageComponent }

];
