package com.mercado_troca.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mercado_troca.model.beans.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

}
