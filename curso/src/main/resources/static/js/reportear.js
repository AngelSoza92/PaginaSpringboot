function reportear(tipo){
    if (tipo=='charts'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/clu/";
        iframe.src = argumento;

    } else if(tipo=='antiguedad'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/antiguedad/";
        iframe.src = argumento;
    }else if(tipo=='stock'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/stock/";
        iframe.src = argumento;
    }else if(tipo=='traspasos'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/traspasos/";
        iframe.src = argumento;
    }else if(tipo=='tracking'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/tracking/";
        iframe.src = argumento;
    }else if(tipo=='pkt'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/pkt/";
        iframe.src = argumento;
    }else if(tipo=='sameday'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/sameday/";
        iframe.src = argumento;
    }
    else if(tipo=='capacidades'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/capacidades/";
        iframe.src = argumento;
    }
}