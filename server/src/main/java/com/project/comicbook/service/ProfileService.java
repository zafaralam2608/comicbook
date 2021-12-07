package com.project.comicbook.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.comicbook.model.Profile;
import com.project.comicbook.repository.ProfileRepository;
import com.project.comicbook.resource.ProfileResource;

@Service
public class ProfileService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProfileRepository profileRepository;

    public ProfileResource get(long id) {
	Profile model = profileRepository.getById(id);
	return convertModelToResource(model);
    }

    public List<ProfileResource> getAll() {
	List<Profile> models = profileRepository.findAll();
	return convertModelToResourceMultiple(models);
    }

    public ProfileResource saveProfile(ProfileResource resource) {
	Profile model = convertResourceToModel(resource);
	return convertModelToResource(profileRepository.save(model));
    }

    public void deleteProfile(Long id) {
	profileRepository.deleteById(id);
    }

    private ProfileResource convertModelToResource(Profile model) {
	return modelMapper.map(model, ProfileResource.class);
    }

    private List<ProfileResource> convertModelToResourceMultiple(List<Profile> models) {
	return models.stream().map(this::convertModelToResource).collect(Collectors.toList());
    }

    private Profile convertResourceToModel(ProfileResource resource) {
	return modelMapper.map(resource, Profile.class);
    }
}
