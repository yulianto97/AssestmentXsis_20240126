// 13. Berapa derajat sudut terkecil yang dibentuk 2 jarum jam?
// Jam 3:00 -> 90
// Jam 5:30 -> 15
// Jam 2.20 -> 50
// *detik tidak dipertimbangkan

function sudutJamTerkecil(jam, menit) {
    let a, b, sudutKecil = 0.0;

    if (jam > 12 || menit > 60) {
        console.log("Input jam atau menit salah");
    } else {
        a = (menit / 60 * 30) + (jam * 30);
        b = menit * 6;
        if (b < a) {
            sudutKecil = a - b;
        } else {
            sudutKecil = b - a;
        }

        if (sudutKecil > 180) {
            sudutKecil = 360 - sudutKecil;
        }

        console.log("Sudut terkecil = " + sudutKecil);
    }
}

sudutJamTerkecil(3, 0);
sudutJamTerkecil(5, 30);
sudutJamTerkecil(2, 20);
