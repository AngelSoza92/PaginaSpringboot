package com.cursojava.curso.controllers;

import com.cursojava.curso.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PageController {
    @Autowired
    private JWTUtil jwtUtil;
    @RequestMapping(value="api/validar", method = RequestMethod.GET)
    public String pagina(@RequestHeader(value="Authorization") String token) {
        // Realiza la verificación del token aquí
        String usrId = jwtUtil.getKey(token);
        System.out.println("el usr que estamos probando es: "+usrId);
        System.out.println("el token que estamos probando es: "+token);
        if (usrId ==null){
            return "no autorizado";
        }
        else{
            return "respuesta";
        }

    }


}


