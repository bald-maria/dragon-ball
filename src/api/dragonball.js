import axios from 'axios'

const BASE_URL = 'https://dragonball-api.com/api'

// Récupère tous les personnages avec pagination
export const getPersonnages = (page = 1) =>
  axios.get(`${BASE_URL}/characters?page=${page}&limit=12`).then(res => res.data)

// Récupère un seul personnage par ID
export const getPersonnage = (id) =>
  axios.get(`${BASE_URL}/characters/${id}`).then(res => res.data)

// Récupère toutes les planètes
export const getPlanetes = (page = 1) =>
  axios.get(`${BASE_URL}/planets?page=${page}&limit=12`).then(res => res.data)

// Récupère une planète par ID
export const getPlanete = (id) =>
  axios.get(`${BASE_URL}/planets/${id}`).then(res => res.data)