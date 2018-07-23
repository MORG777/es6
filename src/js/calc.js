let buttons = document.getElementsByTagName('button');
let Result = '';
if(buttons && buttons.length) {
    for(let i=0; i<buttons.length; i++) {
        let btn = buttons[i];
        btn.addEventListener('click', function(event){
            let btn = event.target;
            
            let text = btn.childNodes[0].data;
            Result += text;
            document.getElementById('formula').innerHTML = Result;
            try {
                document.getElementById('result').innerHTML = eval(Result);
            } catch (e) {

            }
        });
    }
}

function showResult(){
    document.getElementById('formula').innerHTML = eval(Result);
    document.getElementById('result').innerHTML = '';
}