import { Component } from '@angular/core';
import { HistoryService } from './services/history/history.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Digitalized-style';

  constructor(private historyService: HistoryService) {}

  // A l'ouverture du site, je lance ma feature d'historique
  ngOnInit() {
  this.historyService.getHistory();
  }
  
}
