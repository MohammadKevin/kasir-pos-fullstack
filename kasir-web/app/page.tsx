'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import {
  Monitor,
  Package,
  TrendingUp,
  Users,
  ChevronDown,
  BarChart3,
  Zap,
  Shield,
  Globe,
  Printer,
  ArrowRight,
  Check,
  Star,
  LogOut,
  Sparkles,
  ShoppingCart,
  RefreshCw,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

export default function Home() {
  const router = useRouter()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasCookieToken = document.cookie.split('; ').some((row) => row.startsWith('token='))
      if (!hasCookieToken) localStorage.clear()
      const token = localStorage.getItem('token')
      setIsLoggedIn(!!token)

      const onScroll = () => setScrolled(window.scrollY > 20)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [])

  async function handleLogout() {
    try {
      await api.post('/auth/logout')
    } catch (e) {
      console.error('Gagal logout:', e)
    } finally {
      localStorage.clear()
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'userRole=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      setIsLoggedIn(false)
      window.location.href = '/login'
    }
  }

  const features = [
    {
      icon: <ShoppingCart size={20} />,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Terminal POS Kasir',
      desc: 'Antarmuka kasir yang cepat dan intuitif. Scan barcode, terima pembayaran tunai, QRIS, atau transfer — selesai dalam hitungan detik.',
    },
    {
      icon: <Package size={20} />,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
      title: 'Manajemen Stok Multi-Outlet',
      desc: 'Pantau sisa stok di semua cabang toko secara real-time. Sistem otomatis mengurangi stok saat transaksi selesai.',
    },
    {
      icon: <Printer size={20} />,
      color: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/20',
      title: 'Barcode & Label SKU',
      desc: 'Generate kode barcode unik untuk setiap produk dan langsung cetak label stiker harga via printer thermal.',
    },
    {
      icon: <BarChart3 size={20} />,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      title: 'Laporan Keuangan Real-time',
      desc: 'Dashboard laporan omset, laba bersih, pengeluaran operasional, dan rekap shift kasir tersedia kapan saja.',
    },
    {
      icon: <Users size={20} />,
      color: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/20',
      title: 'Program Loyalitas Member',
      desc: 'Simpan riwayat belanja pelanggan dan terapkan diskon member otomatis berdasarkan total akumulasi transaksi.',
    },
    {
      icon: <RefreshCw size={20} />,
      color: 'text-blue-300',
      bg: 'bg-blue-500/10 border-blue-500/20',
      title: 'Sinkronisasi Cloud',
      desc: 'Semua data tersimpan aman di cloud. Akses dari mana saja, backup otomatis, dan tidak ada risiko kehilangan data.',
    },
  ]

  const stats = [
    { value: '500+', label: 'Toko Aktif' },
    { value: '2Jt+', label: 'Transaksi Diproses' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '<50ms', label: 'Response Time' },
  ]

  const pricing = [
    {
      name: 'Starter',
      price: 'Gratis',
      sub: 'Selamanya',
      color: 'border-slate-700',
      badge: null,
      features: [
        '1 outlet / toko',
        'Terminal kasir dasar',
        'Manajemen stok sederhana',
        'Laporan harian',
        'Support via email',
      ],
      cta: 'Mulai Gratis',
      ctaStyle: 'border border-slate-600 text-slate-300 hover:bg-slate-800',
    },
    {
      name: 'Pro',
      price: 'Rp 299.000',
      sub: '/bulan',
      color: 'border-blue-500/50',
      badge: 'Paling Populer',
      features: [
        'Hingga 5 outlet',
        'Terminal POS lengkap',
        'Stok multi-outlet real-time',
        'Barcode & cetak label',
        'Laporan keuangan lengkap',
        'Program member & diskon',
        'Support prioritas',
      ],
      cta: 'Coba 14 Hari Gratis',
      ctaStyle: 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 glow-blue',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      sub: 'Hubungi kami',
      color: 'border-cyan-500/30',
      badge: null,
      features: [
        'Outlet tidak terbatas',
        'Semua fitur Pro',
        'Custom integrasi API',
        'Dedicated server',
        'SLA 99.9% guaranteed',
        'On-site training',
        'Account manager',
      ],
      cta: 'Hubungi Sales',
      ctaStyle: 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10',
    },
  ]

  const testimonials = [
    {
      name: 'Arini Rahmawati',
      role: 'Owner — Retail Fashion Modis, Surabaya',
      avatar: 'A',
      color: 'bg-blue-600',
      quote: 'NovaPOS benar-benar mengubah cara kami mengelola toko. Laporan keuangan yang dulu butuh 2 jam kini selesai dalam hitungan menit.',
      stars: 5,
    },
    {
      name: 'Budi Santoso',
      role: 'Manajer — Toko Elektronik Cahaya',
      avatar: 'B',
      color: 'bg-cyan-600',
      quote: 'Fitur multi-outlet sangat membantu. Saya bisa pantau stok di 3 cabang sekaligus dari handphone tanpa harus datang langsung.',
      stars: 5,
    },
    {
      name: 'Dewi Kusuma',
      role: 'Owner — Kedai Kopi Nusantara',
      avatar: 'D',
      color: 'bg-amber-500',
      quote: 'Antarmuka kasirnya simpel banget. Karyawan baru langsung bisa pakai dalam 30 menit pertama. Recommended!',
      stars: 5,
    },
  ]

  const faqs: FAQItem[] = [
    {
      question: 'Apakah NovaPOS bisa digunakan untuk bisnis selain retail?',
      answer: 'Ya! NovaPOS dirancang fleksibel untuk berbagai jenis bisnis — termasuk toko fashion, kedai kopi, minimarket, toko elektronik, dan banyak lagi. Sistem dapat dikonfigurasi sesuai kebutuhan spesifik bisnis Anda.',
    },
    {
      question: 'Bagaimana proses onboarding dan setup awal?',
      answer: 'Setelah mendaftar, Anda akan mendapat panduan setup step-by-step. Tim kami siap membantu migrasi data dari sistem lama, konfigurasi produk, dan pelatihan staf kasir. Proses onboarding umumnya selesai dalam 1-2 hari kerja.',
    },
    {
      question: 'Apakah data saya aman jika internet mati?',
      answer: 'NovaPOS mendukung mode offline. Transaksi tetap bisa diproses saat internet tidak tersedia, dan data akan otomatis tersinkronisasi ke cloud begitu koneksi kembali. Data Anda tidak akan pernah hilang.',
    },
    {
      question: 'Perangkat apa yang didukung untuk menjalankan NovaPOS?',
      answer: 'NovaPOS berbasis web sehingga berjalan di semua browser modern — laptop, PC, tablet, bahkan smartphone. Untuk kasir, kami merekomendasikan layar minimal 10 inci agar pengalaman penggunaan optimal.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#070d1d] text-white selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden">

      {/* =========== NAVBAR =========== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#070d1d]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/30">
              N
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Nova<span className="text-gradient-novapos">POS</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
            <a href="#harga" className="hover:text-white transition-colors">Harga</a>
            <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard/admin" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
                >
                  <LogOut size={13} />
                  Keluar
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-xs font-semibold text-slate-400 hover:text-white transition-colors px-4 py-2">
                  Masuk
                </Link>
                <Link href="/login" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Coba Gratis
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1226]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-4">
            <a href="#fitur" className="block text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Fitur</a>
            <a href="#harga" className="block text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Harga</a>
            <a href="#testimoni" className="block text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Testimoni</a>
            <a href="#faq" className="block text-sm font-semibold text-slate-300 hover:text-white" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <div className="flex gap-3 pt-2 border-t border-white/5">
              <Link href="/login" className="flex-1 text-center rounded-xl border border-white/10 py-2.5 text-xs font-bold text-slate-300">Masuk</Link>
              <Link href="/login" className="flex-1 text-center rounded-xl bg-blue-600 py-2.5 text-xs font-bold text-white">Coba Gratis</Link>
            </div>
          </div>
        )}
      </nav>

      {/* =========== HERO =========== */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[0%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-800/5 blur-[120px] pointer-events-none" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-dark opacity-100 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-20 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold text-cyan-300 backdrop-blur-sm">
              <Sparkles size={12} className="animate-pulse" />
              <span>Platform Kasir & Cloud ERP Modern #1</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Sistem Kasir
                <br />
                <span className="text-gradient-novapos">Modern & Cerdas</span>
                <br />
                untuk Bisnis Anda
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-lg font-medium">
                NovaPOS mengintegrasikan kasir, manajemen stok, laporan keuangan, dan multi-outlet dalam satu platform yang mudah digunakan — tanpa kerumitan teknis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {isLoggedIn ? (
                <Link
                  href="/dashboard/admin"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] glow-blue"
                >
                  Buka Dashboard
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] glow-blue"
                >
                  Mulai Gratis Sekarang
                  <ArrowRight size={16} />
                </Link>
              )}
              <a
                href="#fitur"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-bold text-slate-300 hover:text-white transition-all backdrop-blur-sm"
              >
                Lihat Semua Fitur
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {[
                { icon: <Shield size={13} />, text: 'SSL 256-bit Encrypted' },
                { icon: <Zap size={13} />, text: 'Setup dalam 5 Menit' },
                { icon: <Check size={13} />, text: 'Tanpa Kartu Kredit' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <span className="text-emerald-500">{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right column — App mockup */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-md animate-float-slow">
              {/* Glow behind mockup */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 translate-y-8" />

              {/* Main card mockup */}
              <div className="relative bg-[#0d162d] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

                {/* Mockup header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/3">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-400" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400" />
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="ml-2 text-[9px] font-bold text-slate-400 uppercase tracking-wider">NovaPOS Terminal</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Mockup content */}
                <div className="p-4 space-y-3">

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: 'Omset Hari Ini', value: 'Rp 4,8Jt', color: 'text-blue-400' },
                      { label: 'Transaksi', value: '47', color: 'text-emerald-400' },
                      { label: 'Stok Habis', value: '3', color: 'text-amber-400' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-2.5">
                        <p className="text-[7px] text-slate-400 font-semibold">{stat.label}</p>
                        <p className={`text-sm font-black mt-0.5 ${stat.color}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Product list */}
                  <div className="bg-white/3 border border-white/5 rounded-2xl overflow-hidden">
                    <div className="px-3 py-2 border-b border-white/5">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Produk Terlaris</p>
                    </div>
                    {[
                      { name: 'Kemeja Oxford Premium', price: 'Rp 185.000', sold: 12, bar: '75%' },
                      { name: 'Celana Chino Slim', price: 'Rp 220.000', sold: 9, bar: '55%' },
                      { name: 'Kaos Oversize', price: 'Rp 95.000', sold: 7, bar: '40%' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 px-3 py-2.5 hover:bg-white/3 transition-colors">
                        <div className="h-6 w-6 rounded-lg bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-[10px]">
                          👕
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-bold text-white truncate">{item.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex-1 h-0.5 bg-white/5 rounded-full">
                              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: item.bar }} />
                            </div>
                            <span className="text-[7px] text-slate-400 font-mono">{item.sold} terjual</span>
                          </div>
                        </div>
                        <span className="text-[8px] font-black text-cyan-400 font-mono">{item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recent tx */}
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Transaksi Terbaru</p>
                    <ChevronRight size={11} className="text-slate-500" />
                  </div>
                  {[
                    { id: '#TX-4821', amount: 'Rp 405.000', method: 'QRIS', time: '14:32' },
                    { id: '#TX-4820', amount: 'Rp 185.000', method: 'Tunai', time: '14:18' },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/3 border border-white/5 rounded-xl px-3 py-2">
                      <div>
                        <p className="text-[9px] font-bold text-white">{tx.id}</p>
                        <p className="text-[7px] text-slate-400 mt-0.5">{tx.method} · {tx.time}</p>
                      </div>
                      <span className="text-[9px] font-black text-emerald-400 font-mono">{tx.amount}</span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Floating badge — shift open */}
              <div className="absolute -top-3 -right-3 bg-emerald-500 rounded-2xl px-3 py-2 shadow-xl shadow-emerald-500/30 animate-float">
                <p className="text-[8px] font-black text-white uppercase tracking-wider">Shift Aktif</p>
                <p className="text-xs font-black text-white">08:00 – 17:00</p>
              </div>

              {/* Floating badge — sync */}
              <div className="absolute -bottom-3 -left-3 bg-[#0e172e] border border-blue-500/30 rounded-2xl px-3 py-2 shadow-xl backdrop-blur-sm animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-1.5">
                  <RefreshCw size={9} className="text-cyan-400 animate-spin" style={{ animationDuration: '2s' }} />
                  <p className="text-[8px] font-bold text-cyan-300">Sync Cloud</p>
                </div>
                <p className="text-[7px] text-slate-400 mt-0.5">3 outlet terhubung</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070d1d] to-transparent pointer-events-none" />
      </section>

      {/* =========== STATS =========== */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-1">
                <p className="text-3xl sm:text-4xl font-black text-gradient-novapos">{stat.value}</p>
                <p className="text-sm text-slate-400 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== FEATURES =========== */}
      <section id="fitur" className="py-24 relative overflow-hidden">

        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
              <Zap size={11} />
              Fitur Unggulan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Semua yang Anda Butuhkan,
              <br />
              <span className="text-gradient-novapos">dalam Satu Platform</span>
            </h2>
            <p className="text-slate-400 text-sm font-medium max-w-xl mx-auto leading-relaxed">
              NovaPOS dirancang untuk menghilangkan kerumitan operasional bisnis retail — dari kasir hingga laporan keuangan.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 cursor-default overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none rounded-2xl" />

                <div className={`h-10 w-10 rounded-xl border flex items-center justify-center mb-4 ${feat.bg} ${feat.color}`}>
                  {feat.icon}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========== PRICING =========== */}
      <section id="harga" className="py-24 relative">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-800/8 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <TrendingUp size={11} />
              Harga Transparan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Pilih Paket yang
              <br />
              <span className="text-gradient-novapos">Sesuai Bisnis Anda</span>
            </h2>
            <p className="text-slate-400 text-sm font-medium">Tidak ada biaya tersembunyi. Batalkan kapan saja.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:items-start max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl border p-7 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] ${plan.color} ${i === 1 ? 'lg:scale-105 ring-1 ring-blue-500/30' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                      <Star size={9} fill="currentColor" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="space-y-1 mb-6">
                  <p className="text-sm font-bold text-slate-400">{plan.name}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400 font-semibold">{plan.sub}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs font-medium text-slate-300">
                      <Check size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/login"
                  className={`block w-full text-center rounded-xl py-3 text-xs font-bold transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========== TESTIMONIALS =========== */}
      <section id="testimoni" className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center space-y-4 mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
              <Star size={11} fill="currentColor" />
              Kata Mereka
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Dipercaya Ratusan
              <span className="text-gradient-novapos"> Pemilik Bisnis</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/8 rounded-2xl p-6 space-y-5 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className={`h-9 w-9 rounded-full ${t.color} flex items-center justify-center text-white font-black text-sm flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========== FAQ =========== */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">

          <div className="text-center space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
              Pertanyaan Umum
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ada Pertanyaan?
            </h2>
          </div>

          <div className="border border-white/8 rounded-2xl overflow-hidden divide-y divide-white/5 bg-white/[0.02]">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index
              return (
                <div key={index}>
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left text-sm font-bold text-white hover:bg-white/3 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-250 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed font-medium animate-in slide-in-from-top-1 duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========== CTA BOTTOM =========== */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative bg-gradient-to-br from-blue-950/80 to-slate-900/90 border border-blue-500/30 rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none rounded-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Siap Transformasi Bisnis Anda?
              </h2>
              <p className="text-slate-300 font-medium max-w-xl mx-auto text-sm leading-relaxed">
                Bergabung dengan 500+ toko yang sudah menggunakan NovaPOS. Mulai gratis, upgrade kapan saja — tanpa risiko.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Mulai Gratis Sekarang
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:sales@novapos.io"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm font-bold text-slate-300 hover:text-white transition-all"
                >
                  Hubungi Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== FOOTER =========== */}
      <footer className="border-t border-white/5 py-12 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-black text-xs shadow-lg shadow-blue-500/20">
                N
              </div>
              <span className="text-base font-black text-white">
                Nova<span className="text-gradient-novapos">POS</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 border border-white/8 px-2 py-0.5 rounded-full uppercase tracking-wider ml-1">v2.0</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">
              <a href="#fitur" className="hover:text-white transition-colors">Fitur</a>
              <a href="#harga" className="hover:text-white transition-colors">Harga</a>
              <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <Link href="/login" className="hover:text-white transition-colors">Masuk</Link>
            </div>

            <p className="text-xs text-slate-600 font-semibold">
              © {new Date().getFullYear()} NovaPOS. Hak Cipta Dilindungi.
            </p>

          </div>
        </div>
      </footer>

    </main>
  )
}
