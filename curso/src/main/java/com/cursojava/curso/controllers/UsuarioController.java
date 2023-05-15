package com.cursojava.curso.controllers;
import com.cursojava.curso.dao.UsuarioDao;
import com.cursojava.curso.models.Usuario;
import com.cursojava.curso.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;
    @RequestMapping(value="api/usr")
    public List<Usuario> getUsuarios(@RequestHeader(value="Authorization") String token){
        String usrId = jwtUtil.getKey(token);
        if (usrId ==null){
            return new ArrayList<>();
        }
        else{
            return usuarioDao.getUsuarios();
        }
    }

    @RequestMapping(value="api/usr", method=RequestMethod.POST)
    public void registrarUsuario(@RequestBody Usuario usuario){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(2, 1024,2,usuario.getPassword());
        usuario.setPassword(hash);
        usuarioDao.registrar(usuario);
    }
    @RequestMapping(value="api/usrs/{id}")
    public Usuario getUsuario(@PathVariable Long id){
        return usuarioDao.getUsuario(id);
    }

    @RequestMapping(value="api/edit")
    public Usuario editar(){
        Usuario usr = new Usuario();
        usr.setNombre("Angel");
        usr.setApellido("Soza");
        usr.setEmail("angelsoza1992@gmail.com");
        usr.setTelefono("949985532");
        return usr;
    }

    @RequestMapping(value="api/usr/{id}", method= RequestMethod.DELETE)
    public void eliminar(@PathVariable Long id){
        usuarioDao.eliminar(id);
    }
    @RequestMapping(value="api/search")
    public Usuario buscar(){
        Usuario usr = new Usuario();
        usr.setNombre("Angel");
        usr.setApellido("Soza");
        usr.setEmail("angelsoza1992@gmail.com");
        usr.setTelefono("949985532");
        return usr;
    }


}

