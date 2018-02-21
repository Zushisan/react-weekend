function search(array, item) {
    let min = 0;
    let max = array.length - 1;

    while (true) {
        const middleIndex = Math.floor((min + max) / 2.0);
        const currentItem = array[middleIndex];

        if (currentItem === item) {
            // Found it
            return middleIndex;
        } else if (currentItem < item) {
            // Look at the right side
            min = middleIndex + 1;
        } else {
            // Look at the left side
            max = middleIndex - 1;
        }

        if (min > max) {
            return null;
        }
    }
}

console.log(search([1, 2, 3, 4, 5], 6));