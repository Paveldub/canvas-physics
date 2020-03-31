function Ball (radius, color) {
  // base
  let ball = this

  // Specifications
  ball.r = radius || 10 // ball radius
  ball.c = color || 'red' // ball color
  ball.x = 0 // center X
  ball.y = 0 // center Y
  ball.m = 0 // mass
  ball.vx = 0 // velocity of X direction
  ball.vy = 0 // velocity of Y direction
  ball.context = null // the drawing context of ball
}

Ball.prototype.draw = function () {
  // base
  let ball = this

  // check context
  if (!ball.context) return

  // draw ball
  ball.context.beginPath()
  ball.context.fillStyle = ball.c
  ball.context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
  ball.context.fill()
}
