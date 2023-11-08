import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {
  @Input() users: any = [];

  trackByFn(index: number, item: any): number {
    return item.id;
  }

  progressColor(value:number){
    if(value<=25){
      return 'var(--app-red)'
    }else if( value <= 35 ){
      return 'var(--app-yellow)';
    }else if( value <= 45 ){
      return 'var(--app-black)';
    }else if( value <= 65 ){
      return 'var(--app-green)';
    }else {
      return 'var(--app-purple)';
    }
  }

  moreColor(value:number){
    if(value>=65){
      const obj = {
        backgroundColor: 'var(--app-purple)',
        color: 'var(--app-white)'
      }
      return obj;
    }else {
      const obj = {
        backgroundColor: 'var(--app-light-grey)',
        color: 'var(--app-text-color-light)'
      }
      return obj
    }
  }
}
