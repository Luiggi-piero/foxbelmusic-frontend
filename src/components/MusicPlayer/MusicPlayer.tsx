import classes from './musicPlayer.module.css'

function MusicPlayer() {
  return (
    <div className={classes.container}>
        <img className={classes.miniature} src="/adele.png" alt="miniature" />
        <div className={classes.content}>
            <div className={classes.detail}>
                <p>Canción</p>
                <span>Artista - Albúm</span>
            </div>
            <div className={classes.controlsPlay}>
                <img src="/icon/back.svg" alt="back" />
                <img src="/icon/play-footer.svg" alt="play" />
                <img src="/icon/next.svg" alt="next" />
            </div>
            <div className={classes.controlsAudio}>
                <img src="/icon/audio-range.svg" alt="range" />
                <img src="/icon/audio.svg" alt="audio" />
            </div>
        </div>
    </div>
  )
}

export default MusicPlayer