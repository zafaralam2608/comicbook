package com.project.comicbook.service;

import com.project.comicbook.model.PhotoModel;
import com.project.comicbook.repository.PhotoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PhotoService {

    private final PhotoRepository photoRepository;

    public byte[] getContent(long id) {
        PhotoModel model = photoRepository.getOne(id);
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
