class Paper {

    constructor(x,y,radius,options){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,Matter.Bodies.circle);
               
    }
}