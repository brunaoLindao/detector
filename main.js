
Webcam.set({
    width: 350,
    height: 300,
    ImageFormat: 'png',
    pngQuality: 90
});
camera = document.getElementById('camera');
Webcam.attach('#camera');
function tirarFoto(){
    Webcam.snap(function(foto){
        document.getElementById('resultado').innerHTML= '<img id="foto" src = "'+foto+'">';
    });
}
console.log('ml5,',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vV3Qg4O0R/model.json',modelo);
function modelo(){
    console.log('modelo carregado');

}
