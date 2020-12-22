
function Mudarestado2(event){
    let opcao = event.target;
    var conteudo = document.getElementById(`conteudo${opcao.innerHTML}`);

    let listacont = document.querySelectorAll('.conteudo');
    listacont.forEach(element => {
        element.style.display = 'none';
    });

    let listacontli = document.querySelectorAll('.opconteudoli');
    listacontli.forEach(element => {
        element.class = 'nav-item opconteudoli';
    });
    
    conteudo.style.display = 'block';
    opcao.parentElement.class = 'nav-item opconteudoli active';
}  


function mudarMoeda1(event){
    let moedaEscolhida1 = document.getElementById('dropdownMenuButton1');
    let moeda = event.target.textContent;
    moedaEscolhida1.innerHTML = moeda;
}
function mudarMoeda2(event){
    let moedaEscolhida2 = document.getElementById('dropdownMenuButton2');
    let moeda = event.target.textContent;
    moedaEscolhida2.innerHTML = moeda;
}
function mudarUnidade3(event){
    let unidadeEscolhida = document.getElementById('dropdownMenuButton3');
    let unidade = event.target.textContent;
    unidadeEscolhida.innerHTML = unidade;
}
function mudarUnidade4(event){
    let unidadeEscolhida = document.getElementById('dropdownMenuButton4');
    let unidade = event.target.textContent;
    unidadeEscolhida.innerHTML = unidade;
}
function alterarMoeda(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2');
    let moedaEscolhida1 = document.getElementById('dropdownMenuButton1').textContent;
    let moedaEscolhida2 = document.getElementById('dropdownMenuButton2').textContent;
    if(moedaEscolhida1 === 'Real' && moedaEscolhida2 === 'Euro'){
        input2.value =  input1*0.16;
    } 
    if(moedaEscolhida1 === 'Real' && moedaEscolhida2 === 'Dólar'){
        input2.value = input1*0.19;
    }
    if(moedaEscolhida1 === 'Dólar' && moedaEscolhida2 === 'Real'){
        input2.value = input1*5.14;
    }
    if(moedaEscolhida1 === 'Dólar' && moedaEscolhida2 === 'Euro'){
        input2.value = input1*0.82;
    }
    if(moedaEscolhida1 === 'Euro' && moedaEscolhida2 === 'Real'){
        input2.value = input1*6.24;
    }
    if(moedaEscolhida1 === 'Euro' && moedaEscolhida2 === 'Dólar'){
        input2.value = input1*1.22;
    }

}
function alterarUnidade(){
    let input3 = document.getElementById('input3').value;
    let input4 = document.getElementById('input4');
    let unidadeEscolhida3 = document.getElementById('dropdownMenuButton3').textContent;
    let unidadeEscolhida4 = document.getElementById('dropdownMenuButton4').textContent;
    if(unidadeEscolhida3 === 'Metro' && unidadeEscolhida4 === 'Pé'){
        input4.value =  input3*3.28;
    } 
    if(unidadeEscolhida3=== 'Metro' && unidadeEscolhida4 === 'Milha'){
        input4.value = input3*0.000621371;
    }
    if(unidadeEscolhida3=== 'Pé' && unidadeEscolhida4 === 'Metro'){
        input4.value = input3*0.3048;
    }
    if(unidadeEscolhida3=== 'Pé' && unidadeEscolhida4 === 'Milha'){
        input4.value = input3*0.000189394;
    }
    if(unidadeEscolhida3=== 'Milha' && unidadeEscolhida4 === 'Pé'){
        input4.value = input3*5280;
    }
    if(unidadeEscolhida3=== 'Milha' && unidadeEscolhida4 === 'Metro'){
        input4.value = input3*1609.34;
    }

}
