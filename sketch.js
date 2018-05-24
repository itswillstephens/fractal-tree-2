let angle = 0;
let tree = [];
let leaves = [];
let count = 0;

//
function setup() {
  createCanvas(innerWidth, innerHeight - 50);
  let a = createVector(width/2, height);
  let b = createVector(width/2, height - 100);
  let root = new Branch(a, b);
  tree[0] = root;
  
}

function mousePressed() {

  for(let i = tree.length -1; i >= 0; i--) {
    
    if(!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    } 
    tree[i].finished = true;
  }
  count++;

    if(count === 7 || count === 9 || count === 11) {
      for(let i = 0; i < tree.length; i++) {
        if(!tree[i].finished) {
          let leaf = tree[i].end.copy();
          leaves.push(leaf);
        }
      }
    }

}

//go through tree array, draw each item
function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (let i = 0; i < leaves.length; i++) {
    
    let randoGreen = Math.ceil(Math.random() * 255);

    fill(0, randoGreen, 0, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0,20);
    leaves[i].x += random(0,2);
  }

}