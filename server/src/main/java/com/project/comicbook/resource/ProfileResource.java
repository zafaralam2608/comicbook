package com.project.comicbook.resource;

import java.util.Date;

import com.project.comicbook.model.Links;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileResource {

    private Long id;

    private String name;

    private String alias;

    private String base;

    private String debutIn;

    private String debutOn;

    private UniverseResource universe;

    private Links links;

    private Date created;

    private Date updated;

}
