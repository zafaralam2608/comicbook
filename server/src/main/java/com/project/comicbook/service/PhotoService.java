package com.project.comicbook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.comicbook.model.PhotoModel;
import com.project.comicbook.repository.PhotoRepository;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public byte[] getContent(long id) {
	PhotoModel model = photoRepository.getById(id);
	return model.getContent();
    }

    public void saveContent(long id, byte[] content) {
	PhotoModel model = new PhotoModel();
	model.setId(id);
	model.setContent(content);
	photoRepository.save(model);
    }

    public void deleteContent(Long id) {
	photoRepository.deleteById(id);
    }
}
