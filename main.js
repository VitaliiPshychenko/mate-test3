'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('article-list')
  const articleList = new ArticleList(container);
  let listOfArticles;

  function getXhrResponse(link, callback) {
      const xhr = new XMLHttpRequest();
  
      xhr.open('GET', link);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
          callback(xhr.response);
      });
      
      xhr.send();
  }
  
  getXhrResponse('http://my-json-server.typicode.com/mate-academy/literary-blog/articles', (response) => {
    listOfArticles = response;
    getArticleList()
  })

  function getArticleList() {
    listOfArticles.forEach(article => {
      const newArticle = new Article(article.title, article.author, article.text);
      articleList.addArticle(newArticle);
    })
    articleList.render();
  }
});
