var canvas = new fabric.Canvas('myCanvas');
var block_width = 30;
var block_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object = "Img";
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
    
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object = "Img";
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
    
}