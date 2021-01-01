package com.ricky.homemade.todobackend.helloWorld.beans;
import lombok.Data;


/**
 * @program: todo-backend
 * @description: hello world bean
 * @author: Jixuan Ricky Li
 * @create: 2020-08-12 18:51
 **/

@Data
public class HelloWorldBean {

    private String message;

    public HelloWorldBean(String message) {
        this.message = message;
    }
}
