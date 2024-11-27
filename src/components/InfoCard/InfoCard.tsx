import classes from './infoCard.module.css'

function InfoCard() {
  return (
    <section className={classes.wrapDetail}>
        <div className={classes.wrapImage}>
            <img src="/adele.png" alt="adele" />
        </div>
        <div className={classes.wrapInfo}>
            <div className={classes.wrapBackground}>
                <img src="/hester-qiang-HZkGsjauVzs-unsplash.jpg" alt="background" />
            </div>
            <div className={classes.content}>
                <div className={classes.title}>Adele 21</div>
                <div className={classes.statistics}>
                    <div className={classes.theBestOf}>Lo mejor de Adele</div>
                    <div className={classes.followers}>321,123 seguidores</div>
                </div>
                <div className={classes.description}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque provident officia odit eligendi
                        mollitia distinctio illum odio quas. Doloribus assumenda quas eaque magnam, rem odit corrupti ipsa
                        tempore officiis voluptatem.
                    </p>
                </div>
                <div className={classes.wrapButtons}>
                    <button className={classes.play}>Reproducir</button>
                    <button className={classes.follow}>Seguir</button>
                    <img src="/icon/ellipsis.svg" alt="icon ellipsis" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoCard