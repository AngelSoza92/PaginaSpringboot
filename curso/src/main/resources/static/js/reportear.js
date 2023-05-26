function reportear(tipo){
    if (tipo=='charts'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/asdf/";
        iframe.src = argumento;
    } else if(tipo=='antiguedad'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/antiguedad100/";
        iframe.src = argumento;
    }else if(tipo=='stock'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/stock100/";
        iframe.src = argumento;
    }else if(tipo=='traspasos'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/traspasos/";
        iframe.src = argumento;
    }else if(tipo=='tracking'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/tracking100/";
        iframe.src = argumento;
    }else if(tipo=='pkt'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/pkt100/";
        iframe.src = argumento;
    }else if(tipo=='sameday'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/samedaytodes/";
        iframe.src = argumento;
    }
    else if(tipo=='capacidades'){
        var iframe = document.getElementById("mifra");
        argumento="http://10.107.226.241:8050/capacidades/";
        iframe.src = argumento;
    }
        else if (tipo=='charts12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/clu/";
            iframe.src = argumento;
        } else if(tipo=='antiguedad12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/antiguedad/";
            iframe.src = argumento;
        }else if(tipo=='stock12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/stock/";
            iframe.src = argumento;
        }else if(tipo=='traspasos12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/traspasos/";
            iframe.src = argumento;
        }else if(tipo=='tracking12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/tracking/";
            iframe.src = argumento;
        }else if(tipo=='pkt12'){
            var iframe = document.getElementById("mifra");
            argumento="http://10.107.226.241:8051/pkt/";
            iframe.src = argumento;
        }
            else if (tipo=='charts150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/clu/";
                iframe.src = argumento;
            } else if(tipo=='antiguedad150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/antiguedad/";
                iframe.src = argumento;
            }else if(tipo=='stock150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/stock/";
                iframe.src = argumento;
            }else if(tipo=='traspasos150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/traspasos/";
                iframe.src = argumento;
            }else if(tipo=='tracking150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/tracking/";
                iframe.src = argumento;
            }else if(tipo=='pkt150'){
                var iframe = document.getElementById("mifra");
                argumento="http://10.107.226.241:81/pkt/";
                iframe.src = argumento;}
}