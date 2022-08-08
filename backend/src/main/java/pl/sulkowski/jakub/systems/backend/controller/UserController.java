package pl.sulkowski.jakub.systems.backend.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.sulkowski.jakub.systems.backend.model.user.UserModel;
import pl.sulkowski.jakub.systems.backend.model.user.UserListRequestModel;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @PostMapping(value = "/add", consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public String addUsers(@RequestBody List<UserModel> userModels) {
        return userModels.toString();
    }

    @PostMapping("/get")
    public String getUsers(@RequestBody UserListRequestModel userListRequestModel) {
        return String.format("test get users offset: %s; limit: %s;", userListRequestModel.getOffset(), userListRequestModel.getLimit());
    }
}
