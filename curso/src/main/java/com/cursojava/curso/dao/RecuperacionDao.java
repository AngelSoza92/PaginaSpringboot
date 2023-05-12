package com.cursojava.curso.dao;

public interface RecuperacionDao {
    void enviarMail(String asunto, String cuerpo, String correoElectronico);
}
