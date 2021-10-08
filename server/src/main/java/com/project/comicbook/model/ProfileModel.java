package com.project.comicbook.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "PROFILE")
@Data
public class ProfileModel {
    @SequenceGenerator(name = "PROFILE_ID_GEN", initialValue = 10000, allocationSize = 1)
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PROFILE_ID_GEN")
    private Long id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "ALIAS", nullable = false)
    private String alias = "";

    @Column(name = "BASE")
    private String base;

    @Column(name = "DEBUT_IN")
    private String debutIn;

    @Column(name = "DEBUT_ON")
    private String debutOn;

    @ManyToOne(optional = false)
    private UniverseModel universe;

    @CreationTimestamp
    @Column(name = "CREATED")
    private Date created;

    @UpdateTimestamp
    @Column(name = "UPDATED")
    private Date updated;
}
