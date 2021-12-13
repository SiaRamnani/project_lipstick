circleX=0;
circleY=0;
lipstickX=0;
lipstickY=0;


function preload()
{
  lipstick=loadImage("https://i.postimg.cc/Zq0yVvCX/lipstickbg.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function modelloaded()
{
    console.log("poseNet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
            circleX=results[0].pose.nose.x-5;
            circleY=results[0].pose.nose.y-5;
            lipstickX=results[0].pose.nose.x-30;
            lipstickY=results[0].pose.nose.y+12;
        }
}

function draw()
{
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(circleX,circleY,20);
    image(lipstick,lipstickX,lipstickY,70,30);
}

function take_snapshot()
{
    save('circle.png');
}



