

function check(s){
    stack = []
    for(let i=0;i<s.length;i++){
        switch (s[i]) {
            case '[':
            case '(':
            case '{':
                stack.push(s[i]);
                break;
            case ']':
                prev = stack.pop();
                if (prev != '['){
                    return false;
                }
                break;
            case '}':
                prev = stack.pop();
                if (prev != '{'){
                    return false;
                }
                break;
            case ')':
                prev = stack.pop();
                if (prev != '('){
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return stack.length == 0;
}

ask();

process.stdin.on("data", function(data){
    data = data.toString().trim();
    if(data.length){
        console.log(check(data));
        ask();
    }
    else{
        process.exit();
    }
});

function ask(){
    process.stdout.write("(Si desea salir solo presione enter)\nIngrese un texto de prueba:  ");
}

