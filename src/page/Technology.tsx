import { useTecnology } from '../hooks';
import { Articles } from '../interfaces';
import { LoadingSpinnerSmall } from '../global-components/loading/spinner-small';


export const Technology = () => {

  const { isLoading, technology } = useTecnology();

  if (isLoading) {
    return <LoadingSpinnerSmall />
  }
  
  return (
    <>
      {
        technology.map(({title, urlToImage, publishedAt, author, description, content, url}:Articles) =>{
          return (
            <div key={title}>
            <img src={urlToImage} alt={title} />
            <span>{publishedAt}</span>
            <span>{author}</span>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>{content}</h4>
          </div>

          )
        })        
      }
    </>
  )
}
