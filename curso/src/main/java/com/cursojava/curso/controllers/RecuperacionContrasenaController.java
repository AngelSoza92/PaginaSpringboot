package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.RecuperacionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class RecuperacionContrasenaController {


    @Autowired
    private RecuperacionDao recuperacionDao;
    @PostMapping("/recuperar-contrasena")
    public void recuperarContrasena(@RequestBody String correoElectronico) throws IOException {
        // Genera un token o un ID único para el usuario
        System.out.println("enteró al RCC controller");
        // Envía un correo electrónico con un enlace que contiene el token o ID
        String asunto = "Recuperacion de cuenta";
        String cuerpo = "Haz clic en el siguiente enlace para restablecer tu contrasena: http://tu-sitio-web.com/restablecer-contrasena?token=XXX";
        System.out.println("controller"+correoElectronico);
        recuperacionDao.enviarMail(asunto,cuerpo,correoElectronico);


    }

}