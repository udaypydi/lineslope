const slopeMapper = {};

function findLine(point1, point2) {
    if (point1.y === point2.y && point1.x === point2.x) {
        console.log('points are same cannot draw a line for', `(${point1.x},${point1.y})`, `(${point2.x},${point2.y})`);
    } else if (point1.x === point2.x) {
        console.log('Its a vertical line.', `(${point1.x},${point1.y})`, `(${point2.x},${point2.y})`);
    }else {
        const m = (point2.y - point1.y) / (point2.x - point1.x)
        const b = (point1.y - m * point1.x);    
        if (slopeMapper[`${m},${b}`]) {
            slopeMapper[`${m},${b}`] ++;
        } else {
            slopeMapper[`${m},${b}`] = 1;
        }
    }

    
}

// edit these points for new test cases

const points = [{ x: 0, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 3 }, { x: 2, y: 2 }];

for (let i = 0 ; i < points.length; i ++) {
    for (let j = 1; j < points.length; j ++) {
        findLine(points[i], points[j]);
    }
}
/**
 * Loop through the keys to check if the line passes more than two points.
 */

Object.keys(slopeMapper).forEach(key => {
    if (slopeMapper[key] > 2) {
        const [m, b] = key.split(',');
        console.log(`(${m}, ${b})`);
    }
})
