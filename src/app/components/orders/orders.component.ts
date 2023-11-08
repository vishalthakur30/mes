import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @Input() orderList: any = [];
  isVisible:boolean = false;
  customerData:any;

  openModal(data){
    this.customerData = data
    this.isVisible = true;
  }

  closeModal(){
    this.isVisible = false;
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
