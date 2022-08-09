package pl.sulkowski.jakub.systems.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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

    public List<UserEntity> getAllUsers(long offset, long limit, Sort.Direction direction, String sortFieldName) {
        Pageable page = new OffsetBasedPageRequest(limit, offset, direction, sortFieldName);
        return userRepository.findAll(page).getContent();
    }

    public List<UserEntity> getAllUsersWithFieldLike(String searchString){
        List<UserEntity> result = new java.util.ArrayList<>(List.of());
        result.addAll(userRepository.findByNameContainingIgnoreCase(searchString));
        result.addAll(userRepository.findBySurnameContainingIgnoreCase(searchString));
        result.addAll(userRepository.findByLoginContainingIgnoreCase(searchString));
        return result;
    }

    public long countAllRecords() {
        return userRepository.count();
    }

    public List<UserEntity> trimVariablesValue(List<UserEntity> users) {
        for (UserEntity user : users) {
            user.trimVariablesValue();
        }

        return users;
    }
}
