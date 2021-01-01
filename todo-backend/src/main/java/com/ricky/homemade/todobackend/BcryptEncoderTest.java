package com.ricky.homemade.todobackend;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-29 16:07
 **/

public class BcryptEncoderTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

        for(int i = 1; i < 10; i++){
            System.out.println(bCryptPasswordEncoder.encode("1234"));
        }
    }
}
