import React, { useState, useEffect} from "react";
import { fetchNews } from "./api";
import NewsCard from "./NewsCard";

function NewsList(){
    const [article, setarticle] = useState([])
    const name = "David"

    useEffect(() => {
      fetchNews('sports') 
        .then(fetchedArticles => {
          setarticle(fetchedArticles);
        });
    }, []);

    return (
        <>
        <div className="hero">
            {article.map((articles, i) => (
              <NewsCard 
                key={i}
                title={articles.title}
                description={articles.description}
                image={articles.image}
            />
            ))}
        </div>
        
        </>
    );
}

export default NewsList;