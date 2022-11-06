let vid;
let playing = true;

function setup() {
  createCanvas(1080, 720);
  // noCanvas();

  vid = createVideo("flagtest.mp4");
  vid.size(windowWidth, windowHeight);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);

}

function draw() {
  background(220);
  let img = vid.get();
  image(img, 0, 0); // redraws the video frame by frame in   
}

