var data;
// var link;

function preload() {
	data = loadJSON("data.json");
}

function setup() {
  noCanvas();
  // createElement('h1', "酥酥每日精选");
  // var di = createDiv();
  // di.parent('container');
  
  
  var news = data.feeds;
  var subtitle = select('#subtitle');
  subtitle.html(data.description);
  
  for (var i = 0; i < news.length; i ++) {
  	// createElement('h2', news[i].title);
    var card = createDiv();
    var link = news[i].link;
    console.log(link);
    
    
    
    title = createA(news[i].link, news[i].title, '_blank');
    var author = createElement('p', '😉' + news[i].author);
    var date = createElement('p', news[i].date);
    var type = createElement('p', news[i].type);
    // var dvd = createElement('hr');
        // createElement('br');
    // author.
      var frame = select('#001');
  frame.child(card);
    type.parent(card);
    title.parent(card);
    title.class('h5');
    // console.log(title);
    author.parent(card);
    date.parent(card);
    date.class('small');
    
    // dvd.parent(div0);
    card.class('card mb-3 p-4');
  }
  


  
  
  // createp;
}

// function draw() {
//   // background(220);
// }