import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  currentPosition: any;
  positionArray: any;

  constructor(public navCtrl: NavController) {
    this.positionArray = ["one", "two", "three"]
    this.currentPosition = null;
  }

  ngOnInit() {
    //play cup shuffling animation, after animation is done, then set the current
    //position of ball
    this.currentPosition = Math.floor(Math.random() * 3);
  }

  start () {
    //play animation and set currrent position of ball to a number
    this.currentPosition = Math.floor(Math.random() * 3);
    console.log(this.currentPosition)
  }

  select() {
    console.log(event.target.className)
    console.log(event.target.style.marginTop = "-50px")
    if (event.target.className.includes(this.positionArray[this.currentPosition])) {
      console.log('Win')
    } else {
      console.log('Lose')
    }
  }

}
