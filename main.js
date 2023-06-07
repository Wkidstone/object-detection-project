img="";
status= "";
function preload(){
    
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results) 
{
  if (error) {
    console.log(error);
  }
  console.log(results);
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Dog", 45 ,75);
    noFill();
    stroke("#FF0000")
    rect(30 , 60 ,450, 350);


    fill("#000dff");
text("Cat", 350 ,90);
noFill();
stroke("#000dff")
rect(300 , 70 ,260, 350);

fill("#FF0000");
text("Bowl", 300 ,320);
noFill();
stroke("#a200ff")
rect(270 , 300 ,150, 200);
}