const compendium = require('compendium-js')
const translate = require('@vitalets/google-translate-api')

;(async() => {
  const inputToken = 'Dua, hari, kemudian, aku, dan, Seli, memutuskan, menonton, Ali, berlatih, ., Aku, akhirnya, memang, tahu, kenapa, bisa, bergabung, dengan, tim, basket, Lihatlah, ,, sepuluh, kali, diminta, melemparkan, bola, ke, keranjang, dari, jarak, 6, 75, meter, area, tiga, poin, sewaktu, latihan, shooting, dia, tidak, gagal, walau, sekali, Juga, saat, mendribel, gerakan, lincah, ada, yang, merebut, darinya, Kapten, murid, kelas, dua, belas, bertepuk, tangan, menyemangati, menepuk-nepuk, bahu, Itu, hebat, bahkan, pemain, profesional, butuh, panjang, untuk, melakukannya, Tapi, ", Jangankan, melihat, memegang, di, benakku, hanyalah, bayangan, sering, diusir, guru, karena, bertingkah, pelajaran, olahraga, menghela, napas, perlahan, Pasti, sesuatu, baliknya, Si, biang, kerok, ini, pasti, berbuat, curang'
  const inputTokenRemove = [...new Set(inputToken.split(', ').map(data => data.toLowerCase()))]
  console.log(`+ Kata POS (Part-of-Speech) :`)
  for (kata of inputTokenRemove) {
    if (kata.match(/^[A-Za-z]+$/g)) {
      console.log(` - ${kata} => ${compendium.analyse(await (await translate(kata, { from: 'id', to: 'en' })).text)[0].tags}`)
    }
  }
})()