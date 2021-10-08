package com.project.comicbook.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.comicbook.model.UniverseModel;
import com.project.comicbook.repository.UniverseRepository;
import com.project.comicbook.resource.UniverseResource;

@Service
public class UniverseService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UniverseRepository universeRepository;

    public UniverseResource get(long id) {
	UniverseModel model = universeRepository.getById(id);
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
