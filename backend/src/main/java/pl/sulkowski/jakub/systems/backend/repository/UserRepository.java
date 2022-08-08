package pl.sulkowski.jakub.systems.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.sulkowski.jakub.systems.backend.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
}
