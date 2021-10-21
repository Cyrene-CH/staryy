var number = 5000;
var size = 7;
var ss = 2;
var opacity = 15;
var ani = true;
var time = 0;

function setup() {
	createCanvas(600, 300);
	noStroke();
	background(32, 68, 148);
}

function draw() {

	df(300, 500, 1)
	df(300, 500, 1.2)
	star1(450, 50, 0.5)
	star2(200, 300, 0.8)
	star3(130, 50, 0.5)
	star4(350, 80, 0.6)
	star5(30, 200, 0.4)
	star6(180, 140, 0.3)
	star7(480, 250, 0.4)
	// star8(320,180,0.3)
	fill(255, 8);
	textSize(13);
	textFont("Georgia");
	text('INSPIRED BY <STARRY NIGHT>', 330, 180);

}


function df(x, y, sca) {
	sky1(x, y, sca)
	sky2(x, y, sca)


}

function sky1(x, y, sca) {
	push()
	fill(3, 10, 74, 15);
	scale(sca)
	translate(x, y)
	rotate(time);
	if (ani) number = 1000 - frameCount / 30;

	if (frameCount < 500) {
		var goldenAngle = PI * (3.0 - sqrt(5));

		for (var i = -10; i < number; i++) {
			translate(1, i * ss);
			rotate(goldenAngle);
			ellipse(0, 0, size);
		}
		time += 0.001;

	}
	pop()
}

function sky2(x, y, sca) {
	push()
	fill(130, 200, 217, 15);
	translate(x, y)
	scale(sca)
	rotate(time);
	if (ani) number = 1000 - frameCount / 30;
	if (frameCount < 500) {
		var goldenAngle = PI * (3.0 - sqrt(5));
		for (var i = -10; i < number; i++) {
			translate(1, i * ss);
			rotate(goldenAngle);
			ellipse(0, 0, size, size);
		}
		time += 0.001;
	}
	pop()
}

function star1(x, y, sca) {
	push()
	fill(252, 198, 0, 20);

	translate(x, y)
	scale(sca)
	rotate(time);
	if (ani) number = frameCount * 10;
	var goldenAngle = PI * (3.0 - sqrt(5));
	for (var i = 10; i < number; i++) {
		if (frameCount < 500) {
			translate(1, i * ss);
			rotate(goldenAngle);
			ellipse(0, 0, size);
		}
	}
	time += 0.001;
	pop()
}

function star2(x, y, sca) {
	push()
	fill(255, 253, 209, 30);
	translate(x, y)
	scale(sca)
	rotate(time);
	if (ani) number = frameCount;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 150; i++) {
		if (frameCount < 500) {
			translate(1, i * ss / 1.5);
			rotate(goldenAngle);
			ellipse(0, 0, size / 1.3);
		}
	}
	time += 0.001;
pop()
}

function star3(x, y, sca) {
	push()
	fill(252, 156, 0, 30);
	translate(x, y)
	scale(sca)
	rotate(time);
	if (ani) number = frameCount;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 100; i++) {
		if (frameCount < 500) {
			translate(1, i * ss / 1);
			rotate(goldenAngle);
			ellipse(0, 0, size / 1.3);
		}

	}
	time += 0.001;
	pop()


}

function star4(x, y, sca) {
	push()
	fill(255, 253, 209, 30);
	translate(x, y)
	scale(sca)
	rotate(-time);
	if (ani) number = frameCount;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 80; i++) {
		if (frameCount < 500) {
			translate(1, i * ss / 1.5);
			rotate(goldenAngle);
			ellipse(0, 0, size / 1.3);
		}

	}
	time += 0.001;



	pop()


}

function star5(x, y, sca) {
	push()
	fill(252, 198, 0, 30);
	translate(x, y)
	scale(sca)
	rotate(-time);
	if (ani) number = frameCount;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 80; i++) {
		if (frameCount < 500) {
			translate(1, i * ss / 1.5);
			rotate(goldenAngle);
			ellipse(0, 0, size / 1.3);
		}

	}
	time += 0.001;



	pop()


}

function star6(x, y, sca) {
	push()
	fill(255, 222, 130, 30);
	translate(x, y)
	scale(sca)
	rotate(-time);
	if (ani) number = frameCount;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 140; i++) {
		if (frameCount < 500) {
			translate(1, i * ss);
			rotate(goldenAngle);
			ellipse(0, 0, size);
		}



	}
	time += 0.001;



	pop()


}

function star7(x, y, sca) {
	push()
	fill(252, 156, 0, 30);
	translate(x, y)
	scale(sca)
	rotate(time);
	if (ani) number = frameCount / 3;

	var goldenAngle = PI * (3.0 - sqrt(5));

	for (var i = 10; i < 70; i++) {
		if (frameCount < 500) {
			translate(1, i * ss / 1);
			rotate(goldenAngle);
			ellipse(0, 0, size / 1);
		}

	}
	time += 0.001;
	pop()
}

// function star8(x,y,sca){
//   push()
//    fill(255, 251, 5,20); 
//   translate(x,y)   
//   scale(sca)
//   rotate (-time);           
//   if (ani) number = frameCount;   

//     var goldenAngle = PI * (3.0 - sqrt(5));       

//   for (var i =10; i < 80; i++) {
//     if (frameCount<200){
//    translate(1, i * ss);                
//     rotate(goldenAngle);                       
//     ellipse(0, 0, size*2,size);	
//  }

//   }
// time += 0.001; 



//   pop()


// }