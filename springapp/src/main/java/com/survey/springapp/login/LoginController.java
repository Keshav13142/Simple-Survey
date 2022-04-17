package com.survey.springapp.login;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class LoginController {

    @PostMapping("/login")
    public ResponseEntity<?> checkCredentials(@RequestParam("email") String email, @RequestParam("pass") String password) {
        System.out.println(email + password);
        if (email.equals("admin@gmail.com") && password.equals("admin"))
            return ResponseEntity.ok().build();
        else
            throw new IllegalStateException("User does not exist");
    }

}
