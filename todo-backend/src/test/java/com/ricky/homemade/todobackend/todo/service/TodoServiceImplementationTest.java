package com.ricky.homemade.todobackend.todo.service;

import com.ricky.homemade.todobackend.todo.Repository.TodoRepository;
import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.util.Optional;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class TodoServiceImplementationTest {

    @Autowired
    private TodoServiceImplementation todoService;

    @Test
    public void findById() throws Exception {
        Optional<Todo> byId = todoService.findById(1);
        if(byId.isPresent()){
            Assert.assertEquals(new Integer(1), byId.get().getId());
        }
        else throw new Exception("not found");

    }

    @Test
    public void save() {
        Todo todo = new Todo();
        todo.setDescription("Learn Angular");
        todo.setTargetDate(new Date());
        todo.setIsCompleted(0);
        todo.setUsername("Ricky");

        Todo save = todoService.save(todo);
        Assert.assertNotNull(save.getId());
    }

    @Test
    public void findAll() {
    }

    @Test
    public void deleteById() {
    }
}