import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./post/index/index.component";
import { ViewComponent } from "./post/view/view.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, IndexComponent, ViewComponent]
})
export class AppComponent {
  title = 'tp5-crud';
}
