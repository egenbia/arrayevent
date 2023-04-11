const Desenvolvidos = ["Noruega", "Suíça", "Suécia", "Austrália"];
const Subdesenvolvidos = ["Niger", "Afeganistão", "Somália", "Haiti"];
Subdesenvolvidos.reverse();


function desenvolvidos() {
    const DesenvolvidosElement = document.getElementById("paisesdes");
    DesenvolvidosElement.innerHTML = Desenvolvidos.join(", ");
}

function subdesenvolvidos() {
    const SubdesenvolvidosElement = document.getElementById("paisessub");
    SubdesenvolvidosElement.innerHTML = Subdesenvolvidos.join(", ");
   
  }