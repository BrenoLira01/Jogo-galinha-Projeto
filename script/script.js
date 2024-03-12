window.onload = function() {
  //Boas vindas
alert ("✨SEJA BEM VINDO AO JOGO CAÇA AOS OVOS!🐣✨");

var nome= prompt("Qual é o seu nome?");

alert("Olá " + nome + " prazer em te conhecer!\n\n" + "Você tem 12 tentativas pra adivinhar quantos ovos a galinha Clotilde colocou 🥚 😉👍 \n\n" + "Se acertar vai ganhar um prêmio surpresa 🎁\n\n");

alert("🐔 BOA SORTE!");


//Número secreto de ovos
var numeroSecreto = parseInt(Math.random() * 1000)+1;

//iniciar contador
var contador = 0;

//número de tentativas
var tentativas = 12;

//descubrir o número de ovos
while (chute != numeroSecreto) {
  
  //variavel sair do jogo
  var sairDoJogo = "sair";
  
  //inserir chute
  var chute = prompt("Quantos ovos a Clotilde colocou? 🥚\n\n" + "Você já gastou (" + contador + ") de 12 tentativas \n\n" + "Escolha entre 1 e 1000 \n\n" + "Se quiser dair do jogo digite 'sair'");
  
//incrementar contador
contador++;
  
  if (contador >= tentativas) {
      
    //chegou no limite de tentativas  
    alert("Que pena "+ nome +" quem sabe na próxima\n\n" + "Mas não desista o prêmio surpresa espera por você! 🎁😁");
      alert("Até a próxima 👋😙");
      
      break; //Para o loop
      }
  
   //sair do jogo
    else if(chute == sairDoJogo){
      alert("Até mais tarde");
      
      break; //Para o loop
    }
      
    //piada de mal gosto
      else if (contador == 8){
          alert("O que a galinha falou pro ovo na academia? 🐔\n\n" + "'Você precisa malhar pra ficar durinho!'");
        alert("Você tá quase lá! 😉👍");
      }
  
    //Só resta uma tentativa
      else if (contador == 11){
          alert("Você tem apenas uma única tentativa restante 😱");
      }
  
    //Você ganhou!
  if (chute == numeroSecreto) {

    alert("Acertou!😁\n\n" + "Parabéns você ganhou um prêmio surpresa, que é... 🥁🥁");
    
    alert(numeroSecreto + " Omelettes 🍳\n\n" + nome +" até outro dia 👋😙");

  }
 
  //numero secreto é menor
  else if (chute > numeroSecreto) {
    
    alert(chute + " ovos?");

    alert("Ela colocou menos que " + chute + "\n\n" + "Nesse dia ela tava muito cansada 😪");

  }

  //número secreto é maior
  else if (chute < numeroSecreto) {
    
    alert(chute + " ovos?");

    alert("Ela colocou mais que " + chute + "\n\n" + "Eita galinha pra botar ovo ✨🐔✨");

  }

}
};


