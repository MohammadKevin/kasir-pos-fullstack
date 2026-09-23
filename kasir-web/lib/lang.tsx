'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Lang = 'id' | 'en'

interface LangContextType {
  lang: Lang
  toggleLang: () => void
  t: (key: string) => string
}

const translations: Record<string, Record<Lang, string>> = {
  // ====== BRAND ======
  'brand.name': { id: 'NovaPOS', en: 'NovaPOS' },
  'brand.tagline': { id: 'Sistem Kasir & ERP Modern', en: 'Modern POS & ERP System' },
  'brand.sub': { id: 'untuk Bisnis Retail Indonesia', en: 'for Indonesian Retail Business' },
  'brand.version': { id: 'v1.0', en: 'v1.0' },

  // ====== NAV ======
  'nav.features': { id: 'Fitur', en: 'Features' },
  'nav.pricing': { id: 'Harga', en: 'Pricing' },
  'nav.testimonials': { id: 'Testimoni', en: 'Testimonials' },
  'nav.faq': { id: 'FAQ', en: 'FAQ' },
  'nav.login': { id: 'Masuk', en: 'Sign In' },
  'nav.tryfree': { id: 'Coba Gratis', en: 'Try Free' },

  // ====== HERO ======
  'hero.badge': { id: 'Platform Kasir #1 untuk Retail Indonesia', en: 'The #1 POS Platform for Indonesian Retail' },
  'hero.title1': { id: 'Sistem Kasir', en: 'Modern POS System' },
  'hero.title2': { id: 'Modern & Cerdas', en: 'Smart & Integrated' },
  'hero.title3': { id: 'untuk Bisnis Anda', en: 'for Your Business' },
  'hero.desc': { id: 'NovaPOS mengintegrasikan kasir, manajemen stok, laporan keuangan, dan multi-outlet dalam satu platform yang mudah digunakan — tanpa kerumitan teknis.', en: 'NovaPOS integrates POS, inventory management, financial reports, and multi-outlet operations in one easy-to-use platform — no technical complexity.' },
  'hero.cta.primary': { id: 'Mulai Gratis Sekarang', en: 'Start for Free Now' },
  'hero.cta.dashboard': { id: 'Buka Dashboard', en: 'Open Dashboard' },
  'hero.cta.secondary': { id: 'Lihat Semua Fitur', en: 'See All Features' },
  'hero.badge.ssl': { id: 'SSL 256-bit Encrypted', en: 'SSL 256-bit Encrypted' },
  'hero.badge.setup': { id: 'Setup dalam 5 Menit', en: 'Setup in 5 Minutes' },
  'hero.badge.nocc': { id: 'Tanpa Kartu Kredit', en: 'No Credit Card Needed' },

  // ====== STATS ======
  'stats.stores': { id: 'Toko Aktif', en: 'Active Stores' },
  'stats.transactions': { id: 'Transaksi Diproses', en: 'Transactions Processed' },
  'stats.uptime': { id: 'Uptime SLA', en: 'Uptime SLA' },
  'stats.response': { id: 'Response Time', en: 'Response Time' },

  // ====== FEATURES ======
  'feat.title': { id: 'Semua yang Anda Butuhkan,', en: 'Everything You Need,' },
  'feat.title2': { id: 'dalam Satu Platform', en: 'in One Platform' },
  'feat.badge': { id: 'Fitur Unggulan', en: 'Key Features' },
  'feat.desc': { id: 'NovaPOS dirancang untuk menghilangkan kerumitan operasional bisnis retail — dari kasir hingga laporan keuangan.', en: 'NovaPOS is designed to eliminate operational complexity for retail businesses — from cashier to financial reports.' },
  'feat.pos.title': { id: 'Terminal POS Kasir', en: 'POS Cashier Terminal' },
  'feat.pos.desc': { id: 'Antarmuka kasir yang cepat dan intuitif. Scan barcode, terima pembayaran tunai, QRIS, atau transfer — selesai dalam hitungan detik.', en: 'Fast and intuitive cashier interface. Scan barcodes, accept cash, QRIS, or bank transfer — done in seconds.' },
  'feat.stock.title': { id: 'Manajemen Stok Multi-Outlet', en: 'Multi-Outlet Inventory' },
  'feat.stock.desc': { id: 'Pantau sisa stok di semua cabang toko secara real-time. Sistem otomatis mengurangi stok saat transaksi selesai.', en: 'Monitor stock across all branches in real-time. System auto-deducts inventory when a transaction completes.' },
  'feat.barcode.title': { id: 'Barcode & Label SKU', en: 'Barcode & SKU Labels' },
  'feat.barcode.desc': { id: 'Generate kode barcode unik untuk setiap produk dan langsung cetak label stiker harga via printer thermal.', en: 'Generate unique barcodes for each product and print price sticker labels via thermal printer.' },
  'feat.report.title': { id: 'Laporan Keuangan Real-time', en: 'Real-time Financial Reports' },
  'feat.report.desc': { id: 'Dashboard laporan omset, laba bersih, pengeluaran operasional, dan rekap shift kasir tersedia kapan saja.', en: 'Revenue, net profit, operational expenses, and shift recap dashboards available anytime.' },
  'feat.member.title': { id: 'Program Loyalitas Member', en: 'Member Loyalty Program' },
  'feat.member.desc': { id: 'Simpan riwayat belanja pelanggan dan terapkan diskon member otomatis berdasarkan total akumulasi transaksi.', en: 'Store customer purchase history and automatically apply member discounts based on accumulated transactions.' },
  'feat.cloud.title': { id: 'Sinkronisasi Cloud', en: 'Cloud Synchronization' },
  'feat.cloud.desc': { id: 'Semua data tersimpan aman di cloud. Akses dari mana saja, backup otomatis, dan tidak ada risiko kehilangan data.', en: 'All data is securely stored in the cloud. Access from anywhere, automatic backup, zero data loss risk.' },

  // ====== PRICING ======
  'price.badge': { id: 'Harga Transparan', en: 'Transparent Pricing' },
  'price.title': { id: 'Pilih Paket yang', en: 'Choose the Plan' },
  'price.title2': { id: 'Sesuai Bisnis Anda', en: 'that Fits Your Business' },
  'price.sub': { id: 'Tidak ada biaya tersembunyi. Batalkan kapan saja.', en: 'No hidden fees. Cancel anytime.' },
  'price.popular': { id: 'Paling Populer', en: 'Most Popular' },
  'price.free': { id: 'Gratis', en: 'Free' },
  'price.forever': { id: 'Selamanya', en: 'Forever' },
  'price.month': { id: '/bulan', en: '/month' },
  'price.custom': { id: 'Custom', en: 'Custom' },
  'price.contact': { id: 'Hubungi kami', en: 'Contact us' },
  'price.cta.starter': { id: 'Mulai Gratis', en: 'Start Free' },
  'price.cta.pro': { id: 'Coba 14 Hari Gratis', en: 'Try Free 14 Days' },
  'price.cta.enterprise': { id: 'Hubungi Sales', en: 'Contact Sales' },

  // ====== TESTIMONIALS ======
  'testi.badge': { id: 'Kata Mereka', en: 'What They Say' },
  'testi.title': { id: 'Dipercaya Ratusan', en: 'Trusted by Hundreds of' },
  'testi.title2': { id: 'Pemilik Bisnis', en: 'Business Owners' },

  // ====== FAQ ======
  'faq.badge': { id: 'Pertanyaan Umum', en: 'FAQ' },
  'faq.title': { id: 'Ada Pertanyaan?', en: 'Have Questions?' },

  // ====== CTA ======
  'cta.title': { id: 'Siap Transformasi Bisnis Anda?', en: 'Ready to Transform Your Business?' },
  'cta.desc': { id: 'Bergabung dengan 500+ toko yang sudah menggunakan NovaPOS. Mulai gratis, upgrade kapan saja — tanpa risiko.', en: 'Join 500+ stores already using NovaPOS. Start free, upgrade anytime — zero risk.' },
  'cta.primary': { id: 'Mulai Gratis Sekarang', en: 'Start Free Now' },
  'cta.sales': { id: 'Hubungi Sales', en: 'Contact Sales' },

  // ====== FOOTER ======
  'footer.rights': { id: 'Hak Cipta Dilindungi.', en: 'All Rights Reserved.' },

  // ====== LOGIN ======
  'login.title': { id: 'Masuk ke NovaPOS', en: 'Sign In to NovaPOS' },
  'login.sub': { id: 'Masuk untuk mengakses dashboard admin atau terminal kasir.', en: 'Sign in to access the admin dashboard or cashier terminal.' },
  'login.email': { id: 'Email Akun', en: 'Account Email' },
  'login.email.ph': { id: 'nama@email.com', en: 'name@email.com' },
  'login.password': { id: 'Password', en: 'Password' },
  'login.forgot': { id: 'Lupa Password?', en: 'Forgot Password?' },
  'login.submit': { id: 'Masuk ke Akun', en: 'Sign In' },
  'login.loading': { id: 'Memproses masuk...', en: 'Signing in...' },
  'login.back': { id: 'Kembali ke Beranda', en: 'Back to Home' },
  'login.error.empty': { id: 'Email dan password wajib diisi', en: 'Email and password are required' },
  'login.error.default': { id: 'Email atau password salah', en: 'Incorrect email or password' },
  'login.notice': { id: 'Hubungi administrator jika Anda membutuhkan akses atau mengalami kendala login.', en: 'Contact your administrator if you need access or experience login issues.' },
  'login.copyright': { id: 'NovaPOS Platform', en: 'NovaPOS Platform' },
  'login.ssl': { id: 'Akses Keamanan Jalur SSL/TLS 256-bit', en: 'SSL/TLS 256-bit Encrypted Access' },
  'login.audit': { id: 'Pencatatan Log Audit Setiap Aktivitas', en: 'Audit Log for Every Activity' },
  'login.panel.title': { id: 'Platform Kasir & ERP Modern', en: 'Modern POS & ERP Platform' },
  'login.panel.desc': { id: 'Gunakan akun Anda untuk mengakses portal manajemen kasir, stok produk, barcode, dan laporan keuangan bisnis retail Anda.', en: 'Use your account to access the POS management portal, product inventory, barcodes, and financial reports for your retail business.' },
  'login.status.title': { id: 'Status Layanan', en: 'Service Status' },
  'login.status.online': { id: 'ONLINE', en: 'ONLINE' },
  'login.status.server': { id: 'Server Utama', en: 'Main Server' },
  'login.status.latency': { id: 'Latency: 12ms', en: 'Latency: 12ms' },
  'login.status.db': { id: 'Database', en: 'Database' },
  'login.status.connected': { id: 'Terhubung', en: 'Connected' },
  'login.status.cloud': { id: 'Cloud Sync', en: 'Cloud Sync' },
  'login.status.synced': { id: 'Aktif', en: 'Active' },

  // ====== DASHBOARD COMMON ======
  'dash.logout': { id: 'Keluar', en: 'Logout' },
  'dash.nexpos': { id: 'NovaPOS', en: 'NovaPOS' },

  // ====== DASHBOARD ADMIN ======
  'dash.admin.company': { id: 'NovaPOS', en: 'NovaPOS' },
  'dash.admin.tagline': { id: 'Statistik dan performa seluruh bisnis Anda secara real-time', en: 'Real-time statistics and performance of your entire business' },
}

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key
}

const LangContext = createContext<LangContextType>({
  lang: 'id',
  toggleLang: () => {},
  t: (key) => translations[key]?.['id'] ?? key,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id')

  useEffect(() => {
    const stored = localStorage.getItem('novapos-lang') as Lang | null
    if (stored === 'id' || stored === 'en') setLang(stored)
  }, [])

  function toggleLang() {
    const next: Lang = lang === 'id' ? 'en' : 'id'
    setLang(next)
    localStorage.setItem('novapos-lang', next)
  }

  const translate = (key: string) => translations[key]?.[lang] ?? key

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translate }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

// Standalone toggle button component
export function LangToggleButton({ className = '' }: { className?: string }) {
  const { lang, toggleLang } = useLang()
  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-[10px] font-bold text-slate-300 hover:text-white transition-all ${className}`}
      title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
    >
      <span className="text-base leading-none">{lang === 'id' ? '🇮🇩' : '🇺🇸'}</span>
      <span>{lang === 'id' ? 'ID' : 'EN'}</span>
    </button>
  )
}

// Light variant for dashboard (white bg)
export function LangToggleLight({ className = '' }: { className?: string }) {
  const { lang, toggleLang } = useLang()
  return (
    <button
      onClick={toggleLang}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-[10px] font-bold text-slate-500 hover:text-slate-800 transition-all shadow-sm ${className}`}
      title={lang === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}
    >
      <span className="text-sm leading-none">{lang === 'id' ? '🇮🇩' : '🇺🇸'}</span>
      <span>{lang === 'id' ? 'ID' : 'EN'}</span>
    </button>
  )
}
