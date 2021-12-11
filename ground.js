class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body)

    }
    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(87,43,12);
        rect(pos.x, pos.y, this.w, this.h);
        pop();

    }
}

 //class Ball{
   // constructor(x,y,radius){
   //     var options= {
   //         isStatic: false,
   //         'restitution':0.3,
    //        'friction':0.5,
      //      'density':1.2,
        //}

    //    this.body=Bodies.circle(x,y,radius,options);
    //    this.radius=radius

      //  World.add(world,this.body)
    
    //}
  //  display(){
    //    ellipseMode(RADIUS)

//        fill("light green")
        
  //      circle(this.body.position.x,this.body.position.y,this.radius)

    //}
//}