document.addEventListener('DOMContentLoaded', function () {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  let g = 0.098 // gravity

  // Ball 1
  let ball1 = new Ball(20, 'blue')
  ball1.x = 100
  ball1.y = 80
  ball1.context = context

  // Ball 2
  let ball2 = new Ball(20, 'green')
  ball2.x = 150
  ball2.y = 80
  ball2.context = context

  // Ball 3
  let ball3 = new Ball(20, 'pink')
  ball3.x = 500
  ball3.y = 400
  ball3.context = context

  window.requestAnimationFrame(animationLoop)

  // velocity
  ball1.vy = 0
  ball2.vy = 2
  ball3.vy = -7

  function animationLoop () {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // update
    // Y1
    ball1.vy += g
    ball1.y += ball1.vy

    // Y2
    ball2.vy += g
    ball2.y += ball2.vy

    // Y3
    ball3.vy += g
    ball3.y += ball3.vy

    // draw
    ball1.draw()
    ball2.draw()
    ball3.draw()

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
