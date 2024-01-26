// 15.	Ubah format waktu "03:40:44 PM" menjadi format 24 jam (15:40:44)

function convertJam(input) {
    const [time, waktu] = input.split(' ');
    let [jam, menit, detik] = time.split(':');

    if (jam === '12') {
        jam = '00';
    }
    if (waktu === 'PM') {
        jam = parseInt(jam, 10) + 12;
    }
    console.log(`${jam}:${menit}:${detik}`);
}

convertJam("03:40:44 PM");