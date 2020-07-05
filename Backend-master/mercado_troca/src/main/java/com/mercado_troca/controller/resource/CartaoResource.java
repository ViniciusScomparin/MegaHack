package com.mercado_troca.controller.resource;

import java.util.List;

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

import com.mercado_troca.model.beans.Cartao;
import com.mercado_troca.model.repository.CartaoRepository;

@RestController
@RequestMapping("/cartao")
public class CartaoResource {

	@Autowired
	private CartaoRepository cartaoRepo;

	@GetMapping("/lista")
	public List<Cartao> todosOsUsuarios() {
		return cartaoRepo.findAll();
	}

	@PostMapping("/cadastro")
	public Cartao create(@RequestBody Cartao cartao) {
		return cartaoRepo.save(cartao);
	}

	@PutMapping(value = "/edita/{id}")
	public ResponseEntity<Cartao> update(@PathVariable("id") long id, @RequestBody Cartao cartao) {
		return cartaoRepo.findById(id).map(record -> {
			record.setNumeroCartao(cartao.getNumeroCartao());
			record.setValidade(cartao.getValidade());
			record.setCvv(cartao.getCvv());
			record.setNomeTitular(cartao.getNomeTitular());
			record.setCpfCnpj(cartao.getCpfCnpj());
			record.setTelefone(cartao.getTelefone());
			
			Cartao updated = cartaoRepo.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}
	@DeleteMapping(path ={"/deleta/{id}"})
	public ResponseEntity <?> delete(@PathVariable long id) {
	   return cartaoRepo.findById(id)
	           .map(record -> {
	        	   cartaoRepo.deleteById(id);
	               return ResponseEntity.ok().build();
	           }).orElse(ResponseEntity.notFound().build());
	}
}
