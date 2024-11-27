import classes from './songPreview.module.css'

type Props = {
    previewUrl: string
}

function SongPreview({ previewUrl }: Props) {

    const audio = new Audio(previewUrl);

    const playAudio = () => {
        audio.play();
    };

    const pauseAudio = () => {
        audio.pause();
    };

    return (
        <div className={classes.container}>
            <button onClick={playAudio} className={classes.btnPlay}>
                <img src="/icon/play.svg" alt="icon play" />
            </button>
            <button onClick={pauseAudio} className={classes.btnPause}>
                <img src="/icon/pause.svg" alt="icon puse" />
            </button>
        </div>
    )
}

export default SongPreview