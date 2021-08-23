import { Component } from "@angular/core"
@Component({
    selector: 'app-success',
    template: `
        <div class='success'>This is success!!!</div>    
    `,
    styles: [`
        .success {
            padding: 10px;
            background-color: green;
            border: 2px solid blue;
        }
    `]
})

export class SuccessComponent {

}