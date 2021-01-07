package com.minosoyoung.iduslikeserver.domain.entity;

import javax.persistence.*;


@Entity
@Table(name = "USERS")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String user_name;

    @Column(nullable = false)
    private int password;

    @Column(nullable = false)
    private int phone;
}
