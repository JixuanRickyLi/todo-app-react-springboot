package com.ricky.homemade.todobackend.jwt.resource;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-25 15:45
 **/
import java.io.Serializable;

public class  JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU5OTMzNDU3NSwiaWF0IjoxNTk4NzI5Nzc1fQ.24NBCjvUQtaeTZcZSCvlpErmy_oed68wFdgokKsiAU4XKwIFo-1S5Q2azOYa_FJNJx817ZNpZnZebi7ZDAlqoA"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
