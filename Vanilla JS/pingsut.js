var ulangGame = true
while (ulangGame) {
    // Nilai
    var player = prompt('Arep mileh opo koe?(gajah, semut, uwong)')
    // pilihan komputer
    var comp = Math.random()
    if (comp < 0.34) {
        comp = 'gajah'
    }
    else if (comp > 0.34 && comp < 0.67) {
        comp = 'semut'
    }
    else {
        comp = 'uwong'
    }
    console.log(comp)
    // peraturan
    var hasil = ''
    if (player == comp) {
        hasil = 'SERI'
    }
    else if (player == 'gajah') {
        hasil = (comp == 'uwong') ? 'MENANG' : 'KALAH'
    }
    else if (player == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH'
    }
    else if (player == 'uwong') {
        hasil(comp == 'semut') ? 'MENANG' : 'KALAH'
    }
    else if (player == null) {
        hasil = 'menjadi BABI. SURUH MILIH MALAH KABUR LU BANCII DAJJAL'
    }
    else {
        hasil = 'menjadi ASU. SOALNYA SURUH NULIS YANG BENER AJA GABISA, GOBLOK RATAU SEKOLAH'
    }

    // HASIL
    alert('Koe milih ' + player + ' computer milih ' + comp + ' \nmaka kamu : ' + hasil)
    ulangGame = confirm('Meneh ra? sah mutungan kalahan e mutung su')
}