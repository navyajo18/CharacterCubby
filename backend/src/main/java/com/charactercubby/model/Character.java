package com.charactercubby.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // age, hobbies, job

    private String name;
    private String archetype;
    private String alignment;

    
    // private String traits ---> became all of these

    private int empathy;
    private int impulsiveness;
    private int resilience;
    private int logic;
    private int curiosity;
    private int creativity;
    private int humor;
    private int assertiveness;
    private int agreeableness;
    private int loyalty;
    private int ambition;

}
