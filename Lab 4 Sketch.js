let video;
let img;
let img2;
let showFirstImage = true;

function setup() {
  createCanvas(550, 400);
  
  // Showing Video
  video = createVideo(['Lab 4 Video.mp4','Lab 4 Video.ogv','Lab 4 Video.web']);
  video.hide();
  video.loop();

  // Showing Images
  img = createImg('Lab 4 Pic1.png');
  img2 = createImg('Lab 4 Pic2.png');
  img.position(30, 130);
  img.size(200, 200);
  img2.position(30, 130);
  img2.size(200, 200);
  img2.hide();
}

function draw() {
  background(208,231,207);
  
  image(video, 175, 150, 350, 200);
  
  textSize(14);
  fill(116, 166, 146);
  text("He is my cat ... Porsche!", 25, 35);
  text("Click to Toggle Image!  Click 'Page Reload Button' if you can't see the video.", 25, 380);
}

//Toggle Image
function mousePressed() {
  if (showFirstImage) {
    img.hide();
    img2.show();

} else {
    img2.hide();
    img.show();
  }
    
  showFirstImage = !showFirstImage;
  if (video.isPlaying()) {
    video.pause();
} else {
    video.play();
  }
}