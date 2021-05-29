Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});
//code for triggering the camera
Webcam.attach("camera")
//code for taking snapshot
function capture() {
    Webcam.snap(
        function (img) {//img stores the picture taken by webcam.snap
            document.getElementById("snapshot").innerHTML = `<img id="picture" src=${img}>`
        }
    )
}
//check ml5 version in the console
console.log("ml5.version = " + ml5.version)
//import the model in variable classifier
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/epbJj_Rqh/model.json", modelLoader)//image classifier is a predefined function of ml5 ehich triggers image identification
//code for checking whether the model has loaded or not with the help of function modelLoader
function modelLoader(){
    console.log("Your model has loaded successfully.")
}