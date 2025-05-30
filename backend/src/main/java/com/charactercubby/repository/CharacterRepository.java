package com.charactercubby.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.charactercubby.model.Character;

public interface CharacterRepository extends JpaRepository<Character, Long> {
    // No custom methods needed yet
}
