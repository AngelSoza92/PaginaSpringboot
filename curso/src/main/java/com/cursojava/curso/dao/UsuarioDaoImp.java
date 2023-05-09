package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Repository
@Transactional

public class UsuarioDaoImp implements UsuarioDao{
    @PersistenceContext @Autowired
    private EntityManager entityManager;
    @Override @Transactional
    public List<Usuario> getUsuarios() {
        String consulta = "FROM Usuario";
        List<Usuario> resultado = entityManager.createQuery(consulta).getResultList();
        return resultado;
    }

    @Override @Transactional
    public void eliminar(Long id) {
        //  String consulta = "FROM Usuario where id="+id+";";
        Usuario usuario = entityManager.find(Usuario.class,id);
        entityManager.remove(usuario);
    }

    @Override @Transactional
    public Usuario getUsuario(Long id) {
        System.out.println("usuario linkeado id:"+id);
        Usuario usuario = entityManager.find(Usuario.class,id);
        return usuario;
    }

    @Override
    public void registrar(Usuario usuario) {
        entityManager.merge(usuario);
    }

    @Override
    public boolean verificar(Usuario usr) {
        String query = "FROM Usuario WHERE email= :email";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter( "email", usr.getEmail())
                .getResultList();
        if(lista.isEmpty()){
            return false;
        }
        String passwordHashed = lista.get(0).getPassword();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        boolean laPassCoincide = argon2.verify(passwordHashed, usr.getPassword());
        return laPassCoincide;
    }

    @Override
    public Usuario obtenerUsrPorCredenciales(Usuario usr) {
        String query = "FROM Usuario WHERE email= :email";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter( "email", usr.getEmail())
                .getResultList();
        if(lista.isEmpty()){
            return null;
        }
        String passwordHashed = lista.get(0).getPassword();
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        boolean laPassCoincide = argon2.verify(passwordHashed, usr.getPassword());
        if (laPassCoincide){
            return lista.get(0);
        }else{
            return null;
        }

    }
}
