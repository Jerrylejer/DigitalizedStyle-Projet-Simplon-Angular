import { Component } from '@angular/core';
import { Item_productdetails } from 'src/app/mocks/product-details.mock';
import { HistoryService } from 'src/app/services/history/history.service';

@Component({
  selector: 'app-history-views',
  templateUrl: './history-views.component.html',
  styleUrls: ['./history-views.component.css']
})
export class HistoryViewsComponent {
  // Ma variable qui va contenir les one-product-card précédemment consultés
  histories: Item_productdetails[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.histories = this.historyService.getHistory();
  }
}
