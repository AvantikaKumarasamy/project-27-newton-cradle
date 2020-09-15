class Bob{
    constructor(x,y){
      var options={
          isStatic:true,
          'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body=Bodies.circle(x,y,20,options);
     // Matter.Bodies.circle(x,y,10);
      this.radius=20;
      
  
      World.add(world,this.body);
    }

    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS);
     fill("blue");
     ellipse(pos.x,pos.y,20);
     
     pop();
  
    }
  
  
  
  }