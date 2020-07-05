package com.mercado_troca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mercado_troca.model.beans.Cartao;

@Repository
public interface CartaoRepository extends JpaRepository<Cartao, Long>{

}
