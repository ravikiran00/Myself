import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarousel, NgbCarouselModule, NgbModal, NgbScrollSpyModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgbScrollSpyModule, NgbCarouselModule, FormsModule ],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent implements OnInit {
  private modalService = inject(NgbModal);
  images = [
    'assets/images/projects/ccrms_dashboard.png',
    'assets/images/projects/ccrms_users.png',
    'assets/images/projects/ccrms_statements.png',
    'assets/images/projects/ccrms_statementDetails.png',
    'assets/images/projects/ccrms_report.png',
    'assets/images/projects/users_dashboard.png',
    'assets/images/projects/user_mytransaction.png',
    'assets/images/projects/user_mygallary.png',
    'assets/images/projects/user_pendingreceipts.png'
  ];

  paused = false;
  unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  imageModalTitle : string = "";
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

  onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

  ngOnInit(){ 
  }
  
  openxl(content: TemplateRef<any>, modalTitle: string) {
    this.imageModalTitle = modalTitle;
		this.modalService.open(content, { size: 'xl', centered: true });
	}
}
