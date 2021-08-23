import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {

    serverId: number = 1553;
    status: string = 'Offline';
    binding = 'test input'

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    } 

    serverStatus() {
        return this.status;
    }

    getColor() {
        return this.status === 'online' ? 'green' : 'red';
    }
}