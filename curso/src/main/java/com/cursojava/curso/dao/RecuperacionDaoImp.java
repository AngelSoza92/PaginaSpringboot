package com.cursojava.curso.dao;

import org.springframework.stereotype.Repository;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
@Repository
public class RecuperacionDaoImp implements RecuperacionDao {

    public void enviarMail(String asunto, String mensaje, String destinatario) throws IOException{
        System.out.println(("daoimp:"+asunto));
        System.out.println(("daoimp:"+mensaje));
        System.out.println(("daoimp:"+destinatario));
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
    }

}
