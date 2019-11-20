import React from 'react';
import ArticleCard from './ArticleCard'
import ArticlesData from '../Data/ArticlesData'



const Articles = () => {
  return (
    <div id="articles" className="articles">
      <h2>RECENT ARTICLES</h2>

      <div className="articles-container">
        {ArticlesData.map(article => <ArticleCard article={article} key={article.id} />)}
        {/* {ArticlesData.map(article => <ArticleCard article={article} key={article.id} />)} */}
      </div>
    </div>
  )
}

export default Articles;