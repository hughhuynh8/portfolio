const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = []; let starCount = 1200; let speed = 6;
class Star {
  constructor() { this.reset(); }
  reset() {
    this.x = (Math.random() - 0.5) * canvas.width;
    this.y = (Math.random() - 0.5) * canvas.height;
    this.z = Math.random() * canvas.width; this.prevz = this.z;
  }
  update() {
    this.prevz = this.z; this.z -= speed;
    if (this.z <= 0) { this.reset(); this.z = canvas.width; }
  }
  draw() {
    const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
    const sy = (this.y / this.z) * canvas.height + canvas.height / 2;
    const px = (this.x / this.prevz) * canvas.width + canvas.width / 2;
    const py = (this.y / this.prevz) * canvas.height + canvas.height / 2;
    const radius = (1 - this.z / canvas.width) * 3;
    ctx.beginPath(); ctx.strokeStyle = "white"; ctx.lineWidth = radius;
    ctx.moveTo(px, py); ctx.lineTo(sx, sy); ctx.stroke();
  }
}
for (let i = 0; i < starCount; i++) { stars.push(new Star()); }
function animate() {
  ctx.fillStyle = " rgba(0, 0, 20, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
window.addEventListener("mousemove", (e) => {
  const centerx = canvas.width / 2;
  const distance = Math.abs(e.clientX - centerx);
  speed = 4 + (distance / centerx) * 20;
});