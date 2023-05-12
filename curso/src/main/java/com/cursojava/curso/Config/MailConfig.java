package com.cursojava.curso.Config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

@Configuration
@EnableAutoConfiguration
public class MailConfig {

    @Bean
    public JavaMailSender javaMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        // Configura las propiedades del JavaMailSender según tus necesidades
        mailSender.setHost("smtp.example.com");
        mailSender.setPort(587);
        mailSender.setUsername("mailremitente");
        mailSender.setPassword("pwd");
        return mailSender;
    }
}