let _ = {
    /*
      clamp: (min, max, number) => {
        let _clampedNumber = 0;
        if (number > min && number < max) {
          return _clampedNumber = number;
        }
        if (number < min) {
          return _clampedNumber = min;
        }
        if (max < number ) {
          return _clampedNumber = max;
        }
      }
      */
    clamp(number, min, max) {
      let _clampedNumber = 0;
      if (number > min && number < max) {
        return (_clampedNumber = number);
      }
      if (number < min) {
        return (_clampedNumber = min);
      }
      if (max < number) {
        return (_clampedNumber = max);
      }
    },
   inRange(num, start, end) {
     if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = end;
        end = start;
        start = temp;
      }
  
      let isInRange = () => {
        if (start <= num && num < end) {
        return true;
       }
       else return false;
      }  
      return isInRange();
    },
    words(string) {
        let extractedWords = [];
        let tempString = '';
        while (string.includes(' ')) {
            let indexToSlice = string.indexOf(' ');
            tempString = string.slice(0, indexToSlice);
            extractedWords.push(tempString);
            string = string.slice(indexToSlice + 1).trimStart(); //la nueva cadena
        }
        if (string.length > 0) {
            extractedWords.push(string);
        }
        return extractedWords;
    },
    pad(string, newLength) {
        while (string.length < newLength) {
            const pad = ' ';
          if ((newLength - string.length) > 1) {
            string = pad + string + pad;
          }
          else string = string + pad;
        }
        return string;
    },
    has(object, key) {
        if (object[key]) {
            return true;
        }
        if (object[key] != true) {
            return false;
        }
    },
    invert(object) {
    const invertedObject = {};
    for (const key in object) {
        const value = object[key];
        invertedObject[value] = key;
    }
    return object = invertedObject;
    },

    findKey(object, predicateFunction) {
        for (const key in object) {
            const value = object[key];
            if (predicateFunction(value)) {
                return key;
            }
        }
        return undefined;
    },
    drop(array, dropNumber) {
        if (dropNumber === undefined) {
        dropNumber = 1;
        };
        return array.slice(dropNumber)
    },
    dropWhile(array, predicateFunction) {
      let newArray = [];
      let i = 0;
      while (predicateFunction(array[i], i, array) === true) {
          i++;
          newArray = array.slice(i);
      }
      return newArray;
    },
    chunk(array, size) {
      let newArray = [];
      let tempArray = [];
      if (size != true) {
        size = 1;
      }
      while (array.length >= size) {
        tempArray = array.slice(0, size + 1);
        newArray.push(tempArray);
        array.splice(0, size + 1);
      };
      array.push(newArray);
      return newArray;
    }
    
}

console.log(_.chunk([1 ,2, 3, 4, 5, 6, 7, 8, 9], 2));

  // Do not write or modify code below this line.
  module.exports = _;
  