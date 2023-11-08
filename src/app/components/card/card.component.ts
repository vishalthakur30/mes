import { Component, Input } from '@angular/core';

export interface card {
  header: string | null | undefined,
  sub_header: string | null | undefined,
  url: string | null | undefined,
  value: number | null | undefined
};
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData: card = {
    header: '',
    sub_header: '',
    url: '',
    value: null
  }
}
