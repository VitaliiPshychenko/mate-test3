'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const articleList = document.getElementById('article-list')  
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
    
  })

  
  const searh = document.querySelector('input');

  searh.addEventListener('input', () => {
    
  })

});
