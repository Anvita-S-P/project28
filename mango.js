class Mango{
    constructor(mango1,mango2,mango3,mango4,mango5){
    var options={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=Matter.Bodies.circle(x,y,10,options);
    this.image=loadImage("sprites/mango.png");
    World.add(world,this.body);

}

 display(){
     var pos=this.body.position;
     push ();
     imageMode(RADIUS);
     fill("pink");
     image(this.image,pos.x,pos.y,10);
 }

}