var jmlAngkot = 10
var angkotOperasi = 6

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= angkotOperasi && noAngkot !== 5) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik')
    }
    else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot no. ' + noAngkot + ' sedang mabar')
    }
    else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik')
    }
}