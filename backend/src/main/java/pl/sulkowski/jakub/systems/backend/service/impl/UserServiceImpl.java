package pl.sulkowski.jakub.systems.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import pl.sulkowski.jakub.systems.backend.entity.UserEntity;
import pl.sulkowski.jakub.systems.backend.repository.UserRepository;
import pl.sulkowski.jakub.systems.backend.service.UserService;
import pl.sulkowski.jakub.systems.backend.utils.OffsetBasedPageRequest;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    public List<UserEntity> addUser(List<UserEntity> users) {
        return userRepository.saveAll(users);
    }

    public List<UserEntity> getAllUsers(long offset, long limit) {
        Pageable page = new OffsetBasedPageRequest(limit, offset);
        return userRepository.findAll(page).getContent();
    }

    public List<UserEntity> trimVariablesValue(List<UserEntity> users) {
        for (UserEntity user : users) {
            user.trimVariablesValue();
        }

        return users;
    }
}
