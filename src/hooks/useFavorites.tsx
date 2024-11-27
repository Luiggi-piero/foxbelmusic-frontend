import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getFavorites, saveFavorite } from "../services/musicService.ts";
import { Track } from "../models/Track.ts";
import { FavoriteTrack } from "../models/FavoriteTrack.ts";

interface FavoritesContextType {
    favorites: FavoriteTrack[] | null,
    addFavorite: (data: Track) => void,
    cleanFavorites: () => void,
    loadFavorites: () => void
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

interface FavoritesProviderProps {
    children: ReactNode
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {

    const [favorites, setFavorites] = useState<FavoriteTrack[] | null>(null);

    let favoritesDb: FavoriteTrack[] | null = null;

    useEffect(() => {
        loadFavorites()
    }, [])

    const loadFavorites = async () => {
        favoritesDb = await getFavorites();
        setFavorites(favoritesDb);
    }

    const addFavorite = async (data: Track) => {
        const favoriteTrack: FavoriteTrack = {
            title: data.title,
            artistName: data.artist.name,
            preview: data.preview,
            image: data.album.cover_medium
        }

        // Guarda en la base de datos
        const newTrack = await saveFavorite(favoriteTrack);

        // Actualiza el estado con el nuevo favorito
        setFavorites((prevFavorites) => {
            return prevFavorites ? [...prevFavorites, newTrack] : [newTrack];
        })
    }

    const cleanFavorites = () => {
        setFavorites(null);
    }

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite,
            cleanFavorites,
            loadFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )
};

export const useFavorites = (): FavoritesContextType => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites debe estar al interior de un FavoritesProvider')
    }
    return context;
}