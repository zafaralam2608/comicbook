package com.project.comicbook.controller;

import com.project.comicbook.resource.ProfileResource;
import com.project.comicbook.service.ProfileService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/profiles")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ProfileController {

    private final ProfileService profileService;

    @GetMapping
    public List<ProfileResource> getProfiles() {
        return profileService.getAll();
    }
}
