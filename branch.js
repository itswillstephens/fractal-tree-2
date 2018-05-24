function Branch(begin, end, show) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.show = function() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y)
    }

    this.branchA = function() {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(0.523599);
        dir.mult(0.8);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;
    }

    this.branchB = function() {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-0.523599);
        dir.mult(0.8);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;
    }
}