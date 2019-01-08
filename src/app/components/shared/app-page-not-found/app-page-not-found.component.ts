import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './app-page-not-found.component.html',
  styleUrls: ['./app-page-not-found.component.css']
})
export class AppPageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
