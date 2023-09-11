function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uuvIKFC9x/model.json', modelReady);
}

function modelReady(){
    console.log("Model is Loaded");
    classifier.classify(gotResults);
}