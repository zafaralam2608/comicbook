package com.project.comicbook.controller;

import com.project.comicbook.resource.ProfileResource;
import com.project.comicbook.service.ProfileService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/profiles")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ProfileResource> getProfiles() {
        return profileService.getAll();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ProfileResource getProfile(@PathVariable Long id) {
        return profileService.get(id);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ProfileResource createProfile(@RequestBody ProfileResource resource) {
        return profileService.saveProfile(resource);
    }
}
