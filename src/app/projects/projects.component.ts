import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
    {
    'name' : 'My Project',
    'year' : 2018,
    'description': 'Project description placeholder'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
