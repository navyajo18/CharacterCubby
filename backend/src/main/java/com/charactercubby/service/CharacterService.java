package com.charactercubby.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.charactercubby.model.Character;
import com.charactercubby.repository.CharacterRepository;

@Service
public class CharacterService {

    private final CharacterRepository repository;

    public CharacterService(CharacterRepository repository) {
        this.repository = repository;
    }

    public List<Character> getAllCharacters() {
        return repository.findAll();
    }

    public Character addCharacter(Character character) {
        return repository.save(character);
    }

    public void deleteCharacter(Long id) {
        repository.deleteById(id);
    }

}
