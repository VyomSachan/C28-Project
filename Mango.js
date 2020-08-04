class Mango{
    constructor(x, y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, 60, 84);
    }
}