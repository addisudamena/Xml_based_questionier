import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {XMLData} from 'source.xml';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


var rawFile = new XMLHttpRequest();
rawFile.open("GET", XMLData, false);
rawFile.onreadystatechange = () => {
    if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
            var xmlasstring = rawFile.responseText;
            console.log('Your xml file as string', xmlasstring)
        }
    }
  }

export class HomePage {
  constructor(public navCtrl: NavController) {}




  /*

import XMLData from '../../xmldata/list.xml';

axios.get(XMLData, {
   "Content-Type": "application/xml; charset=utf-8"
})
.then((response) => {
   console.log('Your xml file as string', response.data);
});
*/
}
