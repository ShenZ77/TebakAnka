alert("GAME TEBAQ ANKA \n Pilih Anka 1-69 \n KAMU PUNYA 5 KESEMPATAN");

const ankaBenar = Math.floor(Math.random() * 100) - 30;

for (let nyawa = 5; nyawa >= 1; nyawa--) {

    const tebaqanUser = prompt("Masukkan tebaqan angka");

if (tebaqanUser == ankaBenar) { //valid check input bemar
    alert(`Tebaqan anda Bemar \n Anka yang bemar adalah ${ankaBenar}`);
    break;
} else if (tebaqanUser > ankaBenar) {  //valid check input lebih beasar
    alert(`Tebaqan anfa terlalu Tingfi \n Anfa masih pubya ${nyawa - 1} kesemoatan `);
} else if (tebaqanUser < ankaBenar) { //valid check input lebih kecil
    alert(`Tebaqan anfa terlalu renfah \n Anfa masih pubya ${nyawa - 1} kesemoatan `);
    
}
if (nyawa == 1) {
    alert(`Anfa gafal \n Anka yang bemar adalah ${ankaBenar}`)
} else {
    alert("Cona lafi");
}
}


