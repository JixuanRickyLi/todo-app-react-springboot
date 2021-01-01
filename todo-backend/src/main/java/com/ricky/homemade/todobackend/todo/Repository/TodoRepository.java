package com.ricky.homemade.todobackend.todo.Repository;

import com.ricky.homemade.todobackend.todo.dataObject.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo , Integer> {
}
