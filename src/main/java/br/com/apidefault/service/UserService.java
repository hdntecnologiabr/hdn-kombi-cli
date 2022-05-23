package br.com.apidefault.service;

import java.util.List;

import javax.naming.NameNotFoundException;

import br.com.apidefault.domain.Role;
import br.com.apidefault.domain.User;
import br.com.apidefault.dto.RoleDTO;
import br.com.apidefault.dto.UserDTO;

public interface UserService {
	User saveUser(UserDTO user);
	Role saveRole(RoleDTO role);
	void addRoleToUser(String username, String role) throws NameNotFoundException;
	User getUser(String username);
	List<User>getUsers();
}
