var menuMakanan = prompt('Masukkan menu makanan anda. Contoh: sate kadal, coro krispi, oseng-oseng dajjal.')

switch (menuMakanan) {
    case 'sate kadal':
    case 'coro krispi':
    case 'oseng-oseng dajjal':
        alert('pesanan sedang diproses')
    break
    default:
        alert('goblok raiso ngetik!')
}