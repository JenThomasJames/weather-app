import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  location: string = "";
  @Output() searchEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    if (this.location === "") {
      window.alert("Please enter a valid city name!");
    }
    else {
      this.searchEvent.emit(this.location);
    }
  }

}
