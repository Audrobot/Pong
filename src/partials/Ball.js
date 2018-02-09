import { SVG_NS, KEYS } from '../settings';

export default class Circle {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();

    document.addEventListener('keydown', event => {
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
    
    });

  }

reset() {
  this.x = this.boardWidth / 2;
  this.y = this.boardHeight / 2;
  this.vy = 0;
  while(this.vy === 0) {
    this.vy = Math.floor(Math.random() * 10 - 5);
  }
  this.vx = this.direction * (8 - Math.abs(this.vy));
}

wallCollision() {
  const hitLeft = this.x - this.radius <= 0;
  const hitRight = this.x + this.radius >= this.boardWidth;
  const hitTop = this.y - this.radius <= 0;
  const hitBottom = this.y + this.radius >= this.boardHeight;

  if(hitTop || hitBottom) {
    this.vy = -this.vy;
  } else if (hitLeft || hitRight) {
    // this.reset();
    this.vx = -this.vx;
  }

}

render(svg, player1, player2) {
  
  if(this.pause){
    return;
  } 
   
  this.x += this.vx;
  this.y += this.vy;
  
  this.wallCollision();

  let circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttributeNS(null, 'r', this.radius);
  circle.setAttributeNS(null, 'cx', this.x);
  circle.setAttributeNS(null, 'cy', this.y);
  circle.setAttributeNS(null, 'fill', 'white');
  
  svg.appendChild(circle);

  }
}



