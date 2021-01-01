import {get} from "axios";

class HelloWorldService{

    executeHelloWorldService(){
        let http = get('http://localhost:8080/hello-world');
        return http;
    }

    executeHelloWorldBeanService(){
        return get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldPathService(name){
        // let username = "user",
        //     password = "password";
        // //base64 encoding
        // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password );

        return get(`http://localhost:8080/hello-world-path/${name}`
            // ,{
            //     headers : {
            //         authorization: basicAuthHeader
            //     }
            // }
            );
    }

}

export default new HelloWorldService();
