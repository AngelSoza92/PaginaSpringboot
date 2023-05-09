package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;

import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(Long id);

    Usuario getUsuario(Long id);

    void registrar(Usuario usuario);

    boolean verificar(Usuario usr);

    Usuario obtenerUsrPorCredenciales(Usuario usr);
}
