package com.projectx.controllers;

import com.projectx.models.Mail;
import com.projectx.models.User;
import com.projectx.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.*;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;


@RestController("mailController")
public class MailController {
   @Autowired private MailService mailService;

    @PostMapping("register/{email}")
    public ResponseEntity<String> register(@PathVariable String email)
    {
        Mail mail=mailService.register(email);
        if(mail==null)
        {
            return new ResponseEntity<>("The email is incorrect",HttpStatus.NOT_FOUND);
        }
        sendEmail(mail);
        return new ResponseEntity<>("Your new password has been sent", HttpStatus.ACCEPTED);
    }

    @PostMapping("interview reminder/date")
    public ResponseEntity<String> Interview(@PathVariable Date date)
    {
        Mail mail=mailService.interview_reminder(date);
        return new ResponseEntity<>("Interview reminder sent",HttpStatus.OK);
    }

    @PostMapping("reset password/{userid}")
    public ResponseEntity<String> reset_Password(@PathVariable int userid)
    {
        Mail mail=mailService.recoverPassword(userid);
        if(mail==null)
        {
            return new ResponseEntity<>("No user here",HttpStatus.BAD_REQUEST);
        }
        Mail mail2=sendEmail(mail);
        return new ResponseEntity<>("Your registration information has been sent", HttpStatus.ACCEPTED);
    }

    @Bean
    public Mail sendEmail(Mail mail)
    {
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port",587);
        props.put("mail.smtp.auth",true);
        props.put("mail.smtp.starttls.enable",true);
        props.put("mail.smtp.ssl.protocols","TLSv1.2");
        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                //The password must be an app specific password with the gmail smtp server
                return new PasswordAuthentication(mail.getFromEmail(),mail.getSenderPassword());
            }
        });
        try {
            MimeMessage msg = new MimeMessage(session);
            msg.setFrom();
            msg.setRecipients(Message.RecipientType.TO,
                    mail.getSendToEmail());
            msg.setSubject(mail.getSubject());
            msg.setSentDate(new Date());
            if(mail.getMessage()!=null)
               msg.setText(mail.getMessage());
            Transport.send(msg);
        } catch (MessagingException mex) {
            System.out.println("send failed, exception: " + mex);
        }
        return mail;
    }
}

