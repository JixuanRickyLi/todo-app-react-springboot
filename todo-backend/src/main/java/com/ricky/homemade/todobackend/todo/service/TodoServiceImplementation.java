package com.ricky.homemade.todobackend.todo.service;

import com.ricky.homemade.todobackend.todo.Repository.TodoRepository;
import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-29 18:00
 **/

@Service
public class TodoServiceImplementation implements TodoService{

    @Autowired
    private TodoRepository todoRepository;

    @Override
    public Optional<Todo> findById(int id) {
        return todoRepository.findById(id);
    }

    @Override
    public Todo save(Todo todo) {
        Todo save = todoRepository.save(todo);
        return save;
    }

    @Override
    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    @Override
    public void deleteById(int id) {
        todoRepository.deleteById(id);
    }
}
