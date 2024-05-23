if(screen.width < 501  && screen.width > 400){
    let titles = document.getElementsByClassName("title")
    let snippets = document.getElementsByClassName("snippet")

    for (let i = 0; i <= titles.length; i++) {
        titles[i].size = "33";
        snippets[i].cols = "53"
        }
    
}
if(screen.width < 400){
    let titles = document.getElementsByClassName("title")
    let snippets = document.getElementsByClassName("snippet")

    for (let i = 0; i <= titles.length; i++) {
        titles[i].size = "27";
        snippets[i].cols = "46 "
        }
    
}
let n = "latest";
change(n);
let n1 =   document.querySelector("#nav1") 
let n2 =   document.querySelector("#nav2") 
let n3 =   document.querySelector("#nav3")  
let n4 =   document.querySelector("#nav4")  
let n5 =   document.querySelector("#nav5")  
let n6 =   document.querySelector("#nav6")  
let n7 =   document.querySelector("#nav7")  
let n8 =   document.querySelector("#nav8") 

n1.onclick = function(){change(n1.innerText)}
n2.onclick = function(){change(n2.innerText)}
n3.onclick = function(){change(n3.innerText)}
n4.onclick = function(){change(n4.innerText)}
n5.onclick = function(){change(n5.innerText)}
n6.onclick = function(){change(n6.innerText)}
n7.onclick = function(){change(n7.innerText)}
n8.onclick = function(){change(n8.innerText)}
console.log( document.querySelector("#menu").children.length)

async function change(n){
if( document.querySelector("#menu").children.length == 0){console.log("true")}
else{
let newscards = document.getElementsByClassName("news-card")
let i = 0 
while(i <newscards.length){
    newscards[i].remove();   
}
}
//window.location.reload();
//let n = latest
//history.go(0);
//window.onload
console.log(n)
let url = `https://google-news13.p.rapidapi.com/${n}?lr=en-US`;
console.log(url)
let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c22f896bb0mshb57af38d34e1ecap1337a5jsn1c1869ebc40a',
		'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
	}
};
//try{
  let response = await fetch(url, options);
  let result = await response.json();
let news = result.items;
console.log(news)
//console.log(news[0].length)
//console.log(news[0].images.thumbnailProxied.toString())
document.getElementById("clicked").innerText = n;

if(news == undefined){document.getElementById("undefined").innerText = "It Seems that it has too many clicked just contact us on below channels and only saying 'Too many Requests'"}
else{
    let i = 0;
while(i < news.length){
let newscard = document.createElement("div");
let left = document.createElement("div");
let img = document.createElement("img");
let right = document.createElement("div");
let title  = document.createElement("div");
let time = document.createElement("div");
let snippet = document.createElement("div");
let link = document.createElement("a");
let publisher = document.createElement("div");


newscard.setAttribute("class", "news-card");
//newscard.setAttribute("id", "newscard");
left.setAttribute("class", "left");
//right.setAttribute("id", "right");
//left.setAttribute("id", "left");
img.setAttribute("class", "card-image");
//img.setAttribute('src' , '' );
right.setAttribute("class", "right");
title.setAttribute("class", "title");
time.setAttribute("class", "time");
snippet.setAttribute("class", "snippet");
link.setAttribute("class", "link-url");
publisher.setAttribute("class", "publisher");

left.appendChild(img)
newscard.appendChild(left);
right.appendChild(title);
right.appendChild(time);
right.appendChild(snippet);
link.appendChild(publisher);
right.appendChild(link);
newscard.appendChild(right)
document.getElementById("menu").appendChild(newscard);

    i++;
}

let titles = document.getElementsByClassName("title")
let snippets = document.getElementsByClassName("snippet")
//let publishs = document.getElementsByClassName("publish")
let publishers = document.getElementsByClassName("publisher")
let imagess = document.getElementsByClassName("card-image")
let times = document.getElementsByClassName("time")
let urls = document.getElementsByClassName("link-url")


for(let i = 0; i <= news.length; i++){

     titles[i].innerText += news[i].title

     snippets[i].innerText += news[i].snippet
     //publishs[i].value += news[i].publisher

    
if(news[i].images == undefined){imagess[i].src += "https://t3.ftcdn.net/jpg/01/26/39/54/360_F_126395469_FnlY3ZgaAZaosjmSbkgA3I5sS3UXN78T.jpg"}
else{imagess[i].src += news[i].images.thumbnailProxied.toString()}
//console.log(news[i].images.thumbnailProxied.toString())
   times[i].innerText += new Date(Number(news[i].timestamp))
   publishers[i].innerText  += "Read more at " + news[i].publisher

   urls[i].href += news[i].newsUrl
}
}
//} catch {console.error(error)}
//console.log(result.items)

//console.log(news[0])
//console.log(news[0].images)
//typeof(news[0].images)

// I think i am doing mistake in the html where i need to first empty the html end then start over this
// for this i need to delete html tags through js

}

 

