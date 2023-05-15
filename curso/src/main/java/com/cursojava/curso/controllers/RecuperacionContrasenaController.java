package com.cursojava.curso.controllers;

import com.cursojava.curso.dao.RecuperacionDao;
import com.cursojava.curso.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
public class RecuperacionContrasenaController {

    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private RecuperacionDao recuperacionDao;
    @PostMapping("/recuperar-contrasena")
    public void recuperarContrasena(@RequestBody String correoElectronico) throws IOException {
        // Genera un token o un ID único para el usuario
        System.out.println("enteró al RCC controller");
        // Envía un correo electrónico con un enlace que contiene el token o ID
        String asunto = "Recuperacion de cuenta";
        String cuerpo = "Haz clic en el siguiente enlace para restablecer tu contrasena: http://localhost:8080/nuevaClave.html?token=";
        System.out.println("controller"+correoElectronico);
        recuperacionDao.enviarMail(asunto,cuerpo,correoElectronico);
    }

    @RequestMapping(value="/nva-clave", method= RequestMethod.POST)
    public void nuevaClave(@RequestBody Map<String, String> requestBody, @RequestHeader(value="Authorization") String token){
        String usrId = jwtUtil.getKey(token);
        String nuevaClave = requestBody.get("nvaClave");
        System.out.println("el token que entro al controller es:"+ token);
        System.out.println("el id  entro al controller es :"+ usrId);
        System.out.println("la nueva clave que entro al controller es :"+ nuevaClave);
        recuperacionDao.nuevaClave(usrId, nuevaClave);

    }

}