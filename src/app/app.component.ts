import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 

	profile1:string;
	profile2:string;

	constructor (private data:DataService) { }

	ngOnInit () {
		this.data.current1.subscribe(res => this.profile1 = res);
		this.data.current2.subscribe(res => this.profile2 = res);
	}

	setProfiles(){
		this.data.changeProfiles(this.profile1, this.profile2);
		this.data.current1.subscribe(res => this.profile1 = res);
		this.data.current2.subscribe(res => this.profile2 = res);
	}
}