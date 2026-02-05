export const NAV_LINKS = [
  { name: 'Beranda', href: '/' },
  { name: 'Terbaru', href: '/terbaru' },
  { name: 'Hiburan', href: '/hiburan' },
  { name: 'Gaya Hidup', href: '/gaya-hidup' },
  { name: 'Olahraga', href: '/olahraga' },
  { name: 'Nasional', href: '/nasional' },
  { name: 'Internasional', href: '/internasional' },
]

export const SOCIAL_LINKS = [
  {
    name: 'Youtube',
    href: 'https://www.youtube.com',
    icon: '/bi_youtube.svg',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    icon: '/bi_instagram.svg',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    icon: '/bi_facebook.svg',
  },
]

export const FOOTER_TELUSURI = [
  { name: 'Beranda', href: '/' },
  { name: 'Kesehatan', href: '/kesehatan' },
  { name: 'Otomotif', href: '/otomotif' },
  { name: 'Politik', href: '/politik' },
  { name: 'Olahraga', href: '/olahraga' },
  { name: 'Nasional', href: '/nasional' },
  { name: 'Internasional', href: '/internasional' },
]

export const FOOTER_BANTUAN = [
  { name: 'Kontak Kami', href: '/kontak' },
  { name: 'Laporan Pembajakan', href: '/laporan-pembajakan' },
  { name: 'Kebijakan', href: '/kebijakan' },
]

export const MOCK_CAROUSEL = [
  {
    id: 1,

    imageUrl: '/carousel-1.png',
  },
  {
    id: 2,
    imageUrl: '/carousel-1.png',
  },
  {
    id: 3,
    imageUrl: '/carousel-1.png',
  },
]

export const MOCK_HEADLINES = [
  {
    id: 1,
    title:
      'Respons PSSI Soal Opsi Pindah dari GBK jika Lolos Babak 3 Kualifikasi',
    description:
      'Ketua Badan Tim Nasional (BTN) PSSI Sumardji merespons peluang Timnas Indonesia pindah dari Stadion Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga Kualifikasi Piala Dunia 2026.',
    date: '22 Januari 2024',
    imageUrl: '/headline-1.png',
  },
  {
    id: 2,
    title: 'Pemerintah Targetkan Ekonomi Tumbuh 5,2 Persen di 2024',
    description:
      'Pemerintah optimis pertumbuhan ekonomi Indonesia akan tetap kuat di tengah ketidakpastian global, dengan target pertumbuhan ekonomi sebesar 5,2 persen pada tahun 2024.',
    date: '23 Januari 2024',
    imageUrl: '/headline-1.png',
  },
  {
    id: 3,
    title: 'Inovasi Teknologi Ramah Lingkungan untuk Masa Depan',
    description:
      'Berbagai perusahaan teknologi kini berlomba-lomba menciptakan inovasi ramah lingkungan demi mendukung keberlanjutan bumi di masa depan.',
    date: '24 Januari 2024',
    imageUrl: '/headline-1.png',
  },
]

export const DUMMY_NEWS = [
  {
    title:
      'Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo',
    link: '#',
    contentSnippet: '',
    isoDate: '2024-01-22T00:00:00.000Z',
    image: {
      small: '/detail-1.png',
      large: '/detail-1.png',
    },
  },
  {
    title:
      'Flypass Bonanza dan Heli Bell 505 Warnai Tupdik dan Wing Day 11 Perwira Penerbang TNl AL ',
    link: '#',
    contentSnippet: '',
    isoDate: '2024-01-22T00:00:00.000Z',
    image: {
      small: '/related-1.png',
      large: '/related-1.png',
    },
  },
  {
    title:
      'Perwira Penerbangan TNl AL Raih Gelar “Double Degree di PSL Université Paris ',
    link: '#',
    contentSnippet: '',
    isoDate: '2024-01-22T00:00:00.000Z',
    image: {
      small: '/related-2.png',
      large: '/related-2.png',
    },
  },
]

export const API_BASE_URL = import.meta.env.DEV
  ? '/api'
  : 'https://berita-indo-api-next.vercel.app'
