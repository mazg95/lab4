
var first_var = "Hola";

var questions = ["Como te llamas?", "Cual es tu lenguaje favorito?"];
var answers = [];

function HelloWorld(index){
    process.stdout.write(`\n\n\n${questions[index]}`);
    process.stdout.write(">  ")
}

process.stdin.on('data', function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        HelloWorld(answers.length);
    }
    else{
        process.exit();
    }
});

HelloWorld(0);