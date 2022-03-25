harry_potter_song = "";
peter_pan_song = "";

function preload(){
    harry_potter_song = loadSound("harry_potter.mp3");
    peter_pan_song = loadSound("peter_pan.mp3");
}

function setup(){
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,700,600);
}