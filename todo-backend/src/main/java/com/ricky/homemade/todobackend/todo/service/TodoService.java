package com.ricky.homemade.todobackend.todo.service;

import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface TodoService {

    Optional<Todo> findById(int id);

    Todo save(Todo todo);

    List<Todo> findAll();

    void deleteById(int id);


}
