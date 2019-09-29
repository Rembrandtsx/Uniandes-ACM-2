// Inject.js
// Show loading, pull data.
var jsonEl= {
    aeropuerto: 'src/inject/videos/aeropuerto.mp4',
    america_del_sur: 'src/inject/videos/america_del_sur.mp4',
    arte: 'src/inject/videos/arte.mp4',
    artes_escenicas: 'src/inject/videos/artes_escenicas.mp4',
    artes_plasticas: 'src/inject/videos/artes_plasticas.mp4',
    carreteras: 'src/inject/videos/carreteras.mp4',
    ciencia_y_tecnologia: 'src/inject/videos/ciencia_y_tecnologia.mp4',
    colombia: 'src/inject/videos/colombia.mp4',
    conquista_española: 'src/inject/videos/conquista_española.mp4',
    cultura: 'src/inject/videos/cultura.mp4',
    cuya_forma_de_gobierno_es_precidencialista: 'src/inject/videos/cuya_forma_de_gobierno_es_precidencialista.mp4',
    deportes: 'src/inject/videos/deportes.mp4',
    derechos_humanos: 'src/inject/videos/derechos_humanos.mp4',
    educacion: 'src/inject/videos/educacion.mp4',
    epoca_contemporanea: 'src/inject/videos/epoca_contemporanea.mp4',
    epoca_precolombina: 'src/inject/videos/epoca_precolombina.mp4',
    epoca_prehispanica: 'src/inject/videos/epoca_prehispanica.mp4',
    gastronomia: 'src/inject/videos/gastronomia.mp4',
    historia: 'src/inject/videos/historia.mp4',
    independencia: 'src/inject/videos/independencia.mp4',
    infraestructura: 'src/inject/videos/infraestructura.mp4',
    lenguas: 'src/inject/videos/lenguas.mp4',
    literatura: 'src/inject/videos/literatura.mp4',
    musica: 'src/inject/videos/musica.mp4',
    nuevo_reino_de_granada: 'src/inject/videos/nuevo_reino_de_granada.mp4',
    organizada_politicamente_en_32_departamentos: 'src/inject/videos/organizada_politicamente_en_32_departamentos.mp4',
    pais_soberano: 'src/inject/videos/pais_soberano.mp4',
    principales_ciudades: 'src/inject/videos/principales_ciudades.mp4',
    radio: 'src/inject/videos/radio.mp4',
    ramas_del_poder_publico: 'src/inject/videos/ramas_del_poder_publico.mp4',
    regeneracion_a_la_republica_liberal: 'src/inject/videos/regeneracion_a_la_republica_liberal.mp4',
    relaciones_exteriores: 'src/inject/videos/relaciones_exteriores.mp4',
    rivalidades_en_torno_a_la_forma_de_gobierno: 'src/inject/videos/rivalidades_en_torno_a_la_forma_de_gobierno.mp4',
    salud: 'src/inject/videos/salud.mp4',
    sistema_portuario: 'src/inject/videos/sistema_portuario.mp4',
    television: 'src/inject/videos/television.mp4',
    virreinato_de_nueva_granada: 'src/inject/videos/virreinato_de_nueva_granada.mp4'
  };
console.log("UI Preparing...")

// Append CSS File to head
$("head").append('<link href="' + chrome.extension.getURL('src/inject/ui/css/keyframes.css') + '" rel="stylesheet">');


// Append timeline
$.get(chrome.extension.getURL('src/inject/ui/floatingElements.html'), function (data) {
    $("body").append(data);
});


function keyframesToast(message){


    setTimeout(function(){
        $("#ensToast").text(message);
        var url64= chrome.extension.getURL('src/inject/videos/saludo.mp4');
        var video = $('<video />', {
            id: 'video',
            src: url64,
            type: 'video/mp4',
            controls: true,
            autoplay:true,
            muted: true
        });
        video.appendTo($("#ensToast"));
        $( "#ensToast" ).animate({
            left: "0vw"
        }, 250, function() {});
    }, 100);

    setTimeout(function(){
        $( "#ensToast" ).animate({
            left: "-20vw"
        }, 250, function() {});
    }, 12000);

}

keyframesToast("Haz click sobre el elemento que quieras traducir");



function keyframesToast2(message){


    setTimeout(function(){
        $("#ensToast2").text("Interpretación");
        console.log(message);
        
        let hola =Object.keys(jsonEl).filter(x=>{
            console.log(x);
            
            
            return message.includes(x)
        })[0]
        
        console.log(hola);
        
        var url64= chrome.extension.getURL('src/inject/videos/'+hola+'.mp4');
        var video = $('<video />', {
            id: 'video',
            src: url64,
            type: 'video/mp4',
            controls: true,
            autoplay:true,
            muted: true
        });
        video.appendTo($("#ensToast2"));
        $( "#ensToast2" ).animate({
            right: "0vw"
        }, 250, function() {});
    }, 100);

    setTimeout(function(){
        $( "#ensToast2" ).animate({
            right: "-40vw"
        }, 250, function() {});
    }, 8000);

}


// Get target element from page
var targetElementSelected = false;
$('body').children().mouseover(function(e){
    if(!targetElementSelected){
        $(".ens-element-picker").removeClass("ens-element-picker");
        $(e.target).addClass("ens-element-picker");
    }
    return false;
}).mouseout(function(e) {
    if(!targetElementSelected){
        $(this).removeClass("ens-element-picker");
    }
});

var keyframeTargetElement;
$(document).click(function(event) {

    if(!targetElementSelected){

        $(".ens-element-picker").removeClass("ens-element-picker");
        event.preventDefault();
        keyframeTargetElement = event.target;
        targetElementSelected = true;

        console.log("Target element selected:");
        console.log(keyframeTargetElement);
        console.log(keyframeTargetElement.textContent)
        let message = keyframeTargetElement.textContent.toLowerCase().replace(/ /g,"_");
        keyframesToast2(message);
    }else{
        return;
    }


});






// Dont forget to remove everything on close.
