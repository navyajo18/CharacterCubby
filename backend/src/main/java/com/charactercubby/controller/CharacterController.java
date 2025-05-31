package com.charactercubby.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.charactercubby.model.Character;
import com.charactercubby.service.CharacterService;

@RestController
@RequestMapping("/api/characters")
@CrossOrigin(origins = "*") // Let React access it
public class CharacterController {

    private final CharacterService service;

    public CharacterController(CharacterService service) {
        this.service = service;
    }

    @GetMapping
    public List<Character> getAllCharacters() {
        return service.getAllCharacters();
    }

    @PostMapping
    public Character addCharacter(@RequestBody Character character) {
        return service.addCharacter(character);
    }

    @DeleteMapping("/{id}")
    public void deleteCharacter(@PathVariable Long id) {
        service.deleteCharacter(id);
    }

}
