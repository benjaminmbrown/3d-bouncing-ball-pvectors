 var position;
 var velocity;
 var diameter;

function setup() {
  createCanvas(300, 300, WEBGL);
  background(255);
  position = createVector(100,100,100);
  velocity = createVector(2.5,2,12);
  diameter = 16;
}

function draw() {
	background(255);

	position.add(velocity);
	console.log("POS", position);
	if((position.x>width-diameter) || (position.x <0 + diameter)){
		velocity.x = velocity.x * -1;
	}

	if((position.y>height - diameter) || (position.y <0 + diameter)){
		velocity.y = velocity.y * -1;
	}

	if((position.z>300 - diameter) || (position.z <0 + diameter)){
		velocity.z = velocity.z * -1;
	}

	translate(position.x, position.y, position.z)
	sphere(diameter);




	

}

