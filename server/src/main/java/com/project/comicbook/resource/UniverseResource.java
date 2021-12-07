package com.project.comicbook.resource;

import java.util.Date;

import com.project.comicbook.model.Links;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UniverseResource {

    private Long id;

    private String name;

    private Links links;

    private Date created;

    private Date updated;
}
