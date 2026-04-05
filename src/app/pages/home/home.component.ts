import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  route: Router = inject(Router);

  public toTodoPage() {
    this.route.navigate(['todo'], {
      queryParams: { id: 1, name: 'Todo' },
    });
  }
}
