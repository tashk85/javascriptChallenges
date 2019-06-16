// Nathaniel has decided its time to run a marathon. He goes for a run each Saturday, and tracks how far he runs each time, His aim, to run further than the week before. Each time he manages to run further than the week before is called a ‘progress day’.

// Create a function that takes in an array of miles ran each Saturday, and returns Nathaniel’s total number of progress days.

// E.g.
// progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

function progressDays(arr) {
    let progress = 0;

    for (i in arr) {
        if (arr[i] > arr[i-1]) {
            progress += 1;
        }
    }

    console.log(progress);
}


progressDays([10, 11, 12, 9, 10]) // 3

progressDays([6, 5, 4, 3, 2, 9]) // 1

progressDays([9, 9]) // 0

progressDays([3, 4, 1, 2]) // 2