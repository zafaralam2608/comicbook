package com.project.comicbook.service;

import com.project.comicbook.model.UniverseModel;
import com.project.comicbook.repository.UniverseRepository;
import com.project.comicbook.resource.UniverseResource;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class UniverseService {

    private final ModelMapper modelMapper;

    private final UniverseRepository universeRepository;

    public UniverseResource get(long id) {
        UniverseModel model = universeRepository.getOne(id);
        return convertModelToResource(model);
    }

    public List<UniverseResource> getAll() {
        List<UniverseModel> models = universeRepository.findAll();
        return convertModelToResourceMultiple(models);
    }

    public UniverseResource saveUniverse(UniverseResource resource) {
        UniverseModel model = convertResourceToModel(resource);
        return convertModelToResource(universeRepository.save(model));
    }

    public void deleteUniverse(Long id) {
        universeRepository.deleteById(id);
    }

    private UniverseResource convertModelToResource(UniverseModel model) {
        return modelMapper.map(model, UniverseResource.class);
    }

    private List<UniverseResource> convertModelToResourceMultiple(List<UniverseModel> models) {
        return models.stream().map(this::convertModelToResource).collect(Collectors.toList());
    }

    private UniverseModel convertResourceToModel(UniverseResource resource) {
        return modelMapper.map(resource, UniverseModel.class);
    }
}
