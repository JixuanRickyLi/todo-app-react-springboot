package auth.beans;

import lombok.Data;

/**
 * @program: todo-backend
 * @description:
 * @author: Jixuan Ricky Li
 * @create: 2020-08-25 13:35
 **/
@Data
public class AuthenticationBean {

    private String message;

    public AuthenticationBean(String message){
        this.message = message;
    }

}
