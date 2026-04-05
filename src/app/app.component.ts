import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  public readonly name: string = 'Ali Rahimi';
  public readonly id: string = 'el-1';

  public handleClick(): void {
    alert(`Hello, ${this.name}`);
  }
 
  public handleMouseEnter(e: MouseEvent): void {
    console.log('Mouse entered:', e);
  }
}
