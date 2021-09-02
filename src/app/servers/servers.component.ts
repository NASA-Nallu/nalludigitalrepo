import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  severCreationStatus = 'No sever was created';
  serverName = 'Testserver';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.severCreationStatus = 'Sever was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
