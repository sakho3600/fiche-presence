import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  title = 'fiche-poste';
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  constructor(private serverService: ServerService){

  }
  onAddServer(name: any){
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    })
  }

  onSave() {
    this.serverService.storeServers(this.servers)
    .subscribe(
             (response) => console.log(response),
             (error) => console.log(error)
         );
  }
  private generateId() {
    return Math.round(Math.random()*10000);
  }
  
  ngOnInit() {
  }

}
