import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  listMusic: any;

  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getVideos();
    for (let i of this.listMusic) {
      i.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(i.url); 
    }
  }

  getVideos(){
    this.listMusic = [
      {
        "name": 'This is America',
        "url": "https://www.youtube.com/embed/VYOjWnS4cMY"
      },
      {
        "name": 'Zafar',
        "url": "https://www.youtube.com/embed/ss05HQ-kG44"
      },
      {
        "name": 'This is America',
        "url": "https://www.youtube.com/embed/VYOjWnS4cMY"
      },
      {
        "name": 'Zafar',
        "url": "https://www.youtube.com/embed/ss05HQ-kG44"
      },
      {
        "name": 'This is America',
        "url": "https://www.youtube.com/embed/VYOjWnS4cMY"
      },
      {
        "name": 'Zafar',
        "url": "https://www.youtube.com/embed/ss05HQ-kG44"
      }
    ];
  }

}
