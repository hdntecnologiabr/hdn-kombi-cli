package br.com.apidefault.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.naming.NameNotFoundException;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.apidefault.domain.Role;
import br.com.apidefault.domain.User;
import br.com.apidefault.dto.RoleDTO;
import br.com.apidefault.dto.UserDTO;
import br.com.apidefault.repo.RoleRepo;
import br.com.apidefault.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

	private final UserRepo userRepo;
	private final RoleRepo roleRepo;
	private final PasswordEncoder passwordEncoder;
	private final ModelMapper mapper;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepo.findByUsername(username);
		if (user == null) {
			log.error("User not found in the database");
			throw new UsernameNotFoundException("User not found in the database");
		} else {
			log.info("User found in the database: {}", username);
		}
		Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
		user.getRoles().forEach(role -> {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		});
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				authorities);
	}

	@Override
	public User saveUser(UserDTO userDTO) {
		User user = mapper.map(userDTO, User.class);
		log.info("Saving new user {} to the database", user.getName());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}

	@Override
	public Role saveRole(RoleDTO roleDTO) {
		Role role = mapper.map(roleDTO, Role.class);
		log.info("Saving new role {} to the database", roleDTO.getName());
		return roleRepo.save(role);
	}

	@Override
	public void addRoleToUser(String username, String roleName) throws NameNotFoundException {
		User user = userRepo.findByUsername(username);
		Role role = roleRepo.findByName(roleName);
		if (user != null && role != null) {
			user.getRoles().add(role);
		}else {
			log.error("Usuário ou autorização não encontrados");
			throw new NameNotFoundException("Usuário ou autorização não encontrados");
		}
	}

	@Override
	public User getUser(String username) {
		return null;
	}

	@Override
	public List<User> getUsers() {
		return userRepo.findAll();
	}

}
