import { Component, OnInit, Input } from '@angular/core';

import {Joke} from '../joke'

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  constructor() { }

  @Input('joke') data: Joke;


  ngOnInit() {

  }
}