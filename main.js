status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function start(){
    ObjectFinder=ml5.objectDetector('cocossd',Modelloaded);
    document.getElementById("status").innerHTML=" Status =  Detecting Objects";
    objectname=document.getElementById("text_box").value;
}

function Modelloaded(){
    console.log("Modelloaded!");
    status=true;
}

function draw(){
    image(video,0,0,480,380);
}