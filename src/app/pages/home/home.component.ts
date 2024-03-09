import { Component } from '@angular/core';
import { QuizzComponent } from "../../componentes/quizz/quizz.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [QuizzComponent]
})
export class HomeComponent {

}
