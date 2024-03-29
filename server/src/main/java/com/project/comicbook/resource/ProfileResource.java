package com.project.comicbook.resource;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileResource {

    private String name;

    private String alias;

    private String base;

    private String debutIn;

    private String debutOn;

    private Long universeId;

    private LinksResource links;

}
