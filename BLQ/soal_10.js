// 10.	  
//     Input                      	Output
// Susilo Bambang Yudhoyono    S***o B***g Y***o
// Rani Tiara                  R***i T***a

function sensorNama(input) {
    const inSplit = input.split(" ");
    let hasil = "";

    for(let i = 0; i < inSplit.length; i++) {
        if (inSplit[i].length > 1) {
            hasil += inSplit[i].charAt(0) + "***" + inSplit[i].charAt(inSplit[i].length - 1) + " ";
        } else {
            hasil += inSplit[i] + " ";
        }
    }

    return hasil;
}

console.log(sensorNama("Susilo Bambang Yudhoyono"));
console.log(sensorNama("Rani Tiara"));
