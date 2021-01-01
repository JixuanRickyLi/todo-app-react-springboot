package com.ricky.homemade.todobackend.helloWorld.controller;

import com.ricky.homemade.todobackend.helloWorld.beans.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: todo-backend
 * @description: test
 * @author: Jixuan Ricky Li
 * @create: 2020-08-12 18:00
 **/

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloworldController {

    @GetMapping("/hello-world")
    public String helloworld(){
        return "hello world";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Jixuan");
    }

    @GetMapping("/hello-world-path/{name}")
    public HelloWorldBean helloWorldPath(@PathVariable String name){
        if(name.equals("")){
            throw new RuntimeException("Something went wrong");
        }
        return new HelloWorldBean(name);

    }

}
