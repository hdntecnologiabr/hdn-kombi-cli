package br.com.apidefault.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.apidefault.domain.User;

public interface UserRepo extends JpaRepository<User, Long>{
	User findByUsername(String username);
}
