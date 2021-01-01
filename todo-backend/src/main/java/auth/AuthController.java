package auth;

import auth.beans.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: todo-backend
 * @description: Authentication Service
 * @author: Jixuan Ricky Li
 * @create: 2020-08-25 13:33
 **/

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

    @GetMapping("/basicauth")
    public AuthenticationBean authentication(){
        return new AuthenticationBean("You are authenticated");
    }

}
