package com.project.comicbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "PHOTO")
@Data
public class PhotoModel {

    @Id
    @Column(name = "ID")
    private Long id;

    @Lob
    @Column(name = "CONTENT")
    private byte[] content;
}
