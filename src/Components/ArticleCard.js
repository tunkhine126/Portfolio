import React, { Component } from 'react'


class ArticleCard extends Component {

  expandArticleText = () => {
    const card = document.getElementById(`Article-num-${this.props.article.id}`);
    card.style.height = card.scrollHeight + 'px';
  }

  collapseArticleText = () => {
    const card = document.getElementById(`Article-num-${this.props.article.id}`);
    card.style.height = null;
  }

  render() {
    const a = this.props.article;

    return (
      <div id={'Article-num-' + a.id} className="article-card" onMouseEnter={this.expandArticleText} onMouseLeave={this.collapseArticleText}>
        <div className="face1">
          <img src={a.img_url} alt="Article Pic" className="article-image" />
        </div>
        <div className="face2">
          <div className='padding-container'>
            <a href={a.url} target="_blank" rel="noopener noreferrer"><h5>{a.title}</h5></a>
            <div className='article-text'>
              <p><b>{a.date}&nbsp;| {a.length}</b></p>
              <p>{a.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard;
