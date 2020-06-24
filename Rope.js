class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX= offsetX;
        this.offsetY= offsetY;
var Options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB : {x : this.offsetX, y : this.offsetY}
    //stiffness:0.1,
   // length:100
    

}
        this.chain= Matter.Constraint.create(Options)
       // this.pos= this.bodyB.position.x-60;

World .add(world,this.chain);

    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        line (pointA.x,pointA.y,pointB.x,pointB.y)
        this.pos+=20;
    }





















}