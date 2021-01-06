const DIASMESES = 
    {
        1:"31",
        2:"28",
        3:"31",
        4:"30",
        5:"31",
        6:"30",
        7:"31",
        8:"31",
        9:"30",
        10:"31",
        11:"30",
        12:"31",

    }

const NOMBREMESES = 
    {
        1:"ENERO",
        2:"FEBRERO",
        3:"MARZO",
        4:"ABRIL",
        5:"MAYO",
        6:"JUNIO",
        7:"JULIO",
        8:"AGOSTO",
        9:"SEPTIEMBRE",
        10:"OCTUBRE",
        11:"NOVIEMBRE",
        12:"DICIEMBRE",

}

const btnback = document.getElementById("btn-back");
const btnnext = document.getElementById("btn-next");
const btnbackanno = document.getElementById("btn-back-anno");
const btnnextanno = document.getElementById("btn-next-anno");

const fecha = getactualfecha();

let mes = fecha.mes; 
let anno = fecha.anno;
let diactual = fecha.dia;
createCalendar(diactual,mes,anno)


// boton atras año

btnbackanno.addEventListener("click",function(){ 
    anno--
    createCalendar(diactual,mes,anno)

});

// boton siguiente año

btnnextanno.addEventListener("click",function(){ 
    anno++
    createCalendar(diactual,mes,anno)

});


// boton atras mes

btnback.addEventListener("click",function(){
    mes--
    if(mes == 0){
        mes = 12;
    }
    createCalendar(diactual,mes,anno)

});


// boton siguiente mes

btnnext.addEventListener("click",function(){
   
    mes++
    if(mes == 13){
        mes = 1;
    }

    createCalendar(diactual,mes,anno)

});




// funcion para obtener la fecha actual dia , mes y año

 
function getactualfecha(){
    const date = new Date()
    let  fecha = {
         dia:date.getDate(),
         mes:date.getMonth() + 1,
         anno:date.getFullYear(),

    }

    return fecha;
}


// funcion para obtener el dia de la semana
 

function getdias(mes,anno){

    var date = new Date(mes+'-1-'+anno)

    if(date.getDay() == 0){
        return 7;
    }else{
        return date.getDay();

    }

    
}

// funcion para obtener si es falso o verdadero si es un año bisiesto

function getannobisiesto(anno){

    return anno % 4 == 0 && anno % 100 != 0 || anno % 400 == 0;


}


// Funcion para crear el calendario dependiendo del mes y año,



function createCalendar(diactual,mes,anno){

    const idcontent = document.getElementById("content-calendar");
    const idnombremes = document.getElementById("nombremes");
    const idannotext = document.getElementById("annotext");
    
    const fechaactual = getactualfecha();

    idnombremes.innerText = NOMBREMESES[mes.toString()];
    idannotext.innerText = anno.toString();
    let lista =   "<li>Lunes</li><li>Martes</li><li>Miercoles</li><li>Jueves</li><li>Viernes</li><li>Sabado</li><li>Domingo</li>";
    totaldias = parseInt(DIASMESES[mes.toString()]);
    
    if(getannobisiesto(anno)){
        if(mes == 2){
        totaldias++;
        }
    }


    for(let i = 1 ; i <= totaldias ; i++){
        if(i == 1 ){
            if(i == diactual && fechaactual.mes == mes && fechaactual.anno == anno){
                lista = lista + "<li class='diactual' data-start="+getdias(mes,anno)+">"+i+"</li>";
            }else{

                lista = lista + "<li data-start="+getdias(mes,anno)+">"+i+"</li>";

            }
           

        }
        else{

            if(i == diactual && fechaactual.mes == mes && fechaactual.anno == anno){
                lista = lista + "<li class='diactual'>"+i+"</li>";
            }else{

                lista = lista + "<li>"+i+"</li>";

            }

            

        }

    }
    idcontent.innerHTML = lista;

}
