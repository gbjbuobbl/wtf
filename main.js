noseX=0;
noseY=0;
diffrence = 0
leftwristX =0;
rightwristX = 0;

function setup() {
    video = createCapture(VIDEO)
    video.size(550,550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose", gotPoses);
}

function draw() {
    background("#969A97");
    
    textSize(diffrence);
    fill("#FFE787");
    text("peter",40,500);
}

function modelLoaded() {
    console.log("posenet is initialized!");
}

function gotPoses(results) {
      if (results.length > 0) {
          console.log(results);
   

         leftwristX = results[0].pose.leftWrist.x;
         rightwristX = results[0].pose.rightWrist.x;
         diffrence = floor(leftwristX - rightwristX)
      }
    }