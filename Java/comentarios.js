function enviarcomentarios(){
    const nombrecompleto=document.getElementById("exampleFormControlInput1").value;
    const Coment=document.getElementById("exampleFormControlTextarea1").value;
    const informacion=`la infotmacion ingresada: 1.${nombrecompleto} \n 2.${Coment}  `;


    alert(informacion)

}