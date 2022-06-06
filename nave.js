let velocity = 0
let nave = prompt("Bem-vindo a bordo! Digite o nome da nave:")
let menu = true

while(menu){

    let opcoes = prompt("1-Acelerar a nave em 5 km \n 2-Desacelerar a nave em 5 km \n 3-Imprimir resultado \n 4-Sair")
    
      if(opcoes == 1){
          velocityPlus()
      } else if(opcoes == 2){
          velocityDowngrade()
      } else if(opcoes == 3){
          dadosDeBordo()
      } else if(opcoes == 4){
          alert("Obrigado por viajar conosco!")
      } else{
          alert("opção invalida")
      }   

}

function velocityPlus(){
    velocity += 5
    return alert(velocity)
}
function velocityDowngrade(){
    if(velocity < 0){
        alert("A nave já está parada")
    } else {
    velocity -= 5 
    }
    return alert(velocity)
}
function dadosDeBordo(){
    return alert("O nome da nave é "+nave+" e a velocidade atual é "+velocity)

}
function sairDoPrograma(){
    return alert("Voce saiu do programa")
}