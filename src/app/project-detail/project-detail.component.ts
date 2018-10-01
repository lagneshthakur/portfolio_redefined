import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Project, PROJECTS } from '../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  @Input()
  project: Project;

  constructor(private route: ActivatedRoute,
    private router: Router,
    ) { }
  ngOnInit() {
    const projectIndex = this.route.paramMap['destination']['_value']['id'];
    this.project = PROJECTS[projectIndex - 1];
  }

}
