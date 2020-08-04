class Tree{
    constructor(){
        this.image = loadImage("Plucking mangoes/tree.png");

        World.add(world, this.image);
    }
    display(){
        image(this.image, 820, 300, 500, 532);
    }
}