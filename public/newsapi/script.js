
// api key
let apiKey = "1765d53befd148d28a0ebe0ea8141341";
let source = "the-times-of-india";
// 
async function ayush() {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
  );
  let data = await response.json();
  let articles = data.articles;
  return articles;
}
ayush().then(function (articles) {
  console.log(articles);
  let contentBox = document.getElementById("add-content-over-here");
  let itemsAppendHtml = "";
  articles.forEach((element) => {
    let content = `
    
      <div class="news-card-box m-3">
          <div class="image-side">
              <img src="${element.urlToImage}" alt="" class="image-news">
          </div>
          <div class="content-side">
              <h3 class="news-headline">
              ${element.title}
              </h3>
          
              <p class="news-para">
              ${element.description}
              </p>
              <p>Published At: <span class="news-published-on">${element.publishedAt}</span></p>
              
              <p>Author : <span class="author">${element.author}</span></p>
              <p>
                  <a href="${element.url}" target="_blank">Read Full Article</a>
              </p>
          </div>
      </div>
    `;

    itemsAppendHtml += content;
  });
  contentBox.innerHTML=itemsAppendHtml;
  
  

  $("#add-content-over-here").owlCarousel({
    items:1,
    margin:20,
  })

});