webcam.set({
    width: 350,
    height: 300,
    Image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

webcam.attach('#camera')



function take_snapshot() {
    webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="' + data_uri + '">';
    });
};