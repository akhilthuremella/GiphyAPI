fetch("https://api.giphy.com/v1/gifs/random?api_key=zdCWUlEr5OvgOQNAZuEemQm12qSdFyvl&tag=cricket+players&rating=g")
.then(function(response){
    return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
    var gifURL = jsonData.data.images.original.url;
    console.log(gifURL);
    var gifIMG = document.createElement("img");
    gifIMG.setAttribute("src",gifURL);
    document.body.appendChild(gifIMG);
    var giftitle = jsonData.data.title;
    var gifcaption = document.createElement("h3");
    gifcaption.innerHTML = giftitle;
    document.body.appendChild(gifcaption);
})