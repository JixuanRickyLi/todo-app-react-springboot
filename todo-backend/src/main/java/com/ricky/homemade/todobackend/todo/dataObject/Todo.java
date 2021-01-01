package com.ricky.homemade.todobackend.todo.dataObject;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-13 11:11
 **/

@Data
@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String username;

    private String description;

    private Date targetDate;

    private Integer isCompleted;

    public Todo(){
        super();
    }

//    public Todo(Integer id, String username, String description, Date targetDate, boolean isCompleted) {
//        this.id = id;
//        this.username = username;
//        this.description = description;
//        this.targetDate = targetDate;
//        this.isCompleted = isCompleted;
//    }



    @JsonFormat(pattern="yyyy-MM-dd")
    public Date getTargetDate() {
        return targetDate;
    }

}
