let encriptarBtn = document.getElementById("encriptar")
let copiarBtn = document.getElementById("Boton_copiar")
let desencriptarBtn = document.getElementById("Boton_desencriptar")
let texto_encriptar = document.getElementById('texto_encriptar')
let texto_desencriptar = document.getElementById("texto_desencriptar")



let copiarAccion=async()=>{
    try {
        let texto = texto_desencriptar.value
        console.log(texto)
        await navigator.clipboard.writeText(texto);
        alert('Contenido copiado al portapapeles');
      } catch (err) {
        console.error('Error al copiar: ', err);
      }
}



let  encriptador = ()=>{
    let textostr = texto_encriptar.value
    let newText = ""
    for (l of textostr){
        switch (l){
           // La letra "a" es convertida para "ai"
           case "a":newText=newText+"ai"
           break
           // La letra "e" es convertida para "enter"
           case "e":newText=newText+"enter"
           break
           // La letra "i" es convertida para "imes"
           case "i":newText=newText+"imes"
           break
           // La letra "o" es convertida para "ober"
           case "o":newText=newText+"ober"
           break
           // La letra "u" es convertida para "ufat"
           case "u":newText=newText+"ufat"
           break
           default:newText=newText+l
        }
    }
    asignarTextoElemento("texto_desencriptar",newText)
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

let  desEncriptador = ()=>{
    let textostr = texto_encriptar.value
    console.log("desencriptar")
    let newText = ""
    for (let l=0;l< textostr.length; l++){
        switch (textostr[l]){
            // La letra "a" es convertida para "ai"
            case "a":newText=newText+"a"
            l++
            break
            // La letra "e" es convertida para "enter"
            case "e":newText=newText+"e"
            l=l+4
            break
            // La letra "i" es convertida para "imes"
            case "i":newText=newText+"i"
            l=l+3
            break
            // La letra "o" es convertida para "ober"
            case "o":newText=newText+"o"
            l=l+3
            break
            // La letra "u" es convertida para "ufat"
            case "u":newText=newText+"u"
            l=l+3
            break
            default:newText=newText+textostr[l]
        }
    }
    asignarTextoElemento("texto_desencriptar",newText)
}