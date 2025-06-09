import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../../utils/api";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() =>{
       fetchPostById(id).then((data) => {
           setArticle(data);
       });
  }, [id])

  if(!article)
  {
     return <div> Article not found ......</div>
  }

  return(
     <div className= "article">
        <h2> {article.title }</h2>
        <div className ="banner">
            {
                article.featuredImage && (
                    <img src={ article.featuredImage.url } alt= { article.featuredImage.alt} 
                    style = {{ width: '100%', marginBottom: '1rem'}}
                    />
                )
            }
        </div>
        <p> 
            <small>
                By { article.author.name } | { new Date(article.date).toLocaleDateString() }
                <br />
            </small>
        </p>
        <div style={{ margin : '1rem 0'}}>
            <strong> Category: </strong> { article.category?.name || 'uncategorized'}
            <br />
            <strong> Tags: </strong> {article.tags?.map(tag => tag.name).join(' |')}

        </div>
        <div className="content">
            <p> {article.content}</p>
        </div>
       

     </div>
  )

}