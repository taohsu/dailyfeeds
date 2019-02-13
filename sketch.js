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
  for (var i = 0; i < news.length; i ++) {
  	// createElement('h2', news[i].title);
    var div0 = createDiv();
    var link = news[i].link;
    console.log(link);
    title = createA(news[i].link, news[i].title);
    var author = createElement('h6', '😉' + news[i].author);
    var date = createElement('h6', news[i].date);
    // var dvd = createElement('hr');
        // createElement('br');
    // author.
      var frame = select('#001');
  frame.child(div0);
    title.parent(div0);
    title.class('h5');
    // console.log(title);
    author.parent(div0);
    date.parent(div0);
    // dvd.parent(div0);
    div0.class('card mb-3 p-4');
  }
  


  
  
  // createp;
}

// function draw() {
//   // background(220);
// }