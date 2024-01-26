// 12.	Input: 1 2 1 3 4 7 1 1 5 6 1 8
// Output: 1 1 1 1 1 2 3 4 5 6 7 8
// *selesaikan dengan TIDAK menggunakan fungsi Sort

function sortAsc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    console.log(arr);
}

const deret = [1, 2, 1, 3, 4, 7, 1, 1, 5, 6, 1, 8];
sortAsc(deret);