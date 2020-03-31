// Momentum - it's a product of MASS and Velocity

// p - momentum
// m - mass
// v - velocity

// p = mv

document.addEventListener('DOMContentLoaded', function () {
  let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')

  let g = 0.098 // gravity

  // Ball 1
  let ball1 = new Ball(20, 'blue')
  ball1.x = 90
  ball1.y = 50
  ball1.context = context

  //   window.requestAnimationFrame(animationLoop)

  // velocity

  function animationLoop () {
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // update

    // draw

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
