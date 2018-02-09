import { SVG_NS } from '../settings';

export default class Circle {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
  }

render(svg) {
  let circle = document.createElementNS(SVG_NS, 'rect');
  circle.setAttributeNS(null, 'fill', 'white');
  circle.setAttributeNS(null, 'width', this.width);
  circle.setAttributeNS(null, 'height', this.height);
  circle.setAttributeNS(null, 'x', this.x);
  circle.setAttributeNS(null, 'y', this.y);

  svg.appendChild(circle);

  }
}



