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
  	var display = news[i].display;
    if (display == 0) {
    
    var card = createDiv();
    var link = news[i].link;
    // console.log(link);
    
    var title = createA(news[i].link, news[i].title, '_blank');
    var author = createElement('p', news[i].face + news[i].author);
    var date = createElement('p', news[i].date);
    var type = createElement('p', news[i].type);
    // var display = news[i].display;
    // console.log(display);
    // var img = createImg(news[i].image);
    
    var frame = select('#001');
  	frame.child(card);
    type.parent(card);
    title.parent(card);
    author.parent(card);
    date.parent(card);
    
    title.class('h5');
    date.class('small');
    card.class('card mb-3 p-4');
    
    // if (this.display = true) {
    // 	var img = createImg(news[i].image);
    // 	var imgcard = createA();
    //   console.log(news[i].image);
    // }
    } else if(display == 1) {
      var frame = select('#001');
    	var img = createImg(news[i].image);
    	var imgcard = createA(news[i].link, ' ', '_blank');
      var ovl = createDiv();
      ovl.parent(imgcard);
      ovl.class('card-img-overlay');
      img.parent(imgcard);
      img.class('card-img');
      imgcard.class('card mb-3');
      frame.child(imgcard);
      
    }
  	
  }
  


  
  
  // createp;
}

// function draw() {
//   // background(220);
// }