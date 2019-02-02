import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralServerService {
  off: any = [
    'Facebook',
    'Google',
  ];
  on: any = [
    'Amazon',
    'Twitter',
  ];
  constructor() {
  }
  addServer(status:string, nameServer: string){
    if (status !== 'off') {
      this.on.push(nameServer)
    }else{
      this.off.push(nameServer)
    }
  }
  changeServer(service: number, title: string){
    //console.log(service)
    if (title === 'On') {
      this.off.push(this.on[service]);
      this.on.splice(service, 1)
    }else{
      this.on.push(this.off[service]);
      this.off.splice(service, 1)

    }
  }
}
