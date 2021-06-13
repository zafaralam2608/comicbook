package com.project.comicbook.service;

import com.project.comicbook.model.PhotoModel;
import com.project.comicbook.resource.PhotoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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
}
