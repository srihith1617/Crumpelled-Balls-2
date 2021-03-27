class dustbin  {
    constructor (x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width
        this.height=height
        this.image= loadImage("dustbin1.png")
        World.add(world,this.body)
    }
    display() {
        this.pos=this.body.position;
        imageMode(CENTER)
        image(this.image, this.pos.x, this.pos.y,this.width,this.height);
    }
}