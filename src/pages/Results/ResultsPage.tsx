import { useSearchParams } from "react-router-dom"
import InfoCard from "../../components/InfoCard/InfoCard"
import Search from "../../components/Search/Search"
import SongList from "../../components/SongList/SongList"
import classes from './resultsPage.module.css'
import { useEffect, useState } from 'react';
import { searchDefault, searchMusic } from '../../services/musicService.ts';
import { useSearch } from "../../hooks/useSearch.tsx"

function ResultsPage() {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const [tracks, setTracks] = useState([]);
  const { isValid, valid, invalid } = useSearch();

  useEffect(() => {
    loadResults();

    if (searchTerm === "" || searchTerm === null) {
      invalid()
    } else {
      valid()
    }
  }, [searchTerm]);

  const loadResults = async () => {
    const results = searchTerm ? await searchMusic(searchTerm) : await searchDefault();
    setTracks(results);
  }


  return (
    <>
      <Search />
      {
        !isValid && <InfoCard />
      }
      <p className={classes.resultsTitle}>Resultados</p>
      <SongList tracks={tracks} />
    </>
  )
}

export default ResultsPage