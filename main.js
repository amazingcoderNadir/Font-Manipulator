leftWristX = 0;
rightWristX = 0;
d = 0;

function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550,5500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length> 0)
    {
        console.log(results);
        leftWristX = results[0].pose
    }
}

function draw() {
    background("red");
    textSize(d);
    fill("blue");
    text("Cat", 50,400);
}