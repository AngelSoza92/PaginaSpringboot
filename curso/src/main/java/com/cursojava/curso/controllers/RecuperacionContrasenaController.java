package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.RecuperacionDao;
import com.cursojava.curso.dao.UsuarioDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecuperacionContrasenaController {


    @Autowired
    private RecuperacionDao recuperacionDao;
    @PostMapping("/recuperar-contrasena")
    public void recuperarContrasena(@RequestBody String correoElectronico) {
        // Genera un token o un ID único para el usuario
        System.out.println("enteró al RCC controller");
        // Envía un correo electrónico con un enlace que contiene el token o ID
        String asunto = "Recuperación de contraseña";
        String cuerpo = "Haz clic en el siguiente enlace para restablecer tu contraseña: http://tu-sitio-web.com/restablecer-contrasena?token=XXX";

        recuperacionDao.enviarMail(asunto,cuerpo,correoElectronico);


    }

}