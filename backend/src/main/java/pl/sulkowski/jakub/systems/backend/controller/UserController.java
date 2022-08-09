package pl.sulkowski.jakub.systems.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import pl.sulkowski.jakub.systems.backend.entity.UserEntity;
import pl.sulkowski.jakub.systems.backend.model.user.AllUsersRequestModel;
import pl.sulkowski.jakub.systems.backend.model.user.FindUserRequestModel;
import pl.sulkowski.jakub.systems.backend.service.UserService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(value = "/add", consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
    public Boolean addUsers(@RequestBody List<UserEntity> users, @RequestHeader("Content-Type") String contentType) {
        if (contentType.startsWith(MediaType.APPLICATION_XML_VALUE)) {
            users = userService.trimVariablesValue(users);
        }

        List<UserEntity> addedUsers = userService.addUser(users);

        return !addedUsers.isEmpty();
    }

    @PostMapping("/get")
    public List<UserEntity> getUsers(@RequestBody AllUsersRequestModel userParams) {
        return userService.getAllUsers(userParams.getOffset(), userParams.getLimit(), userParams.getDirection(), userParams.getSortFieldName());
    }

    @PostMapping("/search")
    public List<UserEntity> getAllUsersWithFieldValueLike(@RequestBody FindUserRequestModel findUserRequestModel) {
        return userService.getAllUsersWithFieldLike(findUserRequestModel.getSearchValue());
    }
}
