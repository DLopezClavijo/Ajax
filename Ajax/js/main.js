var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var ourRequest =new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        renderHtml(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

//añadir html al div del index.html
function renderHtml(data){
    var htmlString ="";

    for(i = 0; i<data.length;i++){
        htmlString +="<p>" + data[i].name + " su especie en ingles es " + data[i].species + " que le gusta comer .</p> "

        for (y = 0;y < data[i].foods.likes.length;y++){

            if(y==0){
                htmlString+=data[i].foods.likes[y];
            }else{
                htmlString+= " y " +data[i].foods.likes[y];
            }
            
        }

        htmlString += ' and dislikes ';

        for (y = 0; y < data[i].foods.dislikes.length; y++) {

            if (y == 0) {
                 htmlString += data[i].foods.dislikes[y];
      } else {
        htmlString += " and " + data[i].foods.dislikes[y];
      }
    }
       
        htmlString+='</p>';
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlString)
}
/*
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
    
    for (y = 0; y < data[i].foods.likes.length; y++) {
      if (y == 0) {
        htmlString += data[i].foods.likes[y];
      } else {
        htmlString += " and " + data[i].foods.likes[y];
      }
    }

    htmlString += ' and dislikes ';

    for (y = 0; y < data[i].foods.dislikes.length; y++) {
      if (y == 0) {
        htmlString += data[i].foods.dislikes[y];
      } else {
        htmlString += " and " + data[i].foods.dislikes[y];
      }
    }

    htmlString += '.</p>';

  }

  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
*/