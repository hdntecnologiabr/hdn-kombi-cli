package br.com.apidefault.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UserDTO {
	private Long id;
	
	private String name;
	
	private String username;
	
	private String password;
	
	private List<RoleDTO> roles = new ArrayList<>();
}
