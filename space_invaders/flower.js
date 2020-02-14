function Flower(x, y, r){
   this.x = x;
   this.y = y;
   this.r = 20;
   
   this.xdir = 1;
    
   this.grow = function() {
       this.r = this.r + 2;
   }
   
   this.pluck = function() {
      this.toDelete = true;
   }
   
   this.touches = function(flower) {
     var d = dist(this.x, this.y, flower.x+1, flower.y+1, flower.x-1, 
     flower.y-1);
     if (d < this.r + flower.r) {
        return true; 
     } else {
        return false; 
     }
   }
   
   this.shiftDown = function() {
     this.xdir += -1;
     this.y += this.r;
   }
   
   this.move = function() {
       this.x = this.x + this.xdir;
   }
   
   this.show = function() {
     noStroke();
     fill(255, 0, 200);
     ellipse(this.x, this.y, this.r*2, this.r*2);
   }
   
}