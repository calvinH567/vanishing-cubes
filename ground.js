class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        push()
        rectMode(CENTER);
        translate (this.body.position.x-200,this.body.position.y-200)
        rect(this.x,this.y,this.width,this.height);

        pop()
    }
}