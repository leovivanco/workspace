import { Component } from '@angular/core';
import { GeneralServerService } from './server/general-server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'server-on-of';
  serverOn: any[];
  serverOff: any[];
  constructor(private generalServerService: GeneralServerService){
    this.serverOff = this.generalServerService.off;
    this.serverOn = this.generalServerService.on;
    console.log(this.serverOff)
  }

}
