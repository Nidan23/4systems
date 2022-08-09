package pl.sulkowski.jakub.systems.backend.service;

import org.springframework.data.domain.Sort;
import pl.sulkowski.jakub.systems.backend.entity.UserEntity;

import java.util.List;

public interface UserService {

    List<UserEntity> addUser(List<UserEntity> users);

    List<UserEntity> getAllUsers(long offset, long limit, Sort.Direction direction, String sortFieldName);

    List<UserEntity> getAllUsersWithFieldLike(String searchString);

    long countAllRecords();

    List<UserEntity> trimVariablesValue(List<UserEntity> users);
}
