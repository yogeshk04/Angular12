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

    serverStatus() {
        return this.status;
    }
}