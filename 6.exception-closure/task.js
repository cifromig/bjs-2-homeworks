function parseCount(numbers) {
 
    if (isNaN(Number.parseInt(numbers)))  {
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(numbers);
} 


function validateCount (numbers) {
    try {
        if (isNaN(parseCount(numbers))) throw new Error("Невалидное значение")
        return parseCount(numbers)
    }
    catch (error) { 
           return error
        }
}

console.log (validateCount("asd"))


class Triangle {
    constructor (storona1, storona2, storona3) {
            if(storona1 >= (storona2 + storona3) || storona2 >= (storona1 + storona3) || storona3 >= (storona2 + storona1)) {
                throw new Error("Треугольник с такими сторонами не существует");
            }   
            this.storona1 = storona1
            this.storona2 = storona2
            this.storona3 = storona3
        }
    
//Вычисляет периметр треугольника
    getPerimeter() {    
        // try {
            const Perimeter = this.storona1 + this.storona2 + this.storona3
            return Perimeter
        }

// Вычисляет площадь треугольника
    getArea () {
        // try {
            const p = (this.storona1 + this.storona2 + this.storona3)/2
            const Area = (p*(p-this.storona1)*(p-this.storona2)*(p-this.storona3))**0.5
            return (Math.round (Area*1000))/1000
    }

}

function getTriangle (storona1, storona2, storona3) {
    try {
        let triangle = new Triangle (storona1, storona2, storona3) 
          //if (triangle3 = new Triangle (storona1, storona2, storona3)) throw new Error("Ошибка! Треугольник не существует")
        console.log (triangle)
        return triangle
        }
        catch (error) { 
    //     // .. код, который в этом случае выполнится
        return { 
            getArea: () => 'Ошибка! Треугольник не существует', 
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        }
    }      
}
