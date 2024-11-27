import './App.css'
import AppRoutes from './AppRoutes'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import NavigationBar from './components/NavigationBar/NavigationBar'

function App() {

  return (
    <div className="wrapContent">
      <NavigationBar />
      <main className="wrapMain">
        <div className="wrapPages">
          <AppRoutes />
        </div>
      </main>
      <MusicPlayer />
    </div>
  )
}

export default App
