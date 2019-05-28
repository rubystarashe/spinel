<template>
<div>
  <canvas class="snow_canvas" :id="'snow_canvas_' + type" @mousemove="mousemove" @mouseout="mouseout"/>
</div>
</template>

<script>
export default {
  props: ['type', 'count'],
  data() {
    return {
      requestAnimationFrame: null,
      canvas: null,
      ctx: null,
      flakeCount: this.count,
      mouseon: false,
      mouse: {
        x: -100,
        y: -100
      },
      mouseParring: 150,
      p_blur: false
    }
  },
  computed: {
    flakes() {
      if(!this.canvas) return []
      let flakes = []
      for (var i = 0; i < this.flakeCount; i++) {
        flakes.push(this.setFlake());
      }
      return flakes
    }
  },
  mounted() {
    this.canvas = document.getElementById("snow_canvas_" + this.type),
    this.ctx = this.canvas.getContext("2d")
    this.setscreen()
    this.snow()
    window.addEventListener('resize', () => {
      this.setscreen()
    })
  },
  methods: {
    setscreen() {
      this.ctx.canvas.width  = window.innerWidth
      this.ctx.canvas.height = window.innerHeight
      this.canvas.rect = this.canvas.getBoundingClientRect()
    },
    mousemove(e) {
      this.mouseon = true
      this.mouse = {
        x: e.offsetX,
        y: e.offsetY
      }
    },
    mouseout() {
      this.mouseon = false
    },
    setFlake(flake = null) {
      if(flake) {
        flake.x = Math.floor(Math.random() * this.canvas.rect.width)
        flake.y = 0
        flake.size = (Math.random() * 7) + 2
        if(this.type == 'front') flake.size = (Math.random() * 20) + 10
        flake.speed = (Math.random() * 4) + 2
        flake.velY = flake.speed
        flake.velX = -1 * flake.speed
        flake.opacity = flake.size * 0.2
        flake.stepSize = (Math.random()) / 30
      }
      else return {
        speed: 0,
        velY: (Math.random() * 1) + 0.5,
        velX: (Math.random() * 1) + 0.5,
        x: Math.floor(Math.random() * this.canvas.rect.width),
        y: Math.floor(Math.random() * this.canvas.rect.height),
        size: 0,
        stepSize: 0,
        step: 0,
        opacity: 0
      }
    },
    snow() {
      this.ctx.clearRect(0, 0, this.canvas.rect.width, this.canvas.rect.height)

      for (var i = 0; i < this.flakeCount; i++) {
        var flake = this.flakes[i],
            x = this.mouse.x,
            y = this.mouse.y,
            x2 = flake.x,
            y2 = flake.y

        let mfx = flake.x - this.mouse.x
        let mfy = flake.y - this.mouse.y

        var dist = Math.sqrt(mfx * mfx + mfy * mfy)
        if (dist < this.mouseParring && this.mouseon) {
            var force = this.mouseParring / (dist * dist),
                xcomp = (this.mouse.x - flake.x) / dist,
                ycomp = 0

            flake.velX -= force * xcomp
            flake.velY -= force * ycomp

        } else {
            flake.velX *= 0.98;
            if (flake.velY <= flake.speed) {
                flake.velY = flake.speed
            }
            flake.velX += Math.cos(flake.step += .02) * flake.stepSize
        }

        var image = new Image();
        image.src = '/spinel/snow_'+ i%6 +'.png';
        this.ctx.drawImage(image,flake.x,flake.y, flake.size, flake.size)
        flake.y += flake.velY
        flake.x += flake.velX
            
        if (flake.y >= this.canvas.rect.height || flake.x >= this.canvas.rect.width || flake.y <= 0 || flake.x <= 0) {
            this.setFlake(flake)
        }

        this.ctx.beginPath()
    }
    window.requestAnimationFrame(this.snow)
    },
    blur() {
      this.p_blur = !this.p_blur
    }
  },
  customProperties: {
    '--snow_blur'(){
      if(this.p_blur) return '20px'
      else return '2px'
    }
  }
}
</script>

<style lang="scss" scoped>
.snow_canvas {
  width: 100%;
  height: 100%;
  filter: blur(var(--snow_blur)) contrast(175%) brightness(100%) grayscale(1);
  transition: all 1s;
}
</style>