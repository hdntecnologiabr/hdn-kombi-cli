package br.com.apidefault.api;

import java.net.URI;
import java.util.List;

import javax.naming.NameNotFoundException;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.apidefault.dto.RoleDTO;
import br.com.apidefault.dto.UserDTO;
import br.com.apidefault.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class UserResource {
	private final UserService userService;
	private final ModelMapper mapper;

	@GetMapping("/users")
	public ResponseEntity<List<UserDTO>> getUsers() {
		return ResponseEntity.ok().body(mapper.map(userService.getUsers(), new TypeToken<List<UserDTO>>(){}.getType()));
	}

	@PostMapping("/user/save")
	public ResponseEntity<UserDTO> saveUser(@RequestBody UserDTO userDTO) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
		return ResponseEntity.created(uri).body(mapper.map(userService.saveUser(userDTO), UserDTO.class));
	}

	@PostMapping("/role/save")
	public ResponseEntity<RoleDTO> saveRole(@RequestBody RoleDTO roleDTO) {
		URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/role/save").toUriString());
		return ResponseEntity.created(uri).body(mapper.map(userService.saveRole(roleDTO), RoleDTO.class));
	}

	@PostMapping("/role/addtouser")
	public ResponseEntity<RoleToUserForm> addRoleToUser(@RequestBody RoleToUserForm form) throws NameNotFoundException {
		userService.addRoleToUser(form.getUsername(), form.getRoleName());
		return ResponseEntity.ok().build();
	}

}

@Data
class RoleToUserForm {
	private String username;
	private String roleName;
}
