package com.project.comicbook.repository;

import com.project.comicbook.model.UniverseModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniverseRepository extends JpaRepository<UniverseModel, Long> {
}
