package com.project.comicbook.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.comicbook.model.Universe;
import com.project.comicbook.repository.UniverseRepository;
import com.project.comicbook.resource.UniverseResource;

@Service
public class UniverseService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UniverseRepository universeRepository;

    public UniverseResource get(long id) {
	Universe model = universeRepository.getById(id);
	return convertModelToResource(model);
    }

    public List<UniverseResource> getAll() {
	List<Universe> models = universeRepository.findAll();
	return convertModelToResourceMultiple(models);
    }

    public UniverseResource saveUniverse(UniverseResource resource) {
	Universe model = convertResourceToModel(resource);
	return convertModelToResource(universeRepository.save(model));
    }

    public void deleteUniverse(Long id) {
	universeRepository.deleteById(id);
    }

    private UniverseResource convertModelToResource(Universe model) {
	return modelMapper.map(model, UniverseResource.class);
    }

    private List<UniverseResource> convertModelToResourceMultiple(List<Universe> models) {
	return models.stream().map(this::convertModelToResource).collect(Collectors.toList());
    }

    private Universe convertResourceToModel(UniverseResource resource) {
	return modelMapper.map(resource, Universe.class);
    }
}
