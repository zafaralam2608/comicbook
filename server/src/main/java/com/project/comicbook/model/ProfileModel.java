package com.project.comicbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.util.Date;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "PROFILE")
@Data
public class ProfileModel {
    @SequenceGenerator(name="ID_GEN", initialValue = 100000)
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ID_GEN")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ALIAS")
    private String alias = "";

    @Column(name = "BASE")
    private String base;

    @Column(name = "DEBUT_IN")
    private String debutIn;

    @Column(name = "DEBUT_ON")
    private String debutOn;

    @CreationTimestamp
    @Column(name = "CREATED")
    private Date created;

    @UpdateTimestamp
    @Column(name = "UPDATED")
    private Date updated;
}
