import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  menus: any = [
    {
      id: 1,
      icon: './assets/icons/cube.svg'
    },
    {
      id: 2,
      icon: './assets/icons/bar-graph.svg'
    },
    {
      id: 3,
      icon: './assets/icons/duplicate.svg'
    },
    {
      id: 4,
      icon: './assets/icons/checkmark.svg'
    },
    {
      id: 5,
      icon: './assets/icons/settings.svg'
    },
    {
      id: 6,
      icon: './assets/icons/download.svg'
    },
  ];

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
