package com.project.comicbook.controller;

import com.project.comicbook.service.PhotoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/photo/{id}")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class PhotoController {

    private final PhotoService photoService;

    @GetMapping(produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getContent(@PathVariable Long id) {
        return photoService.getContent(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public void saveContent(@PathVariable Long id, @RequestBody byte[] content) {
        photoService.saveContent(id, content);
    }

    @DeleteMapping
    public void deleteContent(@PathVariable Long id) {
        photoService.deleteContent(id);
    }
}
