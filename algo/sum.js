function arrayContainsSum(array, sum) {
    let i = 0;
    let ii = array.length - 1;

    while (i <= ii) {
        const element1 = array[i];
        const element2 = array[ii];
        const currentSum = element1 + element2;

        if (currentSum === sum) {
            return true;
        } else if (currentSum > sum) {
            ii--;
        } else {
            i++;
        }
    }

    return false;
}