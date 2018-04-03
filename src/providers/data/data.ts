import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  public items: any;
  constructor(public http: HttpClient) {
    this.items = [
      {
        "image": "https://picsum.photos/200/300",
        "name": "Cassio Zen",
        "email": "cassiozen@gmail.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "medkit"
      },
      {
        "image": "https://picsum.photos/200/300",
        "name": "Dan Abramov",
        "email": "gaearon@somewhere.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "contact"
      },
      {
        "image": "https://picsum.photos/200/300",
        "name": "Pete Hunt",
        "email": "floydophone@somewhere.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "heart"
      },
      {
        "image": "https://picsum.photos/200/300",
        "name": "Paul O’Shannessy",
        "email": "zpao@somewhere.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "headset"
      },
      {
        "image": "https://picsum.photos/200/300",
        "name": "Ryan Florence",
        "email": "rpflorence@somewhere.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "glasses"
      },
      {
        "image": "https://picsum.photos/200/300",
        "name": "Sebastian Markbage",
        "email": "sebmarkbage@here.com",
        "telefone": "08(93)100-48-7502",
        "whatsapp": "55(61)016-60-4214",
        "address": "7842 Golden Promenade",
        "type": "speedometer"
      }
    ]
  }

  filterItems(searchitem) {
    return this.items.filter(item => {
      return item.name.toLowerCase().indexOf(searchitem.toLowerCase()) > -1;
    })
  }

}
