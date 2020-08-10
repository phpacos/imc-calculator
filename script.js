
function imccalc(){
    var txpeso=window.document.getElementById('peso')
    var txmetro =window.document.getElementById('metros')
    var txcm =window.document.getElementById('cm')
    var p = Number(txpeso.value)
    var a = Number(txmetro.value) + Number(txcm.value)/100
    var res= document.getElementById('res')
    var imc = p/(a*a)
    
    
    if(imc<18.5){
        res.innerHTML=`Com o imc no valor de ${imc.toFixed(0).toString().replace('.',',')}, você está abaixo do peso.`
    }
    else if( imc>=18.5 && imc<24.9){
        res.innerHTML=`Com o imc no valor de ${imc.toFixed(0).toString().replace('.',',')}, você está com o peso normal.`
    }
    else if( imc>=25 && imc<29.9){
        res.innerHTML=`Com o imc no valor de ${imc.toFixed(0).toString().replace('.',',')}, você está com o acima do peso.`
    }
    else if( imc>=30 && imc<39.9){
        res.innerHTML=`Com o imc no valor de ${imc.toFixed(0).toString().replace('.',',')}, você está com obesidade de grau 1.`
    }
    else if (imc>40){
        res.innerHTML=`Com o imc no valor de ${imc.toFixed(0).toString().replace('.',',')}, você está com obesidade de grau 2.`
    } 


}