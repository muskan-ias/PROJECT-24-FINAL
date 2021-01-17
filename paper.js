class paper {
  constructor(x, y, radius) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }

      this.x = x;
      this.y = y;
      this.r = radius;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      World.add(world, this.body)
  }

  display () {
      var paperPosition = this.body.position;
      push();
      translate(paperPosition.x, paperPosition.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill(100, 0, 255);
      ellipse(0, 0, this.r);
      pop();
  }
}