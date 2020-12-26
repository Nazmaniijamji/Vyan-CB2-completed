class dustbin {
constructor(x,y) {
    var options = {
        isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 100;
    this.thickness = 20;
    this.angle = 0;
    this.bottombody = Bodies.rectangle(this.x, this.y, this.width, this.thickness, options);
    this.leftbody = Bodies.rectangle(this.x-100, this.y-50, this.thickness, this.height, options);
    Matter.Body.setAngle(this.leftbody, this.angle);
    this.rightbody = Bodies.rectangle(this.x+100, this.y-50, this.thickness, this.height, options);
    Matter.Body.setAngle(this.rightbody, -1*this.angle);
    World.add(world,this.bottombody);
    World.add(world,this.leftbody);
    World.add(world,this.rightbody);
}
    display() {
        push();
        translate(this.leftbody.position.x, this.leftbody.position.y);
        rotate(this.angle);
        rect(0,0,this.thickness, this.height);
        pop();
        push();
        translate(this.rightbody.position.x, this.rightbody.position.y);
        rotate(-1*this.angle);
        rect(0,0,this.thickness, this.height);
        pop();
        push();
        translate(this.bottombody.position.x, this.bottombody.position.y);
        rect(0,0,this.width, this.thickness);
        pop();
    }




}
    
