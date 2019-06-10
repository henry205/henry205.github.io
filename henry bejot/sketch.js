// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBn4P-RpNYOvpXPzI-J30YBEpDj6HjY1Nw",
    authDomain: "fitfth-tasier.firebaseapp.com",
    databaseURL: "https://fitfth-tasier.firebaseio.com",
    projectId: "fitfth-tasier",
    storageBucket: "fitfth-tasier.appspot.com",
    messagingSenderId: "585392307039",
    appId: "1:585392307039:web:87f9ef5208b62b30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let x
  let y
  let x2
  let y2
  let x3
  let y3
  let direction_h
  let direction_v
  let lives
  let damage
  let attack
  let level
  let bigger
  let time
  let foot=document.getElementById("foot")
  let scoreboard={ }
  let database=firebase.database()
  
function setup() {
  createCanvas(windowWidth,windowHeight);
  s = width/1031
  //alert(width)
  x=178
  y=690
  x2=67
  y2=670
  x3=[576, 476, 676,250,350,450]
  y3=[685, 567, 645,360,480,366]
  direction_h=[1,1,1,1,-1,-1,-1]
  direction_v=[1,1,1,1,-1,-1,-1]
  lives= 10
  damage= 3
  attack = 3
  level= 1
  bigger= 70
  time= 120
}

function draw() {
	
  if (touches.length == 0)   {

	controls for main character
	
	else { 
		178= touches[0].x
		690= touches[0].y
}

	
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 8
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 8
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 8
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 8
  }
  }
	
	
  if (time > 0){
  background(220,230,240);
  circle(x,y,17*s)
  fill(234,246,34)
  
  circle(x2,y2,50*s)
  fill(254,134,85)
   
   x2 = x2 + 10*direction_h[0]

  y2 = y2 + 10*direction_v[0]
  
  if(y2 > height || y2 < 0){
   direction_v[0]=direction_v[0] * -1
  } 
  if(x2 > width || x2 < 0){
   direction_h[0]=direction_h[0] * -1
  }

  if (dist(y,x,y2,x2 ) < 17*s + 50*s) {
	lives =lives + 1
  }
  for (i=0; i<attack; i=i+1) {
     circle(x3[i]*s,y3[i],bigger*s)
    fill(234,123,78)

    x3[i] = x3[i] + 10*direction_h[i+1]

    y3[i] = y3[i] + 10*direction_v[i+1]

    if(y3[i] > height || y3[i] < 0){
     direction_v[i+1]=direction_v[i+1] * -1
    } 
    if(x3[i]*s > width || x3[i]*s < 0){
     direction_h[i+1]=direction_h[i+1] * -1
    }

    if (dist(x,y,x3[i]*s,y3[i] ) < 17*s + bigger*s) {
      lives =lives - 1
  }
  }
    textSize(30)
    text("lives: " + lives,40,40)
    text("time: " + time.toFixed(0), 80,90)
  
    if(lives>20&& level == 1){
      attack=attack+3
      level = 2
      x3.push.apply(x3, [250,350,450])
      y3.push.apply(y3, [360,480,366])
      direction_v.push.apply(direction_v,[-1,-1,-1])
      direction_h.push.apply(direction_h,[-1,-1,-1])
    }
  
  if(lives>30&& level == 2){
    bigger=bigger+70
    level = 3
  }
(time = time-0.05)
  
}
   else {
    foot.innerHTML = "Name? <input id=great><button onclick='restart()'>Restart</button><button onclick=generate_alltime_leaderboard()'>All-time leaderboard</button>"
    noLoop()
}
  
}
function restart() { 
        let great = document.getElementById("great")
		name =great.value 
		database.ref(name).set(lives)
		if (name != "") { 
			scoreboard[name] = lives
			
		}
        alert("Scoreboard:"+JSON.stringify(scoreboard,null,1)) 
		time = 120
		lives = 10
        attack = 3
        level= 1
		loop()
		foot.innerHTML = ""
		generate_leaderboard()
		function generate_alltime_leaderboard() {
			let alltime_leaderboard = { }
			database.ref().orderByValue().limitToLast(3).on("value", function(snapshot) {
				snapshot.forEach(function(data) {
				alltime_leaderboard[data.key] = data.val()
				});
		    	});
			if (Object.values(alltime_leaderboard).length > 0) {
			  alert("All-time leaderboard: " + JSON.stringify(alltime_leaderboard,null,1))
		    	}
		}

		generate_alltime_leaderboard()
		                                                                                                                                                                                                                                                                                                                         
}
		
		
function generate_leaderboard() {
		  scores = Object.values(scoreboard)
		  names = Object.keys(scoreboard)
  
		  if (scores.length >= ___) {
		    let leaderboard = { }
		    for (i=0; i<___; i=i+1) {
		      max = Math.max(...scores)
		      index = scores.indexOf(max)
		      leaderboard[names[index]] = max
		      names.splice(index,1)
		      scores.splice(index,1)
		    }
	   alert("Leaderboard: " + JSON.stringify(leaderboard,null,1))
	    }
	  }
		
