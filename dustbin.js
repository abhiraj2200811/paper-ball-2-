class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            //'restitution':0.8,
            'friction':1.0,
            'isStatic':true,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("/paperball-master/dustbingreen.png")
        World.add(world, this.body);

    }
        display(){
            //var angle = this.body.angle;
            push();
           /// translate();
            //rotate(angle);
            imageMode(CENTER)

            image(this.image,this.body.position.x, this.body.position.y-100,this.width,this.height+100)
    
            pop();
        }


}