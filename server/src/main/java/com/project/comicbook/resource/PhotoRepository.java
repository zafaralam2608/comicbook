package com.project.comicbook.resource;

import com.project.comicbook.model.PhotoModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<PhotoModel, Long> {

    byte[] getContentById(long id);

}
