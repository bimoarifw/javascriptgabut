var jmlAngkot = 10
var angkotOperasi = 6

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik')
    }
    // else if (noAngkot % 2 == 0) {
    //     console.log('Angkot no. ' + noAngkot + ' sedang mabar')
    // } wkwkwk jawabanku ko ngene ngawur tenan walopun bener sih log e
    else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot no. ' + noAngkot + ' sedang mabar')
    }
    else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik')
    }
}