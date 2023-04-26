var box =  document.getElementById("box");


var r = document.querySelector(':root');

function enviar(){

        
    var n1 = document.getElementById("01").value;
    var n2 = document.getElementById("02").value;
    var n3 = document.getElementById("03").value;
    var n4 = document.getElementById("04").value;
    var cor01 = document.getElementById("color").value;
    var tamanho = document.getElementById("tamanho").value;

    r.style.setProperty('--tl', n1+'%');
    r.style.setProperty('--tr', n2+'%');
    r.style.setProperty('--bl', n3+'%');
    r.style.setProperty('--br', n4+'%');
    r.style.setProperty('--color', cor01);
    r.style.setProperty('--size', tamanho+'%')

console.log('ae')
}

