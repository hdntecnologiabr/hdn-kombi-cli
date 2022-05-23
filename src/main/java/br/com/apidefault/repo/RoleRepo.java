package br.com.apidefault.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.apidefault.domain.Role;

public interface RoleRepo extends JpaRepository<Role, Long>{
	Role findByName(String name);
}
