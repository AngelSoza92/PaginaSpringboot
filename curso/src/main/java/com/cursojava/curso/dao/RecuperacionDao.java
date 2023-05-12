package com.cursojava.curso.dao;

import java.io.IOException;

public interface RecuperacionDao {
    void enviarMail(String asunto, String cuerpo, String correoElectronico)  throws IOException;
}
