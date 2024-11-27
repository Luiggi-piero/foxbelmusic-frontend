import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import classes from './navigationBar.module.css'

function NavigationBar() {

    const { user } = useAuth();

    return (
        <nav className={classes.wrapNavigation}>
            <div className={classes.logo}>
                <Link to='/'>
                    <img src="/foxbel-music@2x.png" alt="foxbel-music@2x.png" />
                </Link>
            </div>
            <div className={classes.navigation}>
                {
                    user && (
                        <div className={classes.sectionOne}>

                            <div className={classes.title}>
                                Mi Librería
                            </div>
                            <ul>
                                <li id="recientes" >Recientes</li>
                                <li id="artistas" >Artistas</li>
                                <li id="albums">Álbums</li>
                                <li id="canciones">
                                    <Link to='/favorites'>Canciones</Link>
                                </li>
                                <li id="estaciones">Estaciones</li>
                            </ul>
                        </div>
                    )
                }
                <div className={classes.sectionTwo}>
                    <div className={classes.title}>
                        Playlist
                    </div>
                    <ul>
                        <li id="metal" >Metal</li>
                        <li id="para-bailar">Para bailar</li>
                        <li id="rock-90">Rock 90s</li>
                        <li id="baladas">Baladas</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar