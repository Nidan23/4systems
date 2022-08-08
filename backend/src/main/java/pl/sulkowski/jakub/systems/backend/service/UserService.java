package pl.sulkowski.jakub.systems.backend.service;

import pl.sulkowski.jakub.systems.backend.entity.UserEntity;

import java.util.List;

public interface UserService {

    List<UserEntity> addUser(List<UserEntity> users);

    List<UserEntity> getAllUsers(long offset, long limit);

    List<UserEntity> trimVariablesValue(List<UserEntity> users);
}
