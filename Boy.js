class Boy{
    constructor(){
        this.image = loadImage("Plucking mangoes/boy.png");

        World.add(world, this.image);
    }
    display(){
        image(this.image, 370, 470, 200, 283);
    }
}