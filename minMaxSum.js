function minMaxSum(array) {
    var sum = array[0],
        min = array[0],
        max = array[0];
        
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
        if (min > array[i]) min = array[i];
        if (max < array[i]) max = array[i];
    }

    return [" min = "+ (sum - min) , " and max = " + (sum - max)];
}

//console.log(minMaxSum([1, 3, 5, 7, 9]));

document.getElementById("divResult").innerHTML = minMaxSum([1, 3, 5, 7, 9]);