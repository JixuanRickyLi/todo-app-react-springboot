import axios from "axios";
import {API_URL} from "../../../../Constants";

class TodoDataService{

    retrieveAllTodos(name){
        return axios.get(`${API_URL}/users/${name}/todos`)
    }

    deleteById(name,id){
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    findById(name, id){
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    updateById(id, username, description, targetDate, isCompleted){
        console.log(id, username, description, targetDate, isCompleted);
        return  axios.put(`${API_URL}/users/${username}/todos/${id}`,
            {
                id: id,
                username: username,
                description : description,
                targetDate : targetDate,
                isCompleted : isCompleted
            })
    }

    createTodo(username, description, targetDate, isCompleted){
        return axios.post(`${API_URL}/users/${username}/todos/`,
            {
                username: username,
                description: description,
                targetDate: targetDate,
                isCompleted: isCompleted
            }
            )

    }

}

export default new TodoDataService();
