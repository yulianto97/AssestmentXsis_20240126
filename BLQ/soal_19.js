// 19. Tentukan apakah kalimat ini adalah Pangram* atau bukan
// “Sphinx of black quartz, judge my vow”
// “Brawny gods just flocked up to quiz and vex him”
// “Check back tomorrow; I will see if the book has arrived.”
// *Pangram adalah kata atau kalimat yang mengandung setiap abjad alphabet, 
// contohnya “A quick brown fox jumps over the lazy dog”

function checkPangram(kalimat) {
    let s = "";
    for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        let char = String.fromCharCode(i);
        if (kalimat.toLowerCase().indexOf(char) !== -1) {
            s += char;
        }
    }
    if (s.length === 26) {
        console.log(kalimat," = Pangram");
    } else {
        console.log(kalimat," = Bukan Pangram");
    }
}

checkPangram("Sphinx of black quartz, judge my vow");
checkPangram("Brawny gods just flocked up to quiz and vex him");
checkPangram("Check back tomorrow; I will see if the book has arrived.");