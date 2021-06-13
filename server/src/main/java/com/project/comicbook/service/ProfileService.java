package com.project.comicbook.service;

import com.project.comicbook.model.ProfileModel;
import com.project.comicbook.repository.ProfileRepository;
import com.project.comicbook.resource.ProfileResource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ProfileService {

    private final ModelMapper modelMapper;

    private final ProfileRepository profileRepository;

    public ProfileResource get(long id) {
        ProfileModel model = profileRepository.getOne(id);
        return convertModelToResource(model);
    }

    public List<ProfileResource> getAll() {
        List<ProfileModel> models = profileRepository.findAll();
        return convertModelToResourceMultiple(models);
    }

    public ProfileResource saveProfile(ProfileResource resource) {
        ProfileModel model = convertResourceToModel(resource);
        return convertModelToResource(profileRepository.save(model));
    }

    private ProfileResource convertModelToResource(ProfileModel model) {
        return modelMapper.map(model, ProfileResource.class);
    }

    private List<ProfileResource> convertModelToResourceMultiple(List<ProfileModel> models) {
        return models.stream().map(this::convertModelToResource).collect(Collectors.toList());
    }

    private ProfileModel convertResourceToModel(ProfileResource resource) {
        return modelMapper.map(resource, ProfileModel.class);
    }
}
