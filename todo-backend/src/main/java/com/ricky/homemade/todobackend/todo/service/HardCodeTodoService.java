package com.ricky.homemade.todobackend.todo.service;

import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-13 14:20
 **/

@Service
@Slf4j
public class HardCodeTodoService {

//    private static List<Todo> todos = new ArrayList();

//    private static int idCounter = 1;

//    static {
//        todos.add(new Todo(idCounter++, "ricky", "Learn to dance", new Date(), false));
//        todos.add(new Todo(idCounter++, "ricky", "Learn Micro Services", new Date(), false));
//        todos.add(new Todo(idCounter++, "ricky", "Learn Spring Boot", new Date(), false));
//        todos.add(new Todo(idCounter++, "ricky", "Learn React", new Date(), false));
//    }
//
//    public List<Todo> findAll(){
//        return todos;
//    }
//
//    public Todo findById(Integer id){
//        for (Todo object: todos) {
//            if(object.getId().equals(id)){
//                return object;
//            }
//        }
//        return null;
//    }
//
//    public Todo deleteById(Integer id){
//        Todo todo = findById(id);
//        if(todo == null){
//            return null;
//        }
//        todos.remove(todo);
//        return todo;
//    }
//
//    public Todo save(Todo todo, Integer id){
//        if(id == -1){
//            todo.setId(idCounter++);
//            todos.add(todo);
//            return todo;
//        }
//        for (Todo temp: todos
//             ) {
//            if (id.equals(temp.getId())){
//                BeanUtils.copyProperties(todo, temp);
//                Logger.getLogger(temp.toString());
//                return temp;
//            }
//        }
//        throw new RuntimeException("Todo id not found");
//    }
}
