import axios from 'axios';
import { FavoriteTrack } from '../models/FavoriteTrack';

export const searchMusic = async (searchTerm: string) => {
    const { data } = await axios.get(`/api/v1/music/search/${searchTerm}`);
    return data.data;
}

export const searchDefault = async () => {
    const { data } = await axios.get('/api/v1/music/search/adele');
    return data.data;
}

export const saveFavorite = async (track: FavoriteTrack) => {
    const { data } = await axios.post('/api/v1/music', track);
    console.log('save favorite ', data);
    return data;
}

export const getFavorites = async () => {
    const { data } = await axios.get(`/api/v1/music/favorites`);
    return data;
}