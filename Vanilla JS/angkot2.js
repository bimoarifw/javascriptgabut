var jmlAngkot = 600
var angkotOperasi = 544
var noAngkot = 1

while (noAngkot <= angkotOperasi) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}
for (noAngkot = angkotOperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' tidak beroperasi dengan baik')
}