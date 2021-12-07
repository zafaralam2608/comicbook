package com.project.comicbook.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Links {

    @Id
    private Long id;

    private String official = "";

    private String wikipedia = "";

    private String instagram = "";

    private String twitter = "";

    private String facebook = "";
}
