import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { HeaderComponent } from '../components/header/header.component';
import { NewUsersComponent } from '../components/new-users/new-users.component';
import { OrdersComponent } from '../components/orders/orders.component';
import { NgApexchartsModule } from "ng-apexcharts";

const modules:any = [
  CommonModule,
  NgApexchartsModule,
];
const components:any = [
  CardComponent,
  SideMenuComponent,
  HeaderComponent,
  OrdersComponent,
  NewUsersComponent,
];

@NgModule({
  declarations: [ ...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule { }
