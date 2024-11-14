import { Component, OnInit, Renderer2 } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player'

@Component({
  selector: 'app-my-youtubechanel',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './my-youtubechanel.component.html',
  styleUrls: ['./my-youtubechanel.component.css']
})
export class MyYoutubechanelComponent implements OnInit {

  videoLinks = ['3zibuBCBiQw','t_hyypPlQbY','RnTIuOyAdFE', 'ao9sXirjIrY']

  constructor(private renderer : Renderer2) { }

  ngOnInit() {
    const tag = this.renderer.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const body = this.renderer.selectRootElement('body',true);
    this.renderer.appendChild(body,tag);
  }

}
