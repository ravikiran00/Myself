import { Component, inject, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {  NgbOffcanvas, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MyAcademics } from '../modals/my-academics';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MySkillsComponent } from './myskills/my-skills/my-skills.component';
import { MyProjectsComponent } from './myprojects/my-projects/my-projects.component';
import { MyYoutubechanelComponent } from './myyoutubechanel/my-youtubechanel/my-youtubechanel.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyContactmeComponent } from './contactme/my-contactme/my-contactme.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipModule, TabsModule, MySkillsComponent, MyProjectsComponent, MyYoutubechanelComponent, MyContactmeComponent, FormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private offcanvasService = inject(NgbOffcanvas);
  title = 'MyselfRaviPatil';
  
  MyAcadamics : MyAcademics[] = [
    {
      TitleOfTheDegree : "10th class",
      PassingYear : 2010,
      Percentage : "80.00"

    },
    {
      TitleOfTheDegree : "Diploma In E&TC",
      PassingYear : 2014,
      Percentage : "72.00"

    },
    {
      TitleOfTheDegree : "BE In E&TC",
      PassingYear : 2017,
      Percentage : "69.00"

    },
    {
      TitleOfTheDegree : "PG In DAC",
      PassingYear : 2020,
      Percentage : "B Grade"
    },
  ]

  openNoBackdrop(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true});
	}

  openYearWiseDetails(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { scroll: true});
	}

}
