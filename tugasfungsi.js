const daftarJajananFavorit = [
    {
        nama: "Siomay", 
        harga: 10000, 
        favorit: true, 
        topping: ["saus kacang", "kecap"], 
        penjual: { 
            nama: "Pak Budi",
            lokasi: "Bandung"
        }
    },
    {
        nama: "Churros",
        harga: 15000,
        favorit: true,
        topping: ["cokelat", "keju"],
        penjual: {
            nama: "Bu Sinta",
            lokasi: "Jakarta"
        }
    },
    {
        nama: "Cilok",
        harga: 5000,
        favorit: true,
        topping: ["saus", "sambal"],
        penjual: {
            nama: "Pak Agus",
            lokasi: "Garut"
        }
    },
    {
        nama: "Cimol",
        harga: 7000,
        favorit: true,
        topping: ["balado", "keju"],
        penjual: {
            nama: "Bu Rina",
            lokasi: "Tasikmalaya"
        }
    },
    {
        nama: "Cireng",
        harga: 8000,
        favorit: true,
        topping: ["rujak", "sambal"],
        penjual: {
            nama: "Pak Dedi",
            lokasi: "Bogor"
        }
    }
];

for (let i = 0; i < daftarJajananFavorit.length; i++) {
    console.log("Jajanan ke-" + (i + 1));

    for (let key in daftarJajananFavorit[i]) {
        console.log(key + ":", daftarJajananFavorit[i][key]);
    }
}