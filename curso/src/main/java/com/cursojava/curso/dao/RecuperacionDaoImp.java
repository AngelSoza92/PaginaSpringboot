package com.cursojava.curso.dao;

import com.cursojava.curso.models.Usuario;
import com.cursojava.curso.utils.JWTUtil;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.List;

@Repository
@Transactional
public class RecuperacionDaoImp implements RecuperacionDao {
    @PersistenceContext
    @Autowired
    private EntityManager entityManager;
    @Autowired
    private JWTUtil jwtUtil;
    public void enviarMail(String asunto, String mensaje, String destinatario) throws IOException{
        System.out.println(("daoimp:"+asunto));
        System.out.println(("daoimp:"+mensaje));
        System.out.println(("daoimp:"+destinatario));


        String query = "FROM Usuario WHERE email= :email";
        List<Usuario> lista = entityManager.createQuery(query)
                .setParameter( "email", destinatario)
                .getResultList();
        if(!lista.isEmpty()){

            String token = jwtUtil.create(String.valueOf(lista.get(0).getId()),destinatario);
            mensaje = mensaje+token;
            System.out.println("lo que enviaria el mail es:"+mensaje);


        String POST_PARAMS = "message="+mensaje+"&subject="+asunto+"&dick="+destinatario;

        URL obj = new URL("https://nodo51.cl/zend_mail_post_to");
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("POST");
        con.setDoOutput(true);
        OutputStream os = con.getOutputStream();
        os.write(POST_PARAMS.getBytes());
        os.flush();
        os.close();

        int responseCode = con.getResponseCode();
        System.out.println("POST Response Code :: " + responseCode);

        if (responseCode == HttpURLConnection.HTTP_OK) { //success
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
            // print result
            System.out.println(response.toString());
        } else {
            System.out.println("POST request did not work.");
        }
    }}

    @Override
    public void nuevaClave(String usrId, String nuevaClave) {

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(2, 1024,2,nuevaClave);
        String sql = "UPDATE usuarios SET password = :hash WHERE id = :usrId";
        Query query = entityManager.createNativeQuery(sql)
                .setParameter("hash", hash)
                .setParameter("usrId", usrId);

        int updatedRows = query.executeUpdate();
        System.out.println("Número de filas actualizadas: " + updatedRows);
    }

}
