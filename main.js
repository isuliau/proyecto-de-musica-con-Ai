song1 ="";
song2= "";

song1_status = ""; 
song2_status = "";

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristy = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
song1 = loadSound ("music.mp3");
song2 = loadSound ("music2.mp3");
}


function setup()
{
canvas = createCanvas(600, 500);
canvas.center();

video= createCapture (VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded() {
console.log('PoseNet está inicializado');
}

function gotPoses(results){
}

function gotPoses (results)
{
if (results.length > 0)
{
console.log(results);
scoreRightWrist = results[0].pose.keypoints [10].score;
scoreLeftWrist = results[0].pose.keypoints [9].score;
console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftwrist = " + scoreLeftWrist);

rightWristX = results[0].pose.rightwrist.x;
rightWristY = results[0].pose.rightwrist.y;
console.log("rightWristX = " + rightWristX+"rightWristY = "+rightWristY);

leftWristX = results [8].pose. leftwrist.x;
leftWristY = results[0].pose. leftwrist.y;
console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

 }
}

function draw() {
image (video, 0, 0, 600, 500);

song1_status = song1.isPlaying();
song2_status = song2.isPlaying();

fill("#FF0000");
stroke("#FF0000");

if (scoreRightWrist > 0.2)
{
circle (rightWristX, rightWristY, 20);

song2.stop();

if (song1_status == false){


song1.play();
document.getElementById("song").innerHTML = "Reproduciendo: canción de Harry Potter"
 }
}

if(scoreLeftWrist > 0.2)
{
 circle (leftWristX, leftWristy, 20);

song1.stop();

if (song2_status == false)
{
song2.play();
document.getElementById("song").innerHTML = "Reproduciendo: canción de Peter Pan"
}
}

}

function play()
{
song.play();
song.setVolume (1);
song.rate(1);
}