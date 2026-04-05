import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  standalone: true
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
