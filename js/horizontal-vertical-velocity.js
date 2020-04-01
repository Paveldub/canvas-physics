document.addEventListener('DOMContentLoaded', function () {
  // Definition
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  let numOfBalls = 10
  let balls = []

  for (let i = 0; i < numOfBalls; i++) {
    let radius = getRandomInt(10, 25)
    let ball = new Ball(radius)
    ball.x = getRandomInt(radius, canvas.width - radius)
    ball.y = getRandomInt(radius, canvas.height - radius)
    ball.m = radius
    ball.context = context
    ball.vx = getRandomInt(0, 20) - 10
    ball.vy = getRandomInt(0, 20) - 10

    balls.push(ball)
  }

  window.requestAnimationFrame(animationLoop)

  function animationLoop () {
    // Clear Canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // Update
    moveBalls()
    checkBallCollisions()

    // Draw
    drawBalls()

    // Animate
    window.requestAnimationFrame(animationLoop)
  }

  function move (ball) {
    ball.x += ball.vx
    ball.y += ball.vy
    checkEdges(ball)
  }

  function moveBalls () {
    for (let i = 0; i < numOfBalls; i++) {
      move(balls[i])
    }
  }

  function drawBalls () {
    for (let i = 0; i < numOfBalls; i++) {
      balls[i].draw()
    }
  }

  function isCollided (ball1, ball2) {
    return (
      Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r &&
      Math.abs(ball1.y - ball2.y) < ball1.r + ball2.r
    )
  }

  function checkBallCollisions () {
    for (let i = 0; i < numOfBalls; i++) {
      let ball1 = balls[i]
      for (let j = 0; j < numOfBalls; j++) {
        let ball2 = balls[j]

        if (isCollided(ball1, ball2)) {
          // New horizontal Velocity of Ball 1 After Collision
          let vx1 = ((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m)
          vx1 += (2 * ball2.m * ball2.vx) / (ball1.m + ball2.m)

          // New horizontal Velocity of Ball 2 After Collision
          let vx2 = ((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m)
          vx2 += (2 * ball1.m * ball1.vx) / (ball1.m + ball2.m)

          ball1.vx = vx1
          ball2.vx = vx2

          // New vertical Velocity of Ball 1 After Collision
          let vy1 = ((ball1.m - ball2.m) * ball1.vy) / (ball1.m + ball2.m)
          vy1 += (2 * ball2.m * ball2.vy) / (ball1.m + ball2.m)

          // New vertical Velocity of Ball 2 After Collision
          let vy2 = ((ball2.m - ball1.m) * ball2.vy) / (ball2.m + ball1.m)
          vy2 += (2 * ball1.m * ball1.vy) / (ball1.m + ball2.m)

          ball1.vy = vy1
          ball2.vy = vy2
        }
      }
    }
  }

  // Detect Edge Collisions
  function checkEdges (ball) {
    // horizontal edges
    if (ball.x + ball.r > canvas.width || ball.x - ball.r < 0) {
      ball.vx *= -1
    }

    // vertical edges
    if (ball.y + ball.r > canvas.height || ball.y - ball.r < 0) {
      ball.vy *= -1
    }
  }

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })()
})

// random generator function
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}
