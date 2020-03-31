document.addEventListener('DOMContentLoaded', function () {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  let ball = new Ball(30, 'green')
  ball.x = 100
  ball.y = 150
  ball.context = context
  ball.draw()

  window.requestAnimationFrame(animationLoop)

  // Velocity
  ball.vx = 1
  ball.vy = -1.5

  // Aceeleration
  let ax = 0.05
  let ay = 0.05

  function animationLoop () {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // update

    // X
    // ball.vx += ax
    // ball.x += ball.vx

    // Y
    ball.vy += ay
    ball.y += ball.vy

    // draw
    ball.draw()

    // Animate
    window.requestAnimationFrame(animationLoop)
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
