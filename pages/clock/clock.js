function setup() { 
  }
  
  function draw() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    noFill();
    
    let ox = windowWidth/2;
    let oy = windowHeight/2;
    
    let h1 = hour();
    let m1 = minute();
    let s1 = second();
    let ms = millis()%1000;
    let fr = frameRate();
    
    let s = s1;
    let m = m1+s/60;
    let h = h1+m/60;
    
    stroke(250);
    polar_line(ox, oy, 175, (2*PI*h/12 - PI/2));
    
    stroke(150);
    polar_line(ox, oy, 250, (2*PI*m/60 - PI/2));
    
    stroke(100);
    polar_line(ox, oy, 250, (2*PI*s/60 - PI/2));
  }
  
  function polar_line(ox, oy, r, a=0) { //center, radius and angle
    let x1 = ox + r*cos(a);
    let y1 = oy + r*sin(a);
    line(ox, oy, x1, y1);
  }
    