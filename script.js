function abrirInvitacion(){

    document.getElementById("bienvenida").style.display="none";
    document.getElementById("contenido").style.display="block";

    const musica=document.getElementById("musica");

    musica.play().catch(()=>{});

    confetti({
        particleCount:180,
        spread:120,
        origin:{y:0.6}
    });

}

const fechaEvento=new Date("2026-08-09T15:00:00").getTime();

function actualizarContador(){

    const ahora=new Date().getTime();

    const diferencia=fechaEvento-ahora;

    if(diferencia<=0){

        document.getElementById("dias").innerHTML="0";
        document.getElementById("horas").innerHTML="0";
        document.getElementById("minutos").innerHTML="0";
        document.getElementById("segundos").innerHTML="0";

        return;

    }

    const dias=Math.floor(diferencia/(1000*60*60*24));

    const horas=Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos=Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos=Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("dias").innerHTML=dias;
    document.getElementById("horas").innerHTML=horas;
    document.getElementById("minutos").innerHTML=minutos;
    document.getElementById("segundos").innerHTML=segundos;

}

setInterval(actualizarContador,1000);

actualizarContador();

document.getElementById("whatsapp").onclick=function(){

window.open("https://wa.me/50663687147?text=Hola,%20confirmo%20mi%20asistencia%20al%20Baby%20Shower%20de%20Eithan.","_blank");

}

document.getElementById("mapa").onclick=function(){

window.open("https://maps.app.goo.gl/LuYFBifz8PvXf83D9","_blank");

}


