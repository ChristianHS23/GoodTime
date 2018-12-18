'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      let objPost = [{
        title: "Pada Akhirnya Game Fornite lebih keren dari Game PUBG",
        content: `Perkembangan dunia esports di indonesia sekarang makin dikagumi. Banyak gamers indonesia mulai bikin konten game diyoutobe, dari segala game mobile android maupun game-game MOBA dan game Battle Royale. Belajar dari Gamers konten indonesia siapa yang  ga kenal sesosok Reza Oktovian yg sering dipanggil dengan sebutan -ARAP- , pastinya yang ngaku seorang gamers ga asing dengan inisial itu. Nah kenapa aku bahas Arap karena aku paling suka karya-karya dia dibandingkan konten-konten gamers lainnya ? Whell kenapa karena dia kemarin bikin konten tentang game Fornite dari situ aku mulai juga ikut memainkan game itu. Fornite Sendiri adalah Game Batte Royale , di mana Para Pemain datang di sebuah pulau dan berusaha menjadi pemain yang survive di pulau itu. Pemain dapat menggunakan berbagai senjata di seluruh Area itu.Fornite sendiri jauh lebih suguhan grafisnya, di mana Fortnite memiliki tampilan bernuansa  casual seperti kartun tapi enak di lihat, Fornite sendiri juga memiliki beberapa aspek hebat lainnya yang menjadikannya permainan yang menyenangkan untuk dimainkan, dan Pada Akhirnya Game Fornite lebih keren dari PUBG ? Sedikit beberapan alasan menurut aku di bawah ini ? `
      }, {
        title: "Buset ! Beberapa anggota JKT 48 gak suka maen sendirian !",
        content: `Kecintaan dan kepedulian JKT48 terhadap esport Indonesia sepertinya bukan hal semu semata, walaupun belum terparti secara nyata, namun beberapa anggota JKT48 emang beneran suka bermain game lhoo, beberapa bulan lalu ada sekelebat berita jika member JKT48 akan membentu team esport, pastinya juga di tengah-tengah generasi ke 7 ini.Kalau kata si Yona JKT48, doi berharap jika nanti JKT48 tidak hanya terkenal dengan Dance dan Menyanyinya saja, namun juga berisi bakat-bakat gamer dikarenakan cukup banyak juga anggota JKT48 yang bermain game, terutama Mobile Game yang mana tersedia di smartphone yang pastinya dipegang sama cewe jaman now.Dari banyaknya anggota JKT48, beberapa member seperti Sinka, Anin, Jinan dan Yupi juga gemar bermain Mobile Game, seperti Mobile Legend, PUGB Mobile, dan lainnya, Anin sendiri khususnya, sangat mendukung dan mau banget jika JKT48 mempunyai team esport, dan alangkah baiknya jika hal itu terealisasi dengan baik dan benar terjadi.`
      }, {
        title: "SEJARAH GAME FAR CRY DARI MASA KE MASA",
        content: `yaps,"FAR CRY"siapa yang nggak kenal dengan  game yang satu ini bagi agan yang nggak tau game ini tenang aja di sini ane akan membahas satu persatu seri game FAR CRYlets's begins.
        FAR CRY adalah game bertipe Firts-Person-Shooter[FPS] yang di terbitkan oleh UBISOFT dan di kembangkan oleh CRYTEK .game ini sih menurut ane gabungan antara GTA dan CALL OF DUTY karena berjenis FPS dan open world[misi dapat di lakukan sesuka hati pemain] game ini cocok bangat bagi agan yg nyari game open world bernuansa hutan.
        total sementara seri game yg di keluarkan dari tahun 2004-2018 berjumlah 9 seri game dan katanya sih mau di rilis seri game terbarunya yang berjudul FAR CRY:NEW DAWN tapi ane nggak tau kapan game ini tapi tenang aja nanti kalau gamenya sudah rilis bakal ane review.ok,langsung aja di sini kita akan membahas satu-persatu seri game FAR CRY let's begins`
      }]

      return queryInterface.bulkInsert('Posts', objPost , {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Posts', null , {})
  }
};
