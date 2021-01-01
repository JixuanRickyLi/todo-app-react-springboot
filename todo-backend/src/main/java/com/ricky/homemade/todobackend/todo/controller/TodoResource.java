package com.ricky.homemade.todobackend.todo.controller;

import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import com.ricky.homemade.todobackend.todo.service.HardCodeTodoService;
import com.ricky.homemade.todobackend.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponents;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @program: todo-backend
 * @description: Controller of Todo App
 * @author: Jixuan Ricky Li
 * @create: 2020-08-13 11:10
 **/

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoService todoService;

    @GetMapping("users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo findById(@PathVariable String username, @PathVariable Integer id){
        Optional<Todo> byId = todoService.findById(id);

        if (byId.isPresent()) {
            return byId.get();
        };
        return null;
    }

    @PutMapping("users/{username}/todos/{id}")
    public ResponseEntity<Todo> save(@RequestBody Todo todo, @PathVariable Integer id) {
        System.out.println(todo.getIsCompleted());
        Optional<Todo> result = todoService.findById(id);
        Todo byId = null;
        if(result.isPresent()){
         byId = result.get();
        }
        if(byId.equals(null)){
            throw new RuntimeException("id wrong");
        }
        Todo save = todoService.save(todo);
        return  new ResponseEntity<>(save, HttpStatus.ACCEPTED );
    }

    // Return the location of Created URI
    @PostMapping("users/{username}/todos")
    public ResponseEntity<Void> insertNewTodo(@RequestBody Todo todo, @PathVariable String username){

        Todo save = todoService.save(todo);
        URI uRI = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(save.getId())
                .toUri();

        return ResponseEntity.created(uRI).build();
    }


    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable Integer id){
        todoService.deleteById(id);
            return ResponseEntity.status(200).build();

    }
}
