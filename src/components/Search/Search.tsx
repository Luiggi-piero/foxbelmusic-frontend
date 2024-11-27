import { useEffect, useState } from 'react'
import classes from './search.module.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

type Props = {
  searchRoute?: string,
  defaultRoute?: string,
  placeholder?: string
}

function Search({ searchRoute = '?search=', defaultRoute = '/tracks', placeholder = 'Buscar' }: Props) {

  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const { user, exit } = useAuth();

  useEffect(() => {
    setTerm(searchTerm ?? '')
  }, [searchTerm])


  const search = async () => {
    term ? navigate(`${searchRoute}${term}`) : navigate(defaultRoute);
  }

  const logout = () => {
    exit();
  }

  return (
    <div className={classes.wrapSearchInner}>
      <div className={classes.search}>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => setTerm(e.target.value)}
          value={term}
          onKeyUp={e => e.key === 'Enter' && search()}
        />
        <button onClick={search} title='Buscar'>
          <img src="/icon/search.svg" alt="icon search" />
        </button>
      </div>
      <div className={classes.user}>
        <img src="/icon/user.svg" alt="icon user" />
        {
          user
            ? (
              <div className={classes.name}>
                <span>{user.name}</span>
                <div className={classes.menu}>
                  <Link to='/profile'>Perfil</Link>
                  <a onClick={logout}>Salir</a>
                </div>
              </div>
            )
            : <Link to='/login' className={classes.login}>Iniciar</Link>
        }
      </div>
    </div>
  )
}

export default Search