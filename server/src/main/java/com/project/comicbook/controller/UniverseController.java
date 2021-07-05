package com.project.comicbook.controller;

import com.project.comicbook.resource.UniverseResource;
import com.project.comicbook.service.UniverseService;

import java.util.List;

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
@RequestMapping("/universe")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UniverseController {

    private final UniverseService universeService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<UniverseResource> getUniverses() {
        return universeService.getAll();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public UniverseResource getUniverse(@PathVariable Long id) {
        return universeService.get(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public UniverseResource createUniverse(@RequestBody UniverseResource resource) {
        return universeService.saveUniverse(resource);
    }

    @DeleteMapping(value = "/{id}")
    public void deleteUniverse(@PathVariable Long id) {
        universeService.deleteUniverse(id);
    }
}
