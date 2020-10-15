
 function hora(){
    const dato = new Date();
    const diasemana =['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    const mesano=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
    const hora = dato.getHours();
    const minutos = dato.getMinutes();
    const segundo = dato.getSeconds();
    const dias = dato.getDay();
    const diaexacto = diasemana[dias]
    const mes = dato.getMonth();
    const mesexacto = mesano[mes];
    const diacalendario = dato.getUTCDate();
    const ano = dato.getUTCFullYear();


    


    
    const html=`
    <div id="Hora" class="text-center">
      
            <h1>Hola Hoy es ${diaexacto},${diacalendario} de ${mesexacto} del año ${ano}</h1>
        <hr>
            <p class="text-capitalize text-uppercase">son las :</p>
        <hr>
         <h2> ${hora}:${minutos}:${segundo}</h2>
   
        
    </div>`;
    const rj =document.querySelector("#content");
    rj.innerHTML=html;
    
}
window.onload = function (){
    var intervalo = setInterval("hora()",1000)
    
 }


