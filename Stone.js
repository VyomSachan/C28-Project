class Stone{
    constructor(x, y){
        //var options = {
            //isStatic : true
        //}
        this.body = Bodies.circle(x, y, 50);
        this.radius =  50;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}