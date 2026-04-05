import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
public readonly route: ActivatedRoute = inject(ActivatedRoute);

ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    console.log("route id:", this.route.snapshot.paramMap.get('id'));
    console.log("route name:", this.route.snapshot.paramMap.get('name'));
 }
}
