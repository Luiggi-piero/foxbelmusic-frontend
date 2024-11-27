import SongList from "../../components/SongList/SongList";
import Title from "../../components/Title/Title"
import { useFavorites } from "../../hooks/useFavorites"

function FavoritesPage() {

    const { favorites } = useFavorites();

    return (
        <section>
            <Title title="Favoritos" margin="20px 0 30px 0" />
            {
                favorites && (favorites?.length > 0)
                    ? (
                        <SongList favorites={favorites} />
                    )
                    : <p>Sin favoritos por mostrar</p>
            }
        </section>
    )
}

export default FavoritesPage