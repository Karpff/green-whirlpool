var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

c.strokeStyle="#00FF55";

class Particle
{
  constructor(angle,distance,spd)
  {
    this.angle = angle;
    this.distance = distance;
    this.spd = spd;
    this.x = Math.cos(this.angle/180*Math.PI)*this.distance+innerWidth/2;
    this.y = Math.sin(this.angle/180*Math.PI)*this.distance+innerHeight/2;
  }

  update()
  {
    this.angle+=this.spd;
    this.x = Math.cos(this.angle/180*Math.PI)*this.distance+innerWidth/2;
    this.y = Math.sin(this.angle/180*Math.PI)*this.distance+innerHeight/2;
    for(let i=1;i<10;i++)
    {
      c.beginPath();
      c.arc(innerWidth/2,innerHeight/2,this.distance,(this.angle+(i-1)*8)/180*Math.PI,(this.angle+i*8)/180*Math.PI);
      c.lineWidth=i/2;
      c.stroke();
    }
  }
}

var particles = [];
for(let i=0;i<20;i++)
{
  particles.push(new Particle(0,i*15,(21-i)/3+0.5));
}

function animate()
{
  c.fillStyle = "black";
  c.fillRect(0,0,innerWidth,innerHeight);
  for(let i=0;i<particles.length;i++)
  {
    particles[i].update();
  }
  window.requestAnimationFrame(animate);
}
animate();
