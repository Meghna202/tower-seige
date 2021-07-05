class Block{
  constructor(x, y, width, height) {
      var options = {
        friction:5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("block.png")
      this.Visiblity=255
      World.add(world, this.body);
      
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      if(this.body.speed < 4){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
       else{
        push ()
        World.remove(world, this.body)
        this.Visiblity=this.Visiblity-5
        tint (255, this.Visiblity)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop ()
      

    }
  }
}
