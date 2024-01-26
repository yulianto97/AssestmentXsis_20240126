// 11.	

// Input: Afrika
// Output:
// ***a***
// ***k***
// ***i***
// ***r***
// ***f***
// ***A***

// Input: Jeruk
// Output:
// **k**
// **u**
// **r**
// **e**
// **J** 

function cetakPola(input) {
    input = input.trim();
    const length = input.length;
    const tengah = Math.floor(length / 2);

    for (let a = length; a > 0; a--) {
        let b = 0;
        while (tengah > b) {
            process.stdout.write("*");
            b++;
        }
        process.stdout.write(input.substring(a - 1, a));
        b = 0;
        while (tengah > b) {
            process.stdout.write("*");
            b++;
        }
        console.log();
    }
}

cetakPola("Afrika");
cetakPola("Jeruk");
