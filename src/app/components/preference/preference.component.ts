import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {
  data: any = '';
  headerValue: any = '';
  prefernceArray: Array<String> = [];
  title = 'prakash';
  constructor(private dataService: DataService) {
    this.getPrefernceData();
  }
  ngOnInit() {
    // const data = this.dataService.dummyObject;
  }
  getPrefernceData() {
    return this.dataService.myData()
    .subscribe(data => {
      this.data = data;
      this.headerValue = Object.keys(data);
      for (const prop of this.headerValue){
       this. prefernceArray.push(this.data[prop]);
      }
      console.log(this.prefernceArray);
     });
  }

}
