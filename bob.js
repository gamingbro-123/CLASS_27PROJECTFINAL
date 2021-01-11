class Bob
{
  constructor(xpos,ypos,radius)
  {     
      var options={
          isStatic: false,
          resitution:1.5,
          friction:0,
          density:0.8
      }

    this.radius = radius  
    this.ball = Bodies.circle(xpos,ypos,radius/2,options);

    World.add(world,this.ball)
  }

  display()
  {

    var pos = this.ball.position; push(); rectMode(CENTER); translate(pos.x,pos.y); fill("brown"); circle(0,0,this.radius); pop();
  }

    
    
}