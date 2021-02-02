class Block{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = 25;
        this.height = 75;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.body);
    }
    display(){
        push()
        rectMode(CENTER);
        translate (this.body.position.x-100,this.body.position.y-200)
        rect(this.x,this.y,this.width,this.height);

        pop()
    }
}