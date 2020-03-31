document.addEventListener('DOMContentLoaded', function () {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  let g = 0.098 // gravity

  // Ball 1
  let ball1 = new Ball(20, 'blue')
  ball1.x = 90
  ball1.y = 50
  ball1.context = context

  window.requestAnimationFrame(animationLoop)

  // velocity
  ball1.vx = 5
  ball1.vy = 0

  function animationLoop () {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // update
    ball1.vy += g
    ball1.x += ball1.vx
    ball1.y += ball1.vy

    // draw
    ball1.draw()

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
