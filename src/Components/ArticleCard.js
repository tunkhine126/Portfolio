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
      <div id={'project-num-' + a.id} className="article-card" onMouseEnter={this.expandArticleText} onMouseLeave={this.collapseArticleText}>
        <div className="face1">
          <img src={a.img_url} alt="Article Pic" className="article-image" />
        </div>
        <div className="face2">
          <div className='padding-container'>
            <a href={a.project_url}><h4>{a.name}</h4></a>
            <div className='article-text'>
              <p>{a.description}</p>
              {/* {a.credentials && <div className="credentials">{a.credentials}</div>}
              {p.github_frontend && <a href={p.github_frontend}>GitHub frontend</a>}
              {p.github_frontend && p.github_backend && <span>&nbsp; | &nbsp;</span>}
              {p.github_backend && <a href={p.github_backend}>GitHub backend</a>} */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleCard;
