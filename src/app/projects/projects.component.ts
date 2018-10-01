import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = PROJECTS;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToProjectDetail(projectIndex: number) {
    this.router.navigate(['/project/' + (projectIndex + 1)]);
  }

}
