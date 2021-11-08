//let canvas;
//let video;
//let poseNet;
//let poses = [];
//let sucess;
//// Declaring variables for different sounds
//let drumLoopOne, drumLoopTwo;
//let dubstepLoopOne, dubstepLoopTwo;
//let guitarLoopTwo, guitarLoopOne;
//let violinLoopOne, violinLoopTwo;
//
//let musicNoteImage;
//
//function preload(){
////preloading all the sounds needed to to be played once the model is ready
//drumLoopOne = loadSound('drumLoopOne.mp3');
//drumLoopTwo = loadSound('drumLoopTwo.mp3');
//
//dubstepLoopOne = loadSound('dubstepLoopOne.mp3');
//dubstepLoopTwo = loadSound('dubstepLoopTwo.mp3');
//
//guitarLoopOne = loadSound('guitarLoopOne.mp3');
//// guitarLoopTwo = loadSound('guitarLoopTwo.mp3');
//
//violinLoopOne = loadSound('violinLoopOne.mp3');
//violinLoopTwo = loadSound('violinLoopTwo.mp3');
//
//musicNoteImage = loadImage("note.png");
//}
//
//function setup() {
////creating and centering the canvas
//canvas = createCanvas(800, 560);
//canvas.position((windowWidth - width)/2, 100);
//
//// background(240, 200);
//// takeOnMe.playMode('restart');
//
////Capture video from the webcam and hide it to just show the canvas
//video = createCapture(VIDEO);
//video.size(width, height);
//video.hide();
//
//// Create a new poseNet method with a single detection
//poseNet = ml5.poseNet(video, modelReady);
//// This sets up an event that fills the global variable "poses"
//// with an array every time new poses are detected
//poseNet.on('pose', function (results) {
//  poses = results;
//});
//
//}
//
//function modelReady() {
////Callback function when the model is ready
//success = createP('Move around to play some music!');
//success.class('success');
//}
//
//function draw() {
//
////Push the hidden video onto the canvas
//// Flip it using translate and scale to create a mirror
//push();
//translate(video.width, 0);
//scale(-1, 1);
//background(255, 240);
//pop();
//
//// Function to draw the different body parts and their connections
//drawSkeleton()
//
//// Function to draw the nose ellipse and logics for music playing
//posePlayer();
//
//}
//
//function drawSkeleton(){
//  for (let i = 0; i < poses.length; i++) {
//    // For each pose detected, loop through all the keypoints
//    let pose = poses[i].pose;
//
//    // Seperating out the 17 keypoints posenet returns
//    let nose = pose.keypoints[0];
//    let leftEye = pose.keypoints[1];
//    let rightEye = pose.keypoints[2];
//    let leftEar = pose.keypoints[3];
//    let rightEar = pose.keypoints[4];
//    let leftShoulder = pose.keypoints[5];
//    let rightShoulder = pose.keypoints[6];
//    let leftElbow = pose.keypoints[7];
//    let rightElbow = pose.keypoints[8];
//    let leftWrist = pose.keypoints[9];
//    let rightWrist = pose.keypoints[10];
//    let leftHip = pose.keypoints[11];
//    let rightHip = pose.keypoints[12];
//    let leftKnee = pose.keypoints[13];
//    let rightKnee = pose.keypoints[14];
//
//    if (nose.score > 0.5) {
//      strokeWeight(10)
//      strokeCap(ROUND);
//      stroke(255, 112, 84, 135);
//      //line joining right shouder and elbow
//      line(width - rightShoulder.position.x, rightShoulder.position.y, width - rightElbow.position.x, rightElbow.position.y);
//      //line joining left shoulder to elbow
//      line(width - leftShoulder.position.x, leftShoulder.position.y, width - leftElbow.position.x, leftElbow.position.y);
//
//      // right shoulder socket
//      noStroke();
//      fill(255, 112, 84, 127);
//      ellipse(width - rightShoulder.position.x, rightShoulder.position.y, 30, 30);
//      //left shoulder socket
//      ellipse(width - leftShoulder.position.x, leftShoulder.position.y, 30, 30);
//
//      // Socket to elbow
//      stroke(0, 255, 239, 135);
//      line(width - rightElbow.position.x, rightElbow.position.y, width - rightWrist.position.x, rightWrist.position.y);
//      line(width - leftElbow.position.x, leftElbow.position.y, width - leftWrist.position.x, leftWrist.position.y);
//
//      //Elbows
//      fill(0, 255, 239, 127);
//      noStroke();
//      ellipse(width - leftElbow.position.x, leftElbow.position.y, 30, 30);
//      ellipse(width - rightElbow.position.x, rightElbow.position.y, 30, 30);
//
//      // Wrists
//      fill(88, 147, 212, 127);
//      ellipse(width - rightWrist.position.x, rightWrist.position.y, 30, 30);
//      ellipse(width - leftWrist.position.x, leftWrist.position.y, 30, 30);
//
//
//      //torso quardilateral
//      stroke(36, 112, 160, 135);
//      fill(36, 112, 160, 127);
//      quad(width - rightShoulder.position.x, rightShoulder.position.y,width - leftShoulder.position.x,leftShoulder.position.y, width - leftHip.position.x, leftHip.position.y, width - rightHip.position.x, rightHip.position.y);
//
//      stroke(255, 118, 87, 135);
//      fill(255, 118, 87, 127);
//
//      let faceRadius = dist(width - nose.position.x, nose.position.y, width - leftEar.position.x, leftEye.position.y);
//      ellipse(width - nose.position.x, nose.position.y, faceRadius, faceRadius+ 60);
//
//      image(musicNoteImage, width - leftEye.position.x, leftEye.position.y, 40, 80);
//      image(musicNoteImage, width - rightEye.position.x, rightEye.position.y, 40, 80);
//
//
//      //Hips socket
//      noStroke();
//      fill(124, 71, 137, 127)
//      ellipse(width - rightHip.position.x, rightHip.position.y, 30, 30);
//      ellipse(width - leftHip.position.x, leftHip.position.y, 30, 30);
//
//      // lines from hips to knees
//      stroke(167, 209, 41, 127);
//      line(width - rightHip.position.x, rightHip.position.y, width - rightKnee.position.x, rightKnee.position.y);
//      line(width - leftHip.position.x, leftHip.position.y, width - leftKnee.position.x, leftKnee.position.y);
//
//    }
//
//  }
//}
//
//function posePlayer()  {
//
//// Loop through all the poses detected
//  for (let i = 0; i < poses.length; i++) {
//    // For each pose detected, loop through all the keypoints
//    let pose = poses[i].pose;
//
//    // Seperating out the 17 keypoints posenet returns
//    let nose = pose.keypoints[0];
//		let leftEye = pose.keypoints[1];
//		let rightEye = pose.keypoints[2];
//    let leftEar = pose.keypoints[3];
//    let rightEar = pose.keypoints[4];
//    let leftShoulder = pose.keypoints[5];
//    let rightShoulder = pose.keypoints[6];
//    let leftElbow = pose.keypoints[7];
//    let rightElbow = pose.keypoints[8];
//    let leftWrist = pose.keypoints[9];
//    let rightWrist = pose.keypoints[10];
//    let leftHip = pose.keypoints[11];
//    let rightHip = pose.keypoints[12];
//    let leftKnee = pose.keypoints[13];
//    let rightKnee = pose.keypoints[14];
//
//    // From experimentation nose seems to be the best detected body part
//    // Hence if there is a nose means there is a human present
//    //Also trying to avoid multiple pose detection of people farther off
//    if (nose.score > 0.5) {
//
//      //Right wrist playing conditions
//      if( width - rightWrist.position.x > width - 200 && rightWrist.position.x > 0  && !dubstepLoopTwo.isPlaying()){
//        dubstepLoopTwo.play();
//        rectMode(CENTER);
//        noStroke();
//        fill(88, 147, 212, 100)
//        rect(700, 280, 150, height);
//      } else if(width - rightWrist.position.x < width - 200 && rightWrist.position.x < 800 && dubstepLoopTwo.isPlaying()){
//        dubstepLoopTwo.stop();
//      }
//
//      //Left wrist playing conditions
//      if(width - leftWrist.position.x < width - 600 && leftWrist.position.x < 800 && !violinLoopOne.isPlaying()){
//        rectMode(CENTER);
//        noStroke();
//        fill(88, 147, 212, 100)
//        rect(100, 280, 150, height);
//        violinLoopOne.play();
//      } else if(width - leftWrist.position.x > width - 600 && leftWrist.position.x > 0 && violinLoopOne.isPlaying()){
//        violinLoopOne.stop();
//      }
//
//      // Nose playing condition 1
//      if(nose.position.y > 0 && nose.position.y <= height/4 && !drumLoopTwo.isPlaying()){
//        noStroke();
//        fill(222,205,195, 100);
//        rectMode(CENTER);
//        rect(width/2, height/8, width, height/4);
//        drumLoopTwo.play();
//        // drumLoopTwo.loop();
//      } else if(nose.position.y > height/4 && nose.position.y < height && drumLoopTwo.isPlaying()){
//        drumLoopTwo.stop();
//      }
//
//      // Nose playing condition 2
//      if(nose.position.y > height/4 && nose.position.y <= height/2 && !drumLoopOne.isPlaying()){
//        noStroke();
//        fill(222,205,195, 100);
//        rectMode(CENTER);
//        rect(width/2, 3*height/8, width, height/4);
//        drumLoopOne.play();
//        // drumLoopOne.loop();
//      } else if(nose.position.y <= height/4 && nose.position.y > height/2 && nose.position.y < height && drumLoopOne.isPlaying()){
//        drumLoopOne.stop();
//      }
//
//      // Nose playing condition 3
//      if(nose.position.y > height/2 && nose.position.y <= 3*height/4 && !guitarLoopOne.isPlaying()){
//        noStroke();
//        fill(222,205,195, 100);
//        rectMode(CENTER);
//        rect(width/2, 5*height/8, width, height/4);
//        guitarLoopOne.play();
//      } else if(nose.position.y < height/2 && nose.position.y > 3*height/4 && nose.position.y < height && guitarLoopOne.isPlaying()){
//        guitarLoopOne.stop();
//      }
//
//
//      // Nose playing condition 4
//      //
//      if(nose.position.y > 3*height/4 && nose.position.y <= height && !dubstepLoopOne.isPlaying()){
//        noStroke();
//        fill(222,205,195, 100);
//        rectMode(CENTER);
//        rect(width/2, 7*height/8, width, height/4);
//        dubstepLoopOne.play();
//      } else if(nose.position.y < 3*height/4 && nose.position.y > 0 && nose.position.y < height && dubstepLoopOne.isPlaying()){
//        dubstepLoopOne.stop();
//      }
//
//    }
//  }
//
//
//}
//let canvas;
let video;
let poseNet;
let poses = [];
let sucess;
let songOne, songTwo, songThree, songFour;
let soundNames = ['Lullatone', 'Piano', 'Pop song', 'guitar' ];
//arduino part:
let heheMinion;
let playing = false;
let serial;
let latestData = "waiting for data";  // you'll use this to write incoming data to the canvas
let splitter;
let diameter0 = 0, diameter1 = 0, diameter2 = 0;

let osc1, osc2, osc3, fft;


function preload(){
	songOne = loadSound('Lullatone - Trying Something Again Again(Piano Version).mp3');
  songTwo = loadSound('vaultboy - Everything Sucks (Explicit).mp3');
  songThree = loadSound('canon.mp3');
  songFour = loadSound('guitarLoopTwo.mp3');
}

function setup() {
  success = createP("Loading assets");
  success.class('success');
  canvas = createCanvas(800, 560);
  canvas.position((windowWidth - width)/2, 100);
///////////////////////////////////////////////////////////////////
    //Begin serialport library methods, this is using callbacks
///////////////////////////////////////////////////////////////////    
    

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();
//    canvas.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude(0.8);
      reverb = new p5.Reverb();
//sound1.disconnect();
 reverb.process(songTwo, 3, 2);

  // Get a list the ports available
  // You should have a callback defined to see the results
  serial.list();
  console.log("serial.list()   ", serial.list());

  //////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("COM3");
 /////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////
  // Here are the callbacks that you can register

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);
  // OR
  //serial.onList(gotList);

  // When we some data from the serial port
  serial.on('data', gotData);
  // OR
  //serial.onData(gotData);

  // When or if we get an error
  serial.on('error', gotError);
  // OR
  //serial.onError(gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
  // OR
  //serial.onOpen(gotOpen);

  // Callback to get the raw data, as it comes in for handling yourself
  //serial.on('rawdata', gotRawData);
  // OR
  //serial.onRawData(gotRawData);

 

////////////////////////////////////////////////////////////////////////////
// End serialport callbacks
///////////////////////////////////////////////////////////////////////////


osc1 = new p5.TriOsc(); // set frequency and type
osc1.amp(.5);
osc2 = new p5.TriOsc(); // set frequency and type
osc2.amp(.5);  
osc3 = new p5.TriOsc(); // set frequency and type
osc3.amp(.5);    

fft = new p5.FFT();
//osc1.start();
//osc2.start(); 
//osc3.start();

// We are connected and ready to go
  //Capture the video and hide it.
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
 });
 // Hide the video element, and just show the canvas
}


function modelReady() {
  // success = createP('Move your head to play :)');
  success.html("Move your head to play");
  success.class('success');
}
function serverConnected() {
  console.log("Connected to Server");
}

// Got the list of ports
function gotList(thelist) {
  console.log("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  console.log("Serial Port is Open");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  console.log(theerror);
}



// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming string
  trim(currentString);                    // remove any trailing whitespace
  if (!currentString) return;             // if the string is empty, do no more
  console.log("currentString  ", currentString);             // println the string
  latestData = currentString;            // save it for the draw method
  console.log("latestData" + latestData);   //check to see if data is coming in
  splitter = split(latestData, ',');       // split each number using the comma as a delimiter
  //console.log("splitter[0]" + splitter[0]); 
  diameter0 = splitter[0];                 //put the first sensor's data into a variable
  diameter1 = splitter[1];
  diameter2 = splitter[2]; 



}

// We got raw data from the serial port
function gotRawData(thedata) {
  println("gotRawData" + thedata);
}

// Methods available
// serial.read() returns a single byte of data (first in the buffer)
// serial.readChar() returns a single char 'A', 'a'
// serial.readBytes() returns all of the data available as an array of bytes
// serial.readBytesUntil('\n') returns all of the data available until a '\n' (line break) is encountered
// serial.readString() retunrs all of the data available as a string
// serial.readStringUntil('\n') returns all of the data available as a string until a specific string is encountered
// serial.readLine() calls readStringUntil with "\r\n" typical linebreak carriage return combination
// serial.last() returns the last byte of data from the buffer
// serial.lastChar() returns the last byte of data from the buffer as a char
// serial.clear() clears the underlying serial buffer
// serial.available() returns the number of bytes available in the buffer
// serial.write(somevar) writes out the value of somevar to the serial device


function draw() {

      //Push the hidden video onto the canvas
			push();
			translate(video.width , 0);
			scale(-1, 1);
      image(video, 0, 0, width, height);
			pop();


      // Function to draw multiple rectangles onto the screen
      drawRect();

      // Function to draw the nose ellipse and logics for music playing
      nosePlayer();

      //Function to draw text onto the rectangles
      writeText();
//    var freq = map(diameter0, 0, width, 40, 880);    
//    osc1.freq(freq);
//    console.log('freq :'+freq);
//    
//  var freq2 = map(diameter1, 0, width, 500, 880);    
//    osc2.freq(freq2);
//    console.log(freq2);
//    
// var freq3 = map(diameter2, 0, width, 800, 3280);    
//    osc3.freq(freq3);
//    console.log(freq3); 
    
    
    outputVolume(diameter1/500);
//    sampleRate(diameter0*1000);
//    amp(diameter2/10);
    
    let dryWet = constrain(map(diameter2*100, 0, width, 0, 1), 0, 1);
  // 1 = all reverb, 0 = no reverb
  reverb.drywet(dryWet);
  text('dry/wet: ' + round(dryWet * 100) + '%', 20, 20);

//let playbackRate = map((diameter0+0.1)*1, 0.1, height, 2, 0);
//  playbackRate = constrain(playbackRate, 0.01, 4);
 let playbackRate = (diameter0+1)*1
  songTwo.rate(playbackRate);
  songOne.rate(playbackRate);
  songFour.rate(playbackRate);
  songThree.rate(playbackRate);

//  line(0, diameter0*50, width, diameter0*50);
  text('rate: ' + round(playbackRate * 2) + '%', 2, 20);

}

function emptyState(){
  background(245,245,245)
  fill(25);
  textAlign(CENTER);
  textSize(20);
  text('Robot slaves working hard' , width/2, height/2);
}


function drawRect() {
	for(let k = 0; k < width; k = k + width/4){
    let colR = map(k, 0, width, 0, 150);
    let colG = map(k, 0, width, 240, 50);
    let colB = map(k, 0, width, 100, 240);
    noStroke();
  	fill(colR, colG, colB, 150);
    rect(k, 0, width/4, height);
  }
}

function writeText(){
  fill(255, 150);
  textAlign(CENTER);
  textSize(20);
  text(soundNames[0] , width/8, height/2);
  text(soundNames[1] , 3*width/8, height/2);
  text(soundNames[2] , 5*width/8, height/2);
  text(soundNames[3] , 7*width/8, height/2);
}


function nosePlayer()  {

  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
      // For each pose detected, loop through all the keypoints
      let pose = poses[i].pose;
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
			let nose = pose.keypoints[0];

      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (nose.score > 0.7) {
        //Draw an ellipse at the nose
        fill(255, 0, 0, 150);
        noStroke();
        ellipse(width - nose.position.x, nose.position.y, 30, 30);

        //The conditions for the different sounds to load.
        if (nose.position.x < width/4  &&  !songOne.isPlaying()) {
          songTwo.pause();
          songThree.pause();
          songFour.pause();
          songOne.play();

        } else if(nose.position.x >= width/4  &&  nose.position.x < width/2 && !songTwo.isPlaying()) {
          songOne.pause();
          songTwo.pause();
          songThree.pause();
          songTwo.play();

        } else if(nose.position.x >= width/2  &&  nose.position.x < 3*width/4 && !songThree.isPlaying() ){
          songOne.pause();
          songTwo.pause();
          songFour.pause();
          songThree.play();

        } else if(nose.position.x >= 3*width/4  &&  nose.position.x < width && !songFour.isPlaying() ){
          songOne.pause();
          songTwo.pause();
          songThree.pause();
          songFour.play();
        }

      }
  }

}
