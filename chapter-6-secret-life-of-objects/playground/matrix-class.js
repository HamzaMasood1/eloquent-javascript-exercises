class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
            console.log(`NEXT y=${y}`)
            for (let x = 0; x < width; x++) {
                console.log(`y=${y}`)
                console.log(`x=${x}`)
                console.log("y * width + x=" + (y * width + x))
                //this formula creates a 2*2 grid that was given by the parameters x and y. it creates each row.
                this.content[y * width + x] = element(x, y);
                console.log(this.content)
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

    Matrix.prototype[Symbol.iterator] = function () {
    return new MatrixIterator(this);
};

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return { done: true };

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}

let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
    //console.log(x, y, value);
}
// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1


class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let symmMatrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(symmMatrix.get(2, 3));
  // → 3,2