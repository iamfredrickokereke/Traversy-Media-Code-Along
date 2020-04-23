function yugioh(num) {
    try {
        if (num.constructor == Number && num >=1) {
            let result = [];
            let i;
            for (i = 1; i <= num; i += 1) {
                result.push(
                    i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ? 'yu-gi-oh'
                    : i % 2 == 0 && i % 3 == 0 ? 'yu-gi'
                    : i % 2 == 0 && i % 5 == 0 ? 'yu-oh'
                    : i % 3 == 0 && i % 5 == 0 ? 'gi-oh'
                    : i % 2 == 0 ? 'yu'
                    : i % 3 == 0 ? 'gi'
                    : i % 5 == 0 ? 'oh'
                    : i)
            }
            return result;
        } else{
            return 'least argument should be 1. ' +num+ ' is less than that';
        }
    }
    catch (error) {
        return {
            'Error name': error.name,
            'Error Message': 'The entered argument is either not a number, undefined or a null value'
        }
    }
}

console.log(yugioh("2"));
 yugioh(100);
yugioh(33);