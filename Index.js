/* Реализовать класс RangeValidator
У него будет только два свойства, два числа:
from, to

От и до. Оба числа. "До" не может быть меньше, чем "от".

Задание:
1. Реализовать геттеры и сеттеры для обоих свойств
2. Реализовать геттер range, который будет возвращать массив всех целых чисел в заданном этими from-to диапазоне
3. Реализовать метод validate, который будет принимать число и проверять, входит ли оно в указанный диапазон чисел, если нет - кидать ошибку. */


class RangeValidator {
    
    /**
     * 
     * @param {Number} from 
     * @param {Number} to 
     */

    constructor(from, to){
    
        if (typeof from !== 'number' || typeof to !== 'number') {
            throw new TypeError('Parameter has unappropriate type');
        } else if (from === to) {
            console.log('Cannot build a range of two equal values');
        }

        this._from = from;

        if (to < from) {
            throw new RangeError('Second value cannot be less than first');
        }
        
        this._to = to;
    }
    
    set from(firstValue) {
       this._from = firstValue;
    }

    get from() {
       return this._from;
    }

    set to(secondValue){
       this._to = secondValue;
    }

    get to() {
       return this._to;
    }

    get range (){
        
        let arrRange = [];
        for (let i = this._from; i <= this._to; i++) {
          arrRange.push(i);
        }
        return arrRange;
    } 
    
    validate(valueof) {

        let arrRange = [];
        for (let i = this._from; i <= this._to; i++) {
          arrRange.push(i);
        }

        if (arrRange.includes(valueof)) {
            console.log('Range has this value');
        } else {
            throw new Error('Range has not this value');
        }
    }
}

