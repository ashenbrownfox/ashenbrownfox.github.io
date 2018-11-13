function Canvas2D(){
   this._canvas = document.getElementById('screen');
   this._canvasContent = this._canvas.getContent('2d');
}
Canvas2D.prototype.clear = function(){
   this._canvasContent.clearRect(0, 0, this._canvas.width, this._canvas.height);
}
Canvas20.prototype.drawImage = function(image, position){
   this._canvasContent.drawImage(image, position.x, position.y);
}

let Canvas = new Canvas2D();

//Testing
let image = new Image();
image.src = "/assets/sprites/spr_background4.png";

setTimeout(()=>{
   Canvas.drawImage(image, {x:0, y:0});
   Canvas.clear();
}, 1000)