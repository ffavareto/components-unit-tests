import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentComponent } from './components/simple-component/simple-component.component';
import { NotSoSimpleComponentComponent } from './components/not-so-simple-component/not-so-simple-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    SimpleComponentComponent,
    NotSoSimpleComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-unit-tests';

  onClick() {
    console.log('Clicked!');
  }
}
