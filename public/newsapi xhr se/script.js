

// api key
let apiKey = "1765d53befd148d28a0ebe0ea8141341";
let source = "abc-news";

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

xhr.onprogress = function () {
  document.querySelector(".loader-wrapper").style.display = "block";
};

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let htmlappend = "";
    let contentBox = document.getElementById("add-content-over-here");
    articles.forEach(function (element) {
      let content = `
                                <div class="col-12">
                                    <div class="news-card-box">
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
                                </div>`;
      htmlappend += content;
    });
    contentBox.innerHTML = htmlappend;
    document.querySelector(".loader-wrapper").style.display = "none";
  } else console.error("there is some error");
};

xhr.send();
