import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const getCharacters = () => axios.get(`${API_BASE}/characters`);

export const createCharacter = (character) =>
  axios.post(`${API_BASE}/characters`, character);

export const deleteCharacter = (id) =>
  axios.delete(`${API_BASE}/characters/${id}`);

