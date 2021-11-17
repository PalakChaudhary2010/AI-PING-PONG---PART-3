Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function setup() 
{
  canvas = createCanvas(600,400);
  video = createCapture(VIDEO);
  video.size(550,300);

  poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
   console.log('Model Loaded!');
}