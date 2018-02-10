var img;

function preload(){
    img = loadImage("simple.jpg");
}

function setup(){
    createCanvas(img.width,img.height);
}

function draw(){
    image(img,0,0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col=0; col < width; col++){
            var index = (col + row*width)*4;
            
        var r = pixels[index];
        var g = pixels[index+1];
        var b = pixels[index+2];
        var a = pixels[index+3];
            
            
            pixels[index]= r; //red
            pixels[index+1]= g; //green
            pixels[index+2]= b; //blue
            pixels[index+3]= a; //alpha
            
            if(keyIsPressed){
                if(key=="q"){
                    gray_filter(index,b,a,g);
                }
            }
            
            if(keyIsPressed){
                if(key=="w"){
                    jeezy_filter(index,b,a,g);
                }
            }
            
            if(keyIsPressed){
                if(key=="e"){
                    eddy_filter(index,b,a,g);
                }
            }
            if(keyIsPressed){
                if(key=="r"){
                    reggie_filter(index,b,a,g);
                }
            
        
        }
    }
    
    updatePixels();
    
}

function gray_filter(index,b,a){
    pixels[index]= b; //red
    pixels[index+1]= b; //green
    pixels[index+2]= b; //blue
    pixels[index+3]= a; //alpha
    
}

function will_filter(index,b,a){
    pixels[index]= b; //red
    pixels[index+1]= r; //green
    pixels[index+2]= b; //blue
    pixels[index+3]= a; //alpha
    
}

function eddy_filter(index,b,a,g){
    pixels[index]= g; //red
    pixels[index+1]= b; //green
    pixels[index+2]= b; //blue
    pixels[index+3]= a; //alpha
}

function reggie_filter(index,b,a,g,r){
    pixels[index]= b; //red
    pixels[index+1]= b; //green
    pixels[index+2]= r; //blue
    pixels[index+3]= a; //alpha
}
