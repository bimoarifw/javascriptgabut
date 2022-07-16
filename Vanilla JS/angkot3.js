var jmlAngkot = 10
var angkotOperasi = 5

for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotOperasi) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik')
    }
    else {
        console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik')
    }
}