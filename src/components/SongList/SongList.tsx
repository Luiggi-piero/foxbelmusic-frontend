import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.tsx'
import { Track } from '../../models/Track.ts'
import SongPreview from '../SongPreview/SongPreview.tsx'
import classes from './songList.module.css'
import { useFavorites } from '../../hooks/useFavorites.tsx'
import { FavoriteTrack } from '../../models/FavoriteTrack.ts'

type Props = {
    favorites?: FavoriteTrack[],
    tracks?: Track[]
}

function SongList({ tracks, favorites }: Props) {

    const [showNotification, setShowNotification] = useState(false);
    const { user } = useAuth();
    const { addFavorite } = useFavorites();

    const addToFavorites = async (track: Track) => {
        await addFavorite(track);

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false)
        }, 3000);
    }

    return (
        <>
            <p className={`${classes.notification} ${showNotification ? classes.show : ''}`}>Canción agregada a favoritos!</p>
            <div className={classes.wrapGeneral}>
                <div className={classes.wrap}>
                    {
                        tracks && (
                            tracks.map(item => (
                                <div key={item.id} className={classes.cardd}>
                                    <div className={classes.imgBx}>
                                        <img src={item.album.cover_medium} alt={item.title} />
                                        <div className={classes.action}>
                                            <li>
                                                <SongPreview previewUrl={item.preview} />
                                                <span>Reproducir</span>
                                            </li>
                                        </div>
                                        <div className={classes.more}>
                                            <img src="/icon/ellipsisVertical.svg" alt="ellipsisVertical icon" />
                                            {
                                                user && (
                                                    <ul className={classes.menu}>
                                                        <li>
                                                            <button onClick={() => addToFavorites(item)}>Agregar a favoritos</button>
                                                        </li>
                                                    </ul>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <div className={classes.productName}>
                                            {item.title}
                                        </div>
                                        <div className={classes.author}>
                                            {item.artist.name}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }

                    {
                        favorites && (
                            favorites.map(item => (
                                <div key={item.id} className={classes.cardd}>
                                    <div className={classes.imgBx}>
                                        <img src={item.image} alt={item.title} />
                                        <div className={classes.action}>
                                            <li>
                                                <SongPreview previewUrl={item.preview} />
                                                <span>Reproducir</span>
                                            </li>
                                        </div>
                                    </div>
                                    <div className={classes.content}>
                                        <div className={classes.productName}>
                                            {item.title}
                                        </div>
                                        <div className={classes.author}>
                                            {item.artistName}
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default SongList