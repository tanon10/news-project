import { useArticles } from "../hooks"
import { LoadingSpinnerSmall } from '../global-components/loading/spinner-small';
import { Latest, LastList } from "../components";

export const TheLast = () => {
  const { isLoading } = useArticles();

  if (isLoading) {
    return <LoadingSpinnerSmall />
  }
  return (
    <>
        <section className = "banner">
            <div className = "banner-main-content">
                <h2>RECIBE LAS ÚLTIMAS NOTICIAS DEL MUNDO</h2>
                <h3>Portal de noticias líder en el mundo</h3>

                <button>
                    <a href = "#">Saber más</a>
                </button>

                <div className = "current-news-head">
                    <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                    <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                    <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel fashingbauer</span></h3>

                    <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span></h3>
                </div>
            </div>
            
            <Latest/>
            
        </section>
        <hr/>

        <LastList/>
    </>
  )
}
