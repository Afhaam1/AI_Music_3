Right_wrist_x = ""
Right_wrist_y = ""
Left_wrist_y = ""
Left_wrist_x = ""
song_1 = ""
song_2 = ""
song_1_status = ""
song_2_status = ""
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialised')
}
function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function draw(){
    image(video, 0, 0, 600, 500);
    stroke("light green")
    fill("blue")
}
function loadSound(){
    
}
function gotPoses(){
    if(results.length > 0 ){
        song_1_status = results[0].pose.keypoints[9].score;
        song_2_status = results[0].pose.keypoints[10].score
    
        console.log(results)
        Left_wrist_y = results[0].pose.leftWrist.x
        Left_wrist_x = results[0].pose.leftWrist.y
        console.log('Left_wrist_x ='+ Left_wrist_x + 'Left_wrist_y ='+ Left_wrist_y);
    
        Right_wrist_x = results[0].pose.rightWrist.x
        Right_wrist_y = results[0].pose.rightWrist.y
        console.log('Right_wrist_x ='+ Right_wrist_x + 'Right_wrist_y ='+ Right_wrist_y);
    }
}