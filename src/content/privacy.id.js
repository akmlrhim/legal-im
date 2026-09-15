import { company as c, formatDate } from './company.js'

export default {
  slug: 'kebijakan-privasi',
  title: 'Kebijakan Privasi',
  updated: formatDate(c.updatedISO, 'id-ID'),
  summary: `Bagaimana ${c.name} mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda saat menggunakan situs dan layanan kami.`,
  intro: [
    {
      t: 'p',
      text: `Kebijakan Privasi ini menjelaskan bagaimana ${c.legalName} ("kami") mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda ketika Anda mengunjungi ${c.url} ("Situs").`,
    },
    {
      t: 'p',
      text: 'Dengan menggunakan Situs, Anda menyetujui pengumpulan dan penggunaan informasi sesuai Kebijakan Privasi ini. Jika Anda tidak menyetujui bagian mana pun dari kebijakan ini, mohon hentikan penggunaan Situs.',
    },
  ],
  sections: [
    {
      id: 'definitions',
      title: 'Penafsiran dan Definisi',
      blocks: [
        { t: 'p', text: 'Untuk keperluan Kebijakan Privasi ini:' },
        {
          t: 'dl',
          items: [
            [
              'Perusahaan',
              `berarti ${c.legalName}, berkedudukan di ${c.address}.`,
            ],
            ['Situs', `berarti ${c.url}.`],
            [
              'Anda',
              'berarti individu yang mengakses Situs, atau perusahaan maupun badan hukum yang diwakili individu tersebut dalam mengakses Situs.',
            ],
            [
              'Data Pribadi',
              'berarti setiap informasi yang berkaitan dengan orang perseorangan yang teridentifikasi atau dapat diidentifikasi, sebagaimana dimaksud dalam UU No. 27 Tahun 2022.',
            ],
            [
              'Data Penggunaan',
              'berarti data yang terkumpul secara otomatis, baik dihasilkan dari penggunaan Situs oleh Anda maupun dari infrastruktur Situs itu sendiri.',
            ],
            [
              'Cookie',
              'adalah berkas kecil yang ditempatkan di perangkat Anda oleh sebuah situs, berisi rincian aktivitas penjelajahan Anda.',
            ],
            [
              'Pihak Ketiga Pemroses',
              'berarti pihak ketiga mana pun yang memproses data atas nama kami untuk membantu pengoperasian Situs.',
            ],
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Informasi yang Kami Kumpulkan',
      blocks: [
        { t: 'h', text: 'Data Pribadi yang Anda Berikan' },
        {
          t: 'p',
          text: 'Kami hanya mengumpulkan Data Pribadi ketika Anda mengirimkannya secara sukarela, misalnya melalui formulir kontak. Data tersebut dapat mencakup:',
        },
        {
          t: 'ul',
          items: [
            'Nama lengkap',
            'Alamat email',
            'Nomor telepon',
            'Nama perusahaan dan jabatan',
            'Isi pesan, ringkasan proyek, atau pertanyaan yang Anda kirimkan kepada kami',
          ],
        },
        {
          t: 'p',
          text: 'Kami tidak mewajibkan Anda membuat akun, dan kami tidak mengumpulkan informasi pembayaran melalui Situs ini.',
        },
        { t: 'h', text: 'Data Penggunaan' },
        {
          t: 'p',
          text: 'Data Penggunaan terkumpul secara otomatis saat Anda mengunjungi Situs. Data ini dapat mencakup:',
        },
        {
          t: 'ul',
          items: [
            'Alamat IP perangkat Anda dan perkiraan lokasi (tingkat kota atau negara)',
            'Jenis dan versi peramban',
            'Sistem operasi dan jenis perangkat',
            'Halaman yang Anda kunjungi, lama kunjungan tiap halaman, dan urutan halaman yang dilihat',
            'Situs perujuk atau kata kunci pencarian yang membawa Anda ke sini',
            'Tanggal dan waktu kunjungan Anda',
          ],
        },
        {
          t: 'p',
          text: 'Data ini dikumpulkan secara agregat dan digunakan untuk memahami cara pengunjung berinteraksi dengan Situs. Data ini tidak digunakan untuk mengidentifikasi Anda secara pribadi.',
        },
        { t: 'h', text: 'Informasi Sensitif' },
        {
          t: 'p',
          text: 'Kami tidak dengan sengaja mengumpulkan data pribadi yang bersifat spesifik seperti data kesehatan, data biometrik, asal ras atau etnis, keyakinan beragama, maupun catatan kejahatan. Mohon tidak menyertakan informasi semacam itu dalam pesan yang Anda kirim melalui Situs.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookie dan Teknologi Pelacakan',
      blocks: [
        {
          t: 'p',
          text: 'Kami menggunakan cookie dan teknologi pelacakan serupa untuk mengoperasikan Situs dan menganalisis cara Situs digunakan.',
        },
        {
          t: 'table',
          head: ['Jenis', 'Tujuan', 'Wajib?'],
          rows: [
            [
              'Sangat diperlukan',
              'Menjalankan fungsi inti seperti keamanan, pengiriman formulir, dan penyeimbangan beban',
              'Ya, tidak dapat dinonaktifkan',
            ],
            [
              'Preferensi',
              'Mengingat pengaturan Anda, seperti bahasa atau mode tampilan',
              'Tidak',
            ],
            [
              'Analitik',
              'Mengukur jumlah pengunjung, sumber trafik, dan performa halaman secara agregat',
              'Tidak',
            ],
            [
              'Pemasaran',
              'Mengukur efektivitas kampanye dan menampilkan iklan yang relevan',
              'Tidak',
            ],
          ],
        },
        {
          t: 'p',
          text: '**Mengelola cookie.** Sebagian besar peramban memungkinkan Anda menolak atau menghapus cookie melalui pengaturannya. Menonaktifkan cookie non-esensial tidak akan menghalangi Anda menggunakan Situs, meskipun sebagian fitur mungkin tidak berfungsi sebagaimana mestinya.',
        },
        {
          t: 'note',
          text: 'Jika Anda memasang banner persetujuan cookie, tambahkan kalimat di sini yang mengarahkan pembaca ke tautan "Pengaturan Cookie" di footer situs.',
        },
      ],
    },
    {
      id: 'how-we-use',
      title: 'Bagaimana Kami Menggunakan Informasi Anda',
      blocks: [
        {
          t: 'p',
          text: 'Kami menggunakan informasi yang kami kumpulkan untuk tujuan berikut:',
        },
        {
          t: 'ol',
          items: [
            '**Menanggapi pertanyaan Anda**: menjawab pertanyaan, menyiapkan penawaran, dan menindaklanjuti kiriman formulir kontak.',
            '**Menyediakan layanan kami**: berkomunikasi dengan Anda mengenai proyek, hasil kerja, dan pekerjaan yang sedang berjalan.',
            '**Mengukur kampanye iklan**: menilai efektivitas iklan kami melalui pixel periklanan pihak ketiga, hanya jika Anda menyetujui cookie pemasaran.',
            '**Mengoperasikan dan menyempurnakan Situs**: menganalisis pola penggunaan serta meningkatkan performa, tata letak, dan konten.',
            '**Menjaga keamanan**: mendeteksi, mencegah, dan menangani spam, penipuan, trafik bot, dan masalah teknis.',
            '**Memenuhi kewajiban hukum**: memenuhi ketentuan akuntansi, perpajakan, atau regulasi, serta menanggapi permintaan sah dari otoritas berwenang.',
          ],
        },
        {
          t: 'p',
          text: 'Kami tidak akan menggunakan informasi Anda untuk tujuan yang berbeda secara material dari yang dijelaskan di atas tanpa memberi tahu Anda terlebih dahulu.',
        },
      ],
    },
    {
      id: 'legal-basis',
      title: 'Dasar Hukum Pemrosesan',
      blocks: [
        {
          t: 'p',
          text: 'Kami memproses Data Pribadi berdasarkan satu atau lebih dasar berikut:',
        },
        {
          t: 'dl',
          items: [
            [
              'Persetujuan',
              'apabila Anda telah menyetujui secara tegas, misalnya dengan menerima cookie non-esensial.',
            ],
            [
              'Perjanjian',
              'apabila pemrosesan diperlukan untuk membuat atau melaksanakan perjanjian dengan Anda.',
            ],
            [
              'Kewajiban hukum',
              'apabila kami diwajibkan memproses data berdasarkan peraturan perundang-undangan.',
            ],
            [
              'Kepentingan yang sah',
              'apabila pemrosesan diperlukan untuk kepentingan bisnis kami yang wajar, seperti mengamankan Situs atau memahami cara penggunaannya, sepanjang kepentingan tersebut tidak mengesampingkan hak Anda.',
            ],
          ],
        },
        {
          t: 'p',
          text: 'Pemrosesan kami dilaksanakan sesuai Undang-Undang Republik Indonesia No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), serta, apabila berlaku, General Data Protection Regulation (GDPR) Uni Eropa.',
        },
      ],
    },
    {
      id: 'sharing',
      title: 'Pembagian dan Pengungkapan Informasi',
      blocks: [
        { t: 'lede', text: 'Kami tidak menjual Data Pribadi Anda.' },
        {
          t: 'p',
          text: 'Kami dapat membagikan informasi Anda dalam keadaan terbatas berikut:',
        },
        {
          t: 'ul',
          items: [
            `**Kepada Pihak Ketiga Pemroses** yang membantu kami mengoperasikan Situs dan bisnis kami: hosting dan infrastruktur ${c.processors.hosting}, analitik ${c.processors.analytics}, platform email ${c.processors.email}, serta platform periklanan ${c.processors.advertising}.`,
            '**Untuk alasan hukum**, apabila pengungkapan diwajibkan oleh undang-undang, putusan pengadilan, atau permintaan sah dari otoritas pemerintah maupun penegak hukum.',
            '**Dalam pengalihan usaha**, seperti penggabungan, akuisisi, atau penjualan aset. Dalam hal ini kami akan memberi tahu Anda sebelum data Anda tunduk pada kebijakan privasi yang berbeda.',
            '**Dengan persetujuan Anda**, untuk tujuan lain apa pun yang diungkapkan kepada Anda pada saat itu.',
          ],
        },
        {
          t: 'p',
          text: 'Seluruh Pihak Ketiga Pemroses terikat kontrak untuk memproses data hanya sesuai instruksi kami dan menerapkan pengamanan yang memadai.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'Masa Penyimpanan Data',
      blocks: [
        {
          t: 'p',
          text: 'Kami menyimpan Data Pribadi hanya selama diperlukan untuk memenuhi tujuan yang dijelaskan dalam kebijakan ini, atau selama diwajibkan peraturan perundang-undangan. Sebagai panduan umum:',
        },
        {
          t: 'table',
          head: ['Kategori', 'Masa penyimpanan'],
          rows: [
            [
              'Kiriman formulir kontak dan catatan pertanyaan',
              `${c.retention.enquiries} sejak komunikasi terakhir`,
            ],
            [
              'Catatan bisnis dan akuntansi',
              `${c.retention.accounting}, sesuai ketentuan perpajakan dan dokumen perusahaan`,
            ],
            ['Log server dan data analitik', c.retention.logs],
          ],
        },
        {
          t: 'p',
          text: 'Setelah masa penyimpanan berakhir, data dihapus secara permanen atau dianonimkan sehingga tidak lagi dapat mengidentifikasi Anda.',
        },
      ],
    },
    {
      id: 'transfers',
      title: 'Transfer Data ke Luar Negeri',
      blocks: [
        {
          t: 'p',
          text: 'Sebagian Pihak Ketiga Pemroses kami mengoperasikan server di luar wilayah Indonesia. Apabila informasi Anda ditransfer ke luar negeri, kami mengambil langkah wajar untuk memastikan negara penerima memiliki tingkat pelindungan yang memadai, atau bahwa pengamanan kontraktual yang sesuai telah diberlakukan, selaras dengan ketentuan pelindungan data yang berlaku.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Keamanan Data',
      blocks: [
        {
          t: 'p',
          text: 'Kami menerapkan langkah teknis dan organisasi yang wajar untuk melindungi informasi Anda, termasuk:',
        },
        {
          t: 'ul',
          items: [
            'Transmisi data terenkripsi melalui HTTPS/TLS',
            'Kontrol akses yang membatasi akses data hanya kepada personel berwenang',
            'Pembaruan perangkat lunak dan penambalan keamanan secara berkala',
            'Pencadangan rutin serta pemantauan aktivitas tidak sah',
          ],
        },
        {
          t: 'p',
          text: 'Namun demikian, tidak ada metode transmisi melalui internet maupun metode penyimpanan elektronik yang sepenuhnya aman. Meski kami berupaya melindungi Data Pribadi Anda, kami tidak dapat menjamin keamanan mutlak.',
        },
        {
          t: 'p',
          text: '**Pemberitahuan kebocoran.** Dalam hal terjadi kegagalan pelindungan Data Pribadi, kami akan memberi tahu pemilik data yang terdampak dan otoritas pengawas terkait dalam jangka waktu yang diwajibkan peraturan perundang-undangan.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Hak-Hak Anda',
      blocks: [
        {
          t: 'p',
          text: 'Berdasarkan UU PDP dan ketentuan lain yang berlaku, Anda berhak untuk:',
        },
        {
          t: 'ol',
          items: [
            '**Mendapatkan informasi** mengenai cara Data Pribadi Anda dikumpulkan dan digunakan.',
            '**Mengakses** Data Pribadi yang kami simpan tentang Anda dan meminta salinannya.',
            '**Memperbaiki** data yang tidak akurat atau tidak lengkap.',
            '**Menghapus** Data Pribadi Anda, sepanjang kami tidak memiliki kewajiban hukum yang mengharuskan penyimpanannya.',
            '**Menarik persetujuan** kapan saja, tanpa memengaruhi keabsahan pemrosesan yang telah dilakukan sebelumnya.',
            '**Mengajukan keberatan** atas pemrosesan yang didasarkan pada kepentingan yang sah, termasuk pemasaran langsung.',
            '**Membatasi** atau menunda pemrosesan dalam keadaan tertentu.',
            '**Memindahkan data**: menerima data Anda dalam format terstruktur dan terbaca mesin, serta mengirimkannya kepada pengendali lain.',
            '**Mengajukan pengaduan** kepada lembaga pelindungan data yang berwenang.',
          ],
        },
        {
          t: 'p',
          text: `Untuk menggunakan hak-hak tersebut, hubungi kami di ${c.email}. Kami akan menanggapi dalam ${c.terms.responseTime}. Kami dapat meminta Anda memverifikasi identitas sebelum memenuhi permintaan, guna melindungi data Anda dari akses tidak sah.`,
        },
      ],
    },
    {
      id: 'children',
      title: 'Privasi Anak',
      blocks: [
        {
          t: 'p',
          text: `Situs ini tidak ditujukan bagi anak di bawah usia ${c.terms.minAge} tahun, dan kami tidak dengan sengaja mengumpulkan Data Pribadi dari anak. Apabila Anda meyakini seorang anak telah memberikan Data Pribadi kepada kami, mohon hubungi ${c.email} agar kami dapat menghapusnya.`,
        },
      ],
    },
    {
      id: 'third-party-links',
      title: 'Tautan ke Situs Lain',
      blocks: [
        {
          t: 'p',
          text: 'Situs kami dapat memuat tautan ke situs pihak ketiga, termasuk proyek klien, profil media sosial, dan situs mitra. Kebijakan Privasi ini tidak berlaku untuk situs-situs tersebut. Kami tidak memiliki kendali dan tidak bertanggung jawab atas konten maupun praktik privasi pihak ketiga mana pun. Kami menganjurkan Anda membaca kebijakan privasi setiap situs yang Anda kunjungi.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Perubahan Kebijakan Privasi Ini',
      blocks: [
        {
          t: 'p',
          text: 'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan praktik kami atau ketentuan hukum. Versi terbaru akan dimuat di halaman ini dengan tanggal "Terakhir diperbarui" yang disesuaikan. Untuk perubahan material, kami akan memberikan pemberitahuan yang lebih menonjol, seperti notifikasi email atau banner di Situs.',
        },
        {
          t: 'p',
          text: 'Kami menganjurkan Anda meninjau halaman ini secara berkala.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Hubungi Kami',
      blocks: [
        {
          t: 'p',
          text: 'Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini maupun cara kami menangani informasi Anda, silakan hubungi:',
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
}
