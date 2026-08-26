import { company as c, formatDate } from './company.js'

export default {
  slug: 'syarat-ketentuan',
  title: 'Syarat & Ketentuan',
  updated: formatDate(c.updatedISO, 'id-ID'),
  summary: `Ketentuan yang mengatur akses dan penggunaan situs ${c.name}. Pemesanan layanan diatur dalam Perjanjian Layanan terpisah.`,
  intro: [
    {
      t: 'p',
      text: `Syarat & Ketentuan ini ("Ketentuan") mengatur akses dan penggunaan Anda atas ${c.url} ("Situs"), yang dioperasikan oleh ${c.legalName} ("kami").`,
    },
    {
      t: 'p',
      text: 'Mohon baca Ketentuan ini dengan saksama sebelum menggunakan Situs. Dengan mengakses atau menggunakan Situs, Anda menyatakan terikat pada Ketentuan ini. Apabila Anda tidak menyetujui bagian mana pun dari Ketentuan ini, Anda tidak diperkenankan mengakses Situs.',
    },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Penafsiran dan Definisi',
      blocks: [
        { t: 'p', text: 'Untuk keperluan Ketentuan ini:' },
        {
          t: 'dl',
          items: [
            ['Perusahaan', `merujuk pada ${c.legalName}, berkedudukan di ${c.address}.`],
            [
              'Situs',
              `merujuk pada ${c.url}, termasuk seluruh halaman, konten, dan fitur yang tersedia di dalamnya.`,
            ],
            [
              'Anda',
              'merujuk pada individu yang mengakses Situs, atau perusahaan maupun badan hukum yang atas namanya individu tersebut mengakses Situs.',
            ],
            [
              'Konten',
              'berarti seluruh teks, gambar, grafis, video, kode, elemen desain, dan materi lain yang dipublikasikan di Situs.',
            ],
            [
              'Layanan',
              'merujuk pada jasa profesional yang kami tawarkan, sebagaimana tercantum di bawah ini.',
            ],
            [
              'Perjanjian Layanan',
              'berarti kontrak tertulis, proposal, lingkup kerja, atau purchase order terpisah yang ditandatangani antara Anda dan Perusahaan untuk pelaksanaan Layanan.',
            ],
          ],
        },
        { t: 'p', text: 'Layanan yang saat ini kami tawarkan meliputi:' },
        { t: 'ul', items: c.services.id },
        {
          t: 'p',
          text: 'Daftar ini menguraikan bidang pekerjaan kami; daftar ini bukan penawaran untuk melaksanakannya. Ketersediaan, lingkup, dan harga setiap Layanan disepakati dalam Perjanjian Layanan, sebagaimana diatur pada bagian berikut.',
        },
      ],
    },
    {
      id: 'acceptance',
      title: 'Penerimaan Ketentuan',
      blocks: [
        { t: 'p', text: 'Dengan mengakses Situs, Anda menyatakan bahwa:' },
        {
          t: 'ul',
          items: [
            `Anda berusia sekurang-kurangnya ${c.terms.minAge} tahun, atau telah mencapai usia dewasa menurut hukum di yurisdiksi Anda.`,
            'Anda memiliki kecakapan hukum untuk mengikatkan diri dalam suatu perjanjian.',
            'Apabila Anda mengakses Situs untuk dan atas nama suatu organisasi, Anda berwenang mengikat organisasi tersebut pada Ketentuan ini.',
          ],
        },
        {
          t: 'p',
          text: 'Penggunaan Situs oleh Anda juga tunduk pada Kebijakan Privasi kami, yang menjelaskan cara kami mengumpulkan dan memproses informasi Anda. Kebijakan Privasi merupakan bagian tidak terpisahkan dari Ketentuan ini.',
        },
        { t: 'docLink', to: 'privacy', text: 'Baca Kebijakan Privasi' },
      ],
    },
    {
      id: 'scope',
      title: 'Ruang Lingkup Ketentuan Ini',
      blocks: [
        {
          t: 'lede',
          text: 'Ketentuan ini hanya mengatur penggunaan Situs.',
        },
        {
          t: 'p',
          text: 'Tidak ada satu pun bagian dari Situs yang merupakan penawaran, kuotasi, atau komitmen yang mengikat untuk menyediakan Layanan. Setiap pemesanan Layanan tunduk pada Perjanjian Layanan terpisah, yang akan memuat lingkup pekerjaan, hasil kerja, jadwal, biaya, ketentuan pembayaran, kebijakan revisi, dan pengaturan hak kekayaan intelektual.',
        },
        {
          t: 'p',
          text: 'Apabila terdapat pertentangan antara Ketentuan ini dan Perjanjian Layanan yang telah ditandatangani, Perjanjian Layanan yang berlaku sepanjang menyangkut Layanan yang diuraikan di dalamnya.',
        },
        {
          t: 'note',
          text: 'Harga, paket, dan jadwal yang ditampilkan di mana pun dalam Situs ini bersifat ilustratif. Semuanya baru mengikat setelah dituangkan dalam Perjanjian Layanan yang ditandatangani.',
        },
      ],
    },
    {
      id: 'permitted-use',
      title: 'Penggunaan Situs yang Diperkenankan',
      blocks: [
        {
          t: 'p',
          text: 'Anda dapat mengakses dan menggunakan Situs untuk tujuan yang sah, termasuk menelaah karya kami, mempelajari Layanan kami, dan menghubungi kami terkait rencana kerja sama.',
        },
        { t: 'p', text: 'Anda menyetujui untuk **tidak**:' },
        {
          t: 'ol',
          items: [
            'Menggunakan Situs dengan cara apa pun yang melanggar hukum atau peraturan yang berlaku.',
            'Menyalin, memperbanyak, menerbitkan ulang, mendistribusikan, atau membuat karya turunan dari Konten tanpa izin tertulis kami terlebih dahulu.',
            'Menggunakan sistem otomatis (termasuk bot, scraper, crawler, atau perangkat penambangan data) untuk mengakses, mengekstraksi, atau mengindeks Situs, kecuali pengindeksan mesin pencari yang lazim.',
            'Berupaya memperoleh akses tidak sah ke Situs, servernya, basis datanya, atau sistem apa pun yang terhubung.',
            'Memasukkan virus, malware, atau kode lain yang dirancang untuk mengganggu, merusak, atau melemahkan Situs.',
            'Mengganggu operasi normal Situs, termasuk dengan membebani, membanjiri, atau melancarkan serangan denial-of-service.',
            'Menyampaikan informasi palsu, menyesatkan, atau menipu melalui formulir kontak maupun kanal lainnya.',
            'Menggunakan Situs untuk mengirimkan komunikasi komersial yang tidak diminta, spam, atau iklan.',
            'Melakukan rekayasa balik, dekompilasi, atau upaya mengekstraksi kode sumber Situs maupun perangkat lunak yang mendasarinya.',
            'Menyamar sebagai orang atau entitas lain, atau memberikan keterangan palsu mengenai afiliasi Anda dengan orang atau entitas mana pun.',
          ],
        },
        {
          t: 'p',
          text: 'Kami berhak membatasi atau memblokir akses ke Situs bagi pengguna yang melanggar Ketentuan ini, tanpa pemberitahuan terlebih dahulu.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Hak Kekayaan Intelektual',
      blocks: [
        { t: 'h', text: 'Konten kami' },
        {
          t: 'p',
          text: `Situs beserta Kontennya (termasuk desain, tata letak, kode sumber, teks, grafis, logo, dan strukturnya) dimiliki oleh ${c.legalName} atau pemberi lisensinya, dan dilindungi oleh hukum hak cipta, merek, dan kekayaan intelektual lain di Indonesia serta perjanjian internasional.`,
        },
        {
          t: 'p',
          text: 'Kecuali diizinkan secara tegas dalam Ketentuan ini, tidak ada bagian dari Situs yang boleh diperbanyak, didistribusikan, ditampilkan kepada publik, atau digunakan untuk membuat karya turunan tanpa persetujuan tertulis kami terlebih dahulu.',
        },
        { t: 'h', text: 'Portofolio dan karya klien' },
        {
          t: 'p',
          text: 'Contoh karya, studi kasus, dan gambar proyek yang ditampilkan di Situs dapat memuat merek, logo, dan materi milik klien kami atau pihak ketiga. Semuanya tetap menjadi milik pemiliknya masing-masing dan ditampilkan semata-mata untuk keperluan portofolio dan identifikasi. Penampilannya tidak menyiratkan dukungan, kemitraan, atau pengalihan hak apa pun kepada Anda.',
        },
        { t: 'h', text: 'Lisensi terbatas' },
        {
          t: 'p',
          text: 'Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk mengakses dan melihat Situs bagi keperluan evaluasi pribadi maupun internal bisnis. Lisensi ini tidak mencakup hak untuk menjual kembali, mengeksploitasi secara komersial, atau mengumpulkan Konten Situs secara sistematis.',
        },
        { t: 'h', text: 'Masukan' },
        {
          t: 'p',
          text: 'Apabila Anda menyampaikan gagasan, saran, atau masukan mengenai Situs maupun Layanan kami, Anda memberikan kepada kami hak yang berlaku selamanya, di seluruh dunia, dan bebas royalti untuk menggunakan dan menerapkan masukan tersebut tanpa kewajiban memberikan kompensasi maupun kredit kepada Anda.',
        },
      ],
    },
    {
      id: 'submissions',
      title: 'Pengiriman Informasi Melalui Situs',
      blocks: [
        {
          t: 'p',
          text: 'Ketika Anda mengirimkan informasi melalui formulir kontak atau kanal lain di Situs:',
        },
        {
          t: 'ul',
          items: [
            'Anda menyatakan bahwa informasi yang Anda berikan akurat dan bahwa Anda berhak membagikannya.',
            'Anda tidak diperkenankan mengirimkan informasi rahasia milik pihak ketiga tanpa kewenangan yang semestinya.',
            'Pengiriman pertanyaan tidak menimbulkan hubungan klien, kontrak, maupun kewajiban apa pun bagi kami untuk menanggapi atau menyediakan Layanan.',
            'Kami dapat menyimpan dan memproses kiriman Anda sesuai Kebijakan Privasi kami.',
          ],
        },
        {
          t: 'p',
          text: `Kami menyarankan Anda tidak mengirimkan materi komersial atau rahasia yang sensitif melalui formulir kontak. Apabila kerahasiaan diperlukan, mohon ajukan perjanjian kerahasiaan (NDA) terlebih dahulu melalui ${c.email}.`,
        },
      ],
    },
    {
      id: 'third-party-links',
      title: 'Tautan dan Layanan Pihak Ketiga',
      blocks: [
        {
          t: 'p',
          text: 'Situs dapat memuat tautan ke situs, perangkat, atau sumber daya pihak ketiga. Tautan tersebut disediakan semata-mata demi kemudahan.',
        },
        {
          t: 'p',
          text: 'Kami tidak mengendalikan, mendukung, atau menerima tanggung jawab atas konten, praktik privasi, ketersediaan, maupun keakuratan situs pihak ketiga mana pun. Mengakses situs pihak ketiga merupakan risiko Anda sendiri dan tunduk pada ketentuan serta kebijakan situs tersebut.',
        },
      ],
    },
    {
      id: 'accuracy',
      title: 'Keakuratan Informasi',
      blocks: [
        {
          t: 'p',
          text: 'Kami berupaya secara wajar memastikan informasi di Situs akurat dan mutakhir. Namun demikian:',
        },
        {
          t: 'ul',
          items: [
            'Konten disediakan untuk keperluan informasi umum dan dapat menjadi tidak mutakhir.',
            'Indikasi harga, uraian layanan, jadwal, dan pernyataan kapabilitas bersifat ilustratif dan dapat berubah tanpa pemberitahuan.',
            'Tidak ada satu pun bagian dari Situs yang merupakan nasihat profesional, hukum, keuangan, maupun teknis yang dapat Anda jadikan pegangan tanpa verifikasi independen.',
          ],
        },
        {
          t: 'p',
          text: 'Kami dapat mengubah, menangguhkan, atau menghentikan bagian mana pun dari Situs sewaktu-waktu tanpa pemberitahuan maupun tanggung jawab.',
        },
      ],
    },
    {
      id: 'warranties',
      title: 'Penafian Jaminan',
      blocks: [
        {
          t: 'p',
          text: 'Situs disediakan "sebagaimana adanya" dan "sebagaimana tersedia", tanpa jaminan dalam bentuk apa pun, baik tersurat, tersirat, menurut undang-undang, maupun lainnya.',
        },
        {
          t: 'p',
          text: 'Sejauh diizinkan hukum yang berlaku, kami menafikan seluruh jaminan, termasuk jaminan tersirat atas kelayakan jual, kesesuaian untuk tujuan tertentu, ketiadaan pelanggaran hak, serta jaminan apa pun yang timbul dari kebiasaan berdagang maupun praktik usaha.',
        },
        { t: 'p', text: 'Kami tidak menjamin bahwa:' },
        {
          t: 'ul',
          items: [
            'Situs akan berjalan tanpa gangguan, tepat waktu, aman, atau bebas kesalahan.',
            'Kerusakan akan diperbaiki dalam jangka waktu tertentu.',
            'Situs maupun servernya bebas dari virus atau komponen berbahaya lainnya.',
            'Hasil yang diperoleh dari penggunaan Situs akan akurat, lengkap, atau dapat diandalkan.',
          ],
        },
        {
          t: 'p',
          text: 'Sebagian yurisdiksi tidak mengizinkan pengecualian jaminan tertentu. Dalam hal demikian, pengecualian di atas berlaku hanya sejauh diizinkan hukum.',
        },
      ],
    },
    {
      id: 'liability',
      title: 'Pembatasan Tanggung Jawab',
      blocks: [
        {
          t: 'p',
          text: 'Sejauh diizinkan hukum yang berlaku, Perusahaan beserta para pengurus, karyawan, mitra, dan penyedia layanannya tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, ikutan, maupun punitif (termasuk kehilangan keuntungan, pendapatan, data, peluang usaha, atau reputasi) yang timbul dari atau sehubungan dengan akses maupun penggunaan Anda atas Situs, baik berdasarkan kontrak, perbuatan melawan hukum, kelalaian, tanggung jawab mutlak, maupun dasar hukum lainnya, dan terlepas dari apakah kami telah diberi tahu mengenai kemungkinan kerugian tersebut.',
        },
        {
          t: 'p',
          text: `Total tanggung jawab kami yang timbul dari atau berkaitan dengan penggunaan Situs oleh Anda tidak melebihi ${c.terms.liabilityCap}, atau jumlah yang Anda bayarkan kepada kami dalam dua belas bulan sebelum timbulnya tuntutan, mana yang lebih besar.`,
        },
        {
          t: 'p',
          text: 'Pembatasan ini tidak berlaku terhadap tanggung jawab yang tidak dapat dikecualikan atau dibatasi menurut hukum yang berlaku, termasuk tanggung jawab atas kelalaian berat, kesengajaan, maupun kematian atau cedera badan akibat kelalaian kami.',
        },
      ],
    },
    {
      id: 'indemnification',
      title: 'Ganti Rugi',
      blocks: [
        {
          t: 'p',
          text: 'Anda setuju untuk mengganti rugi, membela, dan membebaskan Perusahaan beserta para pengurus, karyawan, dan agennya dari segala tuntutan, kewajiban, kerugian, kehilangan, dan biaya (termasuk biaya hukum yang wajar) yang timbul dari atau dengan cara apa pun berkaitan dengan:',
        },
        {
          t: 'ul',
          items: [
            'Pelanggaran Anda atas Ketentuan ini.',
            'Pelanggaran Anda atas hukum yang berlaku atau hak pihak ketiga.',
            'Konten atau informasi apa pun yang Anda kirimkan melalui Situs.',
            'Penyalahgunaan Situs atau Kontennya oleh Anda.',
          ],
        },
      ],
    },
    {
      id: 'termination',
      title: 'Pengakhiran',
      blocks: [
        {
          t: 'p',
          text: 'Kami dapat menangguhkan atau mengakhiri akses Anda ke Situs seketika, tanpa pemberitahuan maupun tanggung jawab, atas alasan apa pun, termasuk pelanggaran atas Ketentuan ini.',
        },
        {
          t: 'p',
          text: 'Setelah pengakhiran, hak Anda menggunakan Situs berakhir seketika. Ketentuan yang berdasarkan sifatnya tetap berlaku setelah pengakhiran (termasuk hak kekayaan intelektual, penafian, pembatasan tanggung jawab, ganti rugi, dan hukum yang berlaku) akan tetap mengikat.',
        },
      ],
    },
    {
      id: 'force-majeure',
      title: 'Keadaan Kahar',
      blocks: [
        {
          t: 'p',
          text: 'Kami tidak bertanggung jawab atas kegagalan atau keterlambatan pelaksanaan yang disebabkan keadaan di luar kendali wajar kami, termasuk bencana alam, kebakaran, banjir, wabah, perang, kerusuhan sipil, tindakan pemerintah, perselisihan ketenagakerjaan, gangguan listrik, gangguan internet atau penyedia hosting, maupun serangan siber.',
        },
      ],
    },
    {
      id: 'governing-law',
      title: 'Hukum yang Berlaku dan Penyelesaian Sengketa',
      blocks: [
        {
          t: 'p',
          text: 'Ketentuan ini diatur oleh dan ditafsirkan menurut hukum Republik Indonesia, tanpa memperhatikan asas pertentangan hukum.',
        },
        {
          t: 'p',
          text: `Dalam hal timbul sengketa yang berasal dari atau berkaitan dengan Ketentuan ini maupun penggunaan Situs oleh Anda, para pihak sepakat untuk terlebih dahulu mengupayakan penyelesaian secara musyawarah dengan itikad baik dalam ${c.terms.negotiationDays} hari sejak pemberitahuan tertulis.`,
        },
        {
          t: 'p',
          text: `Apabila sengketa tidak dapat diselesaikan melalui musyawarah, sengketa tersebut diajukan kepada yurisdiksi eksklusif Pengadilan Negeri ${c.jurisdiction}.`,
        },
      ],
    },
    {
      id: 'general',
      title: 'Ketentuan Umum',
      blocks: [
        {
          t: 'dl',
          items: [
            [
              'Keterpisahan',
              'Apabila suatu ketentuan dalam Ketentuan ini dinyatakan tidak sah atau tidak dapat dilaksanakan, ketentuan tersebut akan dibatasi atau dihapus seminimal mungkin, dan ketentuan lainnya tetap berlaku sepenuhnya.',
            ],
            [
              'Pengesampingan',
              'Kelalaian kami menegakkan suatu hak atau ketentuan dalam Ketentuan ini tidak dianggap sebagai pengesampingan atas hak atau ketentuan tersebut.',
            ],
            [
              'Pengalihan',
              'Anda tidak dapat mengalihkan atau memindahtangankan hak Anda berdasarkan Ketentuan ini tanpa persetujuan tertulis kami terlebih dahulu. Kami dapat mengalihkan hak dan kewajiban kami tanpa pembatasan.',
            ],
            [
              'Keseluruhan perjanjian',
              'Ketentuan ini, bersama Kebijakan Privasi, merupakan keseluruhan perjanjian antara Anda dan Perusahaan sehubungan dengan Situs, serta menggantikan seluruh kesepahaman sebelumnya mengenai hal tersebut.',
            ],
            [
              'Bahasa',
              `Ketentuan ini diterbitkan dalam Bahasa Indonesia dan bahasa Inggris. Apabila terdapat ketidaksesuaian, versi ${c.terms.prevailingLanguage} yang berlaku.`,
            ],
          ],
        },
        {
          t: 'note',
          text: 'Berdasarkan Undang-Undang No. 24 Tahun 2009, perjanjian yang melibatkan pihak Indonesia wajib juga tersedia dalam Bahasa Indonesia. Karena itu kedua versi bahasa dari Ketentuan ini dipublikasikan di situs ini.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Perubahan Ketentuan Ini',
      blocks: [
        {
          t: 'p',
          text: 'Kami berhak mengubah Ketentuan ini sewaktu-waktu. Apabila kami melakukan perubahan yang material, kami akan memperbarui tanggal "Terakhir diperbarui" di bagian atas halaman ini dan, apabila diperlukan, menyampaikan pemberitahuan tambahan di Situs.',
        },
        {
          t: 'p',
          text: 'Penggunaan Situs yang Anda lanjutkan setelah perubahan berlaku merupakan penerimaan atas Ketentuan yang telah direvisi. Apabila Anda tidak menyetujui perubahan tersebut, Anda harus berhenti menggunakan Situs.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Hubungi Kami',
      blocks: [
        {
          t: 'p',
          text: 'Apabila Anda memiliki pertanyaan mengenai Ketentuan ini, silakan hubungi kami:',
        },
        {
          t: 'contact',
          lines: [
            ['Perusahaan', c.legalName],
            ['Alamat', c.address],
            ['Email', c.email],
            ['Telepon', c.phone],
            ['Situs', c.url],
          ],
        },
      ],
    },
  ],
  disclaimer:
    'Dokumen ini merupakan templat umum dan bukan nasihat hukum. Mintalah peninjauan oleh penasihat hukum yang kompeten sebelum dipublikasikan.',
}
