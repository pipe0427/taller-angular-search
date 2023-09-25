import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() searchResults = new EventEmitter<any>();
  result:any = ''

  obtenerResultado(){
    this.searchResults.emit(this.result)
  }
}
