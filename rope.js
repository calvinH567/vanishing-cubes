class rope{
    constructor(bodyA,pointB){
       var options = {
        length:11,
        stiffness:0.1,
        bodyA:bodyA,
        pointB:pointB
        }
        this.body = Constraint.create(options);
        World.add(world,this.body);
        this.pointB = pointB;
    }
    display(){
        if(slingReleased==0){
            strokeWeight(10);
            console.log(this.pointB.x);
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,
                this.pointB.x,this.pointB.y);
        }
    }

    fly(){
        this.body.bodyA = null
        slingReleased = 1;
    }
}