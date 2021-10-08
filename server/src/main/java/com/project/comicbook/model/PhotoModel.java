package com.project.comicbook.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "PHOTO")
@Data
public class PhotoModel {

    @SequenceGenerator(name = "PHOTO_ID_GEN", initialValue = 100000, allocationSize = 1)
    @Id
    @Column(name = "ID")
    private Long id;

    @Lob
    @Column(name = "CONTENT")
    private byte[] content;

    @CreationTimestamp
    @Column(name = "CREATED")
    private Date created;

    @UpdateTimestamp
    @Column(name = "UPDATED")
    private Date updated;
}
