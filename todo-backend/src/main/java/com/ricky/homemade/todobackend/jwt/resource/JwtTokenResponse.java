package com.ricky.homemade.todobackend.jwt.resource;

import java.io.Serializable;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-25 15:45
 **/
public class JwtTokenResponse implements Serializable {

    private static final long serialVersionUID = 8317676219297719109L;

    private final String token;

    public JwtTokenResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return this.token;
    }
}