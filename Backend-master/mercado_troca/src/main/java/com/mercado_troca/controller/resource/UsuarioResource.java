package com.mercado_troca.controller.resource;

import java.net.URI;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.mercado_troca.model.beans.Usuario;
import com.mercado_troca.model.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuario")
public class UsuarioResource {

	@Autowired
	private UsuarioRepository usuarioRepo;

	@GetMapping("/lista")
	public List<Usuario> todosOsUsuarios() {
		return usuarioRepo.findAll();
	}

	@PostMapping("/cadastro")
	public ResponseEntity<Usuario> salvar(@RequestBody Usuario usuario, HttpServletResponse response) {
		try {
			Usuario usuarioCriado = usuarioRepo.save(usuario);
			URI uri = ServletUriComponentsBuilder.fromCurrentServletMapping().path("/{id}")
					.buildAndExpand(usuarioCriado.getId()).toUri();
			response.setHeader("Location", uri.toASCIIString());
			return ResponseEntity.created(uri).body(usuarioCriado);
		} catch (Exception e) {
			return ResponseEntity.notFound().build();
		}

	}
	@PutMapping(value ="/alterarsenha/{id}")
	public ResponseEntity<Usuario> updateSenha(@PathVariable("id") long id, @RequestBody Usuario usuario) {
		return usuarioRepo.findById(id).map(record -> {
			record.setSenha(usuario.getSenha());
			Usuario updated = usuarioRepo.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}

	@PutMapping(value = "/editar/{id}")
	public ResponseEntity<Usuario> update(@PathVariable("id") long id, @RequestBody Usuario usuario) {
		return usuarioRepo.findById(id).map(record -> {
			record.setNome(usuario.getNome());
			record.setEmail(usuario.getEmail());
			record.setDataDeNacimento(usuario.getDataDeNacimento());
			record.setCpf(usuario.getCpf());
			record.setTelefone(usuario.getTelefone());
			record.setEndereco(usuario.getEndereco());
			record.setNumero(usuario.getNumero());
			record.setComplemento(usuario.getComplemento());
			record.setBairro(usuario.getBairro());
			record.setEstado(usuario.getEstado());
			record.setCidade(usuario.getCidade());
			Usuario updated = usuarioRepo.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping(path = { "/deletar/{id}" })
	public ResponseEntity<?> delete(@PathVariable long id) {
		return usuarioRepo.findById(id).map(record -> {
			usuarioRepo.deleteById(id);
			return ResponseEntity.ok().build();
		}).orElse(ResponseEntity.notFound().build());
	}

}
