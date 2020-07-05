package com.mercado_troca.model.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Galeria{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nomeDoProduto;
	private String categoria;
	private String estadoDoProduto;
	private String detalhesDoProduto;
	private double preco;
	private double pesoDoProduto;
	private int cep;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNomeDoProduto() {
		return nomeDoProduto;
	}
	public void setNomeDoProduto(String nomeDoProduto) {
		this.nomeDoProduto = nomeDoProduto;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public String getEstadoDoProduto() {
		return estadoDoProduto;
	}
	public void setEstadoDoProduto(String estadoDoProduto) {
		this.estadoDoProduto = estadoDoProduto;
	}
	public String getDetalhesDoProduto() {
		return detalhesDoProduto;
	}
	public void setDetalhesDoProduto(String detalhesDoProduto) {
		this.detalhesDoProduto = detalhesDoProduto;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}
	public double getPesoDoProduto() {
		return pesoDoProduto;
	}
	public void setPesoDoProduto(double pesoDoProduto) {
		this.pesoDoProduto = pesoDoProduto;
	}
	public int getCep() {
		return cep;
	}
	public void setCep(int cep) {
		this.cep = cep;
	}

}
