let clicks = 0;
let firstClick;
var app = new Vue({
  el: '#app',
  data: {
    message: 'Draw Rectangle in 4 clicks !!',
    vueCanvas: null,
    painting: false,
    canvas: null,
    ctx: null,
  },
  methods: {
    draw(e) {
      if (clicks === 0) {
        firstClick = [e.clientX, e.clientY];
        this.ctx.beginPath();
      }

      this.ctx.lineWidth = 10;
      this.ctx.lineCap = 'round';
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      clicks++;
      // console.log(clicks);
      this.ctx.moveTo(e.clientX, e.clientY);
      if (clicks === 4) {
        this.ctx.lineWidth = 10;
        this.ctx.lineCap = 'round';
        this.ctx.lineTo(firstClick[0], firstClick[1]);
        this.ctx.stroke();
        this.ctx.moveTo(firstClick[0], firstClick[1]);
        clicks = 0;
      }
    },
  },
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // Resize canvas
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
  },
});
