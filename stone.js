class Stone{
    constructor(stoneObj){

    var options={

    isStatic:false,
    restitution:0,
    friction:1,
    density:1.2

    }

    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      rectMode(CENTER);
      noStroke();
      rect(pos.x, pos.y, this.width, this.height);
      pop ();
    }

    fly(){
        this.sling.bodyA=null;
    }
}