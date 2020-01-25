import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() pPic: string;
  @Input() pName: string;
  @Input() pDescription: string;
  @Input() pPrice: number;
  @Input() pReview: number;

  constructor() { }

  ngOnInit() {
  }

}
