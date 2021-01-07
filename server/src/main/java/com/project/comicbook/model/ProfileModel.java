package com.project.comicbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Table(name = "PROFILE")
@Data
public class ProfileModel {
    @Id
    @Column(name = "ID")
    @GeneratedValue
    private Long id;

    @Column(name = "CALLSIGN")
    private String callsign;

    @Column(name = "NAME")
    private String name;

    @Column(name = "ALIAS")
    private String alias = "";

    @CreationTimestamp
    @Column(name = "CREATED")
    private Date created;

    @UpdateTimestamp
    @Column(name = "UPDATED")
    private Date updated;
}
