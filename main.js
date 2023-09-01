
Webcam.set({
    width: 350,
    height: 300,
    ImageFormat: 'png',
    pngQuality: 90
});
camera = document.getElementById('camera');
Webcam.attach('#camera');
function tirarFoto() {
    Webcam.snap(function (foto) {
        document.getElementById('resultado').innerHTML = '<img id="foto" src = "' + foto + '">';
    });
}
console.log('ml5,', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vV3Qg4O0R/model.json', modelo);
function modelo() {
    console.log('modelo carregado');

}
function speak() {
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é: " + prediction1;
    speakData2 = "A Segunda previsão é: " + prediction2;
    var falar = new SpeechSynthesisUtterance(speakData1 + speakData2);
    synth.speak(falar);
}
function check() {
    img = document.getElementById('foto');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
console.log(results);
document.getElementById('nomeemocao').innerHTML = results[0].label;
document.getElementById('nomeemocao2').innerHTML = results[1].label;
prediction1 = results[0].label;
prediction2 = results[1].label;
speak();

    }
    if(results[0].label=='mau'||results[0].label=='Mau'){
        document.getElementById('emoji').innerHTML = '&#128078;'
    }
    if(results[0].label=='Legal'||results[0].label=='legal'){
        document.getElementById('emoji').innerHTML = '&#128077;'
    }
    if(results[0].label=='ok'||results[0].label=='Ok'){
        document.getElementById('emoji').innerHTML = '&#128076;'
    }
    if(results[1].label=='mau'||results[1].label=='Mau'){
        document.getElementById('emoji2').innerHTML = '&#128078;'
    }
    if(results[1].label=='Legal'||results[1].label=='legal'){
        document.getElementById('emoji2').innerHTML = '&#128077;'
    }
    if(results[1].label=='ok'||results[1].label=='Ok'){
        document.getElementById('emoji2').innerHTML = '&#128076;'
    }
    
}
