import { SVG_NS, KEYS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.gameElement = document.getElementById(this.element);
		this.board = new Board(this.width, this.height);
		this.ball = new Ball(7, this.width, this.height);
		this.ball2 = new Ball(7, this.width, this.height);
		this.paddleWidth = 20;
		this.paddleHeight = 55;
		this.boardGap = 10;

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z, 
			'player1'
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down,
			'player2'
		);

		document.addEventListener('keydown', event => {
      switch(event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    });

	this.score1 = new Score(this.width / 2 - 50, 30, 30);
	this.score2 = new Score(this.width / 2 + 25, 30, 30);
	}

	render() {
		if(this.pause){
			return;
		} 
		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');

		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);

		this.board.render(svg);

		this.player1.render(svg);
		this.player2.render(svg);

		this.ball.render(svg, this.player1, this.player2);
		this.ball2.render(svg, this.player1, this.player2);

		this.score1.render(svg, this.player1.score);
		this.score2.render(svg, this.player2.score);

		this.gameElement.appendChild(svg);
	}
}

let ambience = new Audio('public/sounds/parkambience.wav');
 +ambience.play();