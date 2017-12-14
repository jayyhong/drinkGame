import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  cardDataBank: any;
  cards: any;
  shuffledDeck: any;
  currentCard: any;

  constructor(public navCtrl: NavController) {
    this.cardDataBank = [
      {
        name: "everybodyDrinks",
        description: "Everybody DRINKS",
        count: 4,
        image: ""
      },
      {
        name: "youDrink",
        description: "Take a drink and pull another card",
        count: 4,
        image: ""
      },
      {
        name: "safeCard",
        description: "Safe",
        count: 4,
        image: ""
      }
    ];

    this.shuffledDeck = [];
    this.currentCard = {
      name: "",
      description: "",
      count: "",
      image: ""
    };
  }

  ngOnInit() {
    this.shuffleDeck();
  }

  shuffleDeck() {
    this.shuffledDeck = [];
    this.currentCard = {
      name: "",
      description: "",
      count: "",
      image: ""
    };
    this.cards = this.cardDataBank.slice();
    while (this.cards.length > 0) {
      let random = Math.floor(Math.random() * this.cards.length);
      this.shuffledDeck.push(this.cards[random]);
      this.cards.splice(random, 1);
    }
    console.log(this.shuffledDeck)
  }

  pullCard() {
    if (this.shuffledDeck.length === 0) {
      return alert ("Sorry no more cards")
    }
    this.currentCard = this.shuffledDeck[0];
    this.shuffledDeck.splice(0,1);
    console.log("currentcard", this.currentCard);
  }
}
