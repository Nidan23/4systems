package pl.sulkowski.jakub.systems.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.sulkowski.jakub.systems.backend.entity.UserEntity;

import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    List<UserEntity> findByNameContainingIgnoreCase(String name);
    List<UserEntity> findBySurnameContainingIgnoreCase(String surname);
    List<UserEntity> findByLoginContainingIgnoreCase(String login);
}
