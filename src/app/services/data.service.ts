import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private source1 = new BehaviorSubject<string>('');
  private source2 = new BehaviorSubject<string>('');
  current1 = this.source1.asObservable();
  current2 = this.source2.asObservable();

  constructor() { }

  changeProfiles(pro1:string, pro2:string){
  	this.source1.next(pro1);
  	this.source2.next(pro2);
  }

}
