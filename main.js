function soundP(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    sound = ml5.soundP("https://teachablemachine.withgoogle.com/models/F_7tgEGl2/")model.js
    }
    
    function moddelready() {
        classifier.classify(gotResult);
    }

    function gotResults(error, results){.
    if(error){console.error(error);}
    else{console.log(results);}
    }