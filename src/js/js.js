function Contar()
{
    let ini = document.getElementById('txtI')
    let fim = document.getElementById('txtF')
    let passos = document.getElementById('txtP')

    let res = document.getElementById('res')


    if(ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)
    {
        // alert("erro faltam dados")

    }else{

        res.innerHTML = 'contando: <br> '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(p <= 0)
        {
            alert('Campo em branco')
            p = 1
        }
        if(i < f){
            for (let c = i; c <= f; c+= p) {
            
                res.innerHTML += `${c} \u{1F449}`
                
            }           
        }else{
            for (let c = i; c >= f; c -= p) {
            
                res.innerHTML += `${c} \u{1F449}`
                
            }        
        }  
        res.innerHTML += `\u{1f3c1}`
    }
}



const submit = document.getElementById("submit");

let ini = document.getElementById('txtI')
let fim = document.getElementById('txtF')
let passos = document.getElementById('txtP')    

submit.addEventListener('click', validate);

ini.addEventListener('change', validate)
fim.addEventListener('change', validate)
passos.addEventListener('change', validate)


function validate(e) {
  e.preventDefault();

  const inicioTxt = document.getElementById("txtI");
  const fimTxt = document.getElementById("txtF");
  const passosTxt = document.getElementById("txtP");

  let valid = true;

  if (!inicioTxt.value ) {
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    inicioTxt.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }else{
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    inicioTxt.classList.remove("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }

  if(!fimTxt.value){
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    fimTxt.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }else{
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    fimTxt.classList.remove("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }

  if(!passosTxt.value){
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    passosTxt.classList.add("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }else{
    const nameError = document.getElementById("nameError");
    nameError.classList.toggle("visible");
    passosTxt.classList.remove("invalid");
    nameError.setAttribute('aria-hidden', false);
    nameError.setAttribute('aria-invalid', true);
  }
   if(inicioTxt.value && fimTxt.value && passosTxt.value ){
    nameError.innerHTML = ''

  }
  
  return valid;
}
