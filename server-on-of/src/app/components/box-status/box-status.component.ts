import { Component, OnInit, Input } from '@angular/core';
import { GeneralServerService } from 'src/app/server/general-server.service';
@Component({
  selector: 'app-box-status',
  templateUrl: './box-status.component.html',
  styleUrls: ['./box-status.component.scss']
})
export class BoxStatusComponent implements OnInit {
  @Input() title: string;
  @Input() server: [];
  constructor(private generalServerService: GeneralServerService) { }

  ngOnInit() {
  }
  changeStatus(service: number, title: string){

    this.generalServerService.changeServer(service, title)
    //console.log(this.server)
  }
}
