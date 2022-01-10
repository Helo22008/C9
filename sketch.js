var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
}

function draw() {
  background('purple');

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 1.7;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 1.7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 1.7;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 1.7;
  }

  drawSprites();
}




