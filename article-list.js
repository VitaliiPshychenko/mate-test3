'use strict';

class ArticleList {
  constructor(container) {
    this.articles = []
    this.container = container;  
  }

  addArticle(article) {
    this.articles.push(article);
    console.log(this.articles)
  }

  removeArticle(article) {
    article.remove();
  }

  render() {
    this.articles.forEach(article => {
      const articleItem = document.createElement('article');
      const articleTitle = document.createElement('h2');
      const articleAuthor = document.createElement('p');
      const articleText = document.createElement('p');
      const removeItem = document.createElement('button')
      articleTitle.textContent = article.title;
      articleAuthor.textContent = article.author;
      articleText.textContent = article.text;
      removeItem.innerHTML = '&times;'
      articleItem.append(articleTitle, articleAuthor, articleText, removeItem)
      this.container.append(articleItem);
    })
  }
} 




