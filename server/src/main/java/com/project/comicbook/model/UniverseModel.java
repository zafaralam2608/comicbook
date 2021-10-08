package com.project.comicbook.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "UNIVERSE")
@Data
public class UniverseModel {

    @SequenceGenerator(name = "UNIVERSE_ID_GEN", initialValue = 100, allocationSize = 1)
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "UNIVERSE_ID_GEN")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @CreationTimestamp
    @Column(name = "CREATED")
    private Date created;

    @UpdateTimestamp
    @Column(name = "UPDATED")
    private Date updated;
}
