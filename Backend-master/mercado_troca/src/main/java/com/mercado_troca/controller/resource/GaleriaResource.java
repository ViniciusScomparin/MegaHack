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

import com.mercado_troca.model.beans.Galeria;
import com.mercado_troca.model.repository.GaleriaRepository;

@RestController
@RequestMapping("/galeria")
public class GaleriaResource {
	@Autowired
	private GaleriaRepository galeriaRepo;
	

	@GetMapping("/listar")
	public List<Galeria> todosAsGalerias(){
		return galeriaRepo.findAll();
	}
	@PostMapping("/criar")
	public Galeria create(@RequestBody Galeria galeria ){
	   return galeriaRepo.save(galeria);
	}
	@DeleteMapping(path ={"/deletar/{id}"})
	public ResponseEntity <?> delete(@PathVariable long id) {
	   return galeriaRepo.findById(id)
	           .map(record -> {
	        	   galeriaRepo.deleteById(id);
	               return ResponseEntity.ok().build();
	           }).orElse(ResponseEntity.notFound().build());
	}
	@PutMapping(value = "/editar/{id}")
	public ResponseEntity<Galeria> update(@PathVariable("id") long id, @RequestBody Galeria galeria) {
		return galeriaRepo.findById(id).map(record -> {
			record.setNomeDoProduto(galeria.getNomeDoProduto());
			record.setCategoria(galeria.getCategoria());
			record.setEstadoDoProduto(galeria.getEstadoDoProduto());
			record.setDetalhesDoProduto(galeria.getDetalhesDoProduto());
			record.setPreco(galeria.getPreco());
			record.setPesoDoProduto(galeria.getPesoDoProduto());
			record.setCep(galeria.getCep());
			Galeria updated = galeriaRepo.save(record);
			return ResponseEntity.ok().body(updated);
		}).orElse(ResponseEntity.notFound().build());
	}
}