import { Component, OnInit } from '@angular/core';
import { GeneralServerService } from 'src/app/server/general-server.service';
@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  server: any = {
    status: '',
    nameService: ''
  }
  constructor(private generalServerService: GeneralServerService) { }

  ngOnInit() {
  }
  onSubmit(){
    //console.log(this.server.nameService, this.server.status)
    this.generalServerService.addServer(this.server.status, this.server.nameService)
    this.cleanForm();
  }
  cleanForm(){
    this.server = {
      status: '',
      nameService: ''
    }
  }
}
