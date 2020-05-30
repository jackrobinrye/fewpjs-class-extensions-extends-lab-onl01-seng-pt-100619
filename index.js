// Your code here
class Polygon {

    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let perimeter = 0
        this.sides.forEach(side => {
            perimeter += side
        });
        return perimeter
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides === 3) {
            const sortedsides = this.sides.sort()
            const onetwo = sortedsides[0] + sortedsides[1]
            const three = sortedsides[2]
            if(onetwo > three){ 
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.sides[0] === this.sides[1] && this.sides[2] === this.sides[3] && this.sides[0] === this.sides[3]) {
            return true
        }
        else {
            return false
        }
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }
}