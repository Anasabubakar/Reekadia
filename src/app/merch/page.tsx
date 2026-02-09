'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Reekadia Logo T-Shirt',
    category: 'Unisex / Cotton',
    price: '$25 USD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjAW09YqgZilWEiwp7rv0B8WyVMByz0Kj-4_SU7MEAxEArbwuSEQ8v8VVrL0TDUvhdxIAZRo859p-609wceJvAmTy8byWQ_ddE3LgAJGtEmDE7HEY_2U0miotLq46sJMJ8hpfk9OPS4oFoTXlCWxJBYBbpa8mPc9ehQRJ9Liel0DgvIIsp_dlkx71d4YUjED02zPKZJIEc0F4iqnFukHxowm1Aiwli32rkL2genYc6Si5z1nFUmaka9POGDzkILqZpwYVWVm90hcE',
    alt: 'Black t-shirt with Reekadia logo floating in glass block',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium cotton t-shirt with official Reekadia logo'
  },
  {
    name: 'Banks Music Hoodie',
    category: 'Oversized / Heavyweight',
    price: '$45 USD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP9gpNpSKWK0fkv7l2C9HbAVw-HDvCgDqPAuzp4wEt4t9i2o7VP7thzWzd1MZjHvskihQJ9AFwCs6J_K-HNgd8vIDiKDS_PQkexH612qvPbZIh8pw_Ajc1YmVIVz9bIe8hx-XMNZ5cJTp0-CmuZAANegRQmjA7DpeoW-W9TZLywcJcaxTd1rU7Ot-Nb2B6TKCXgE3KC0mFelJAzMp9xOHZMvVhBSmUTMYbQD9iggVIKQ5LLJ3_kWCrFCbaSpKniJjCzgUBcfBt_Qw',
    alt: 'Black hoodie with graphic print floating in glass block',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Comfortable hoodie with Banks Music branding'
  },
  {
    name: 'Reekado Banks Cap',
    category: 'Adjustable',
    price: '$20 USD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE2u-ApeU0XQ-yYQREKLwhMsBeFCPANWYyaLf-i08kYZy2Vun5DaT_pw1tTd9G3eiGVTsIqCsM2y5ZMITt3ObtH-X1csQeCHI16Hn_Gf971v1KS9FDaG5NjSvAEdiPN7IsUvkcMSkZHZ333h3U65b0omJS_PeTOumSMaStAuQrJTYLt2SMh0SkC-KnbXe97yGvSqG6aXmO19T4hUvZeuYErU6mSqEquJFfrIoa4u_7N-sxM7vk9B9yI0pfM7bhx39za8Zq82VYdis',
    alt: 'Black cap with embroidery floating in glass block',
    sizes: ['One Size'],
    description: 'Adjustable cap with embroidered logo'
  },
  {
    name: 'Limited Edition Poster',
    category: 'Print',
    price: '$15 USD',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmKg5JlvGdYDg6bjdmQGMn2EyLIkOoSVv_y1hOG5blJIgkZ2m7z9gVDLfqb4bkk0nlpfREMAVOC4x19m2vLrL_bRa7QC0OEJaxZweDOHuZBppL7kDUVqcjKy7otVLNLTLwAbOH1cSKeqF2DAcVjli2BgbGG-_kZv21Wl5fcO8Uwlovu3c0MFcqGa6IZego09w3ebyKvJMKz3PvkmKhdz-WjBT_tqcf2MhvWRMf3NdvBG4abwc',
    alt: 'High-quality print poster',
    sizes: ['18"x24"', '24"x36"'],
    description: 'High-quality print poster, limited edition'
  },
];

const MerchPage = () => {
  return (
    <div className="text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
      <div className="w-full bg-black/40 backdrop-blur-sm border-b border-white/5 py-2 px-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-widest text-white/50 z-50 relative">
        <span>Secure Checkout via</span>
        <div className="flex items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <span className="font-bold tracking-tight">PAYSTACK</span>
          <span className="w-px h-3 bg-white/20"></span>
          <span className="font-bold tracking-tight">FLUTTERWAVE</span>
          <span className="w-px h-3 bg-white/20"></span>
          <span className="font-bold tracking-tight">STRIPE</span>
        </div>
      </div>

      <main className="flex flex-col min-h-screen">
        <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold tracking-widest uppercase">New Drop Available</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tighter leading-[0.9]"
            >
              THE REEKADIA<br /><span className="text-stroke text-glow text-white">COLLECTION</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-4 mt-4"
            >
              <button className="flex items-center gap-2 h-12 px-8 rounded-full bg-primary hover:bg-red-600 text-white text-sm font-bold tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(236,19,19,0.4)] hover:shadow-[0_0_30px_rgba(236,19,19,0.6)]">
                Shop Now
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </motion.div>
          </div>
        </section>

        <section className="w-full px-4 sm:px-8 py-20 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-30 pointer-events-none"></div>
          <div className="absolute bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>

          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div>
                <h3 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">The Store</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Latest Arrivals</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 text-sm font-medium transition-colors">
                  Sort by: Featured
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group liquid-glass rounded-[2rem] p-4 flex flex-col gap-4 transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-black/40">
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/10 to-transparent opacity-50"></div>
                    <div
                      className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${product.imageUrl}')` }}
                      aria-label={product.alt}
                    ></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="size-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-2 pb-2">
                    <div>
                      <h3 className="text-white text-lg font-bold leading-tight">{product.name}</h3>
                      <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{product.category}</p>
                      <p className="text-white/60 text-xs mt-1">{product.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-lg">{product.price}</p>
                      </div>
                      <div className="relative">
                        <select className="bg-white/10 border border-white/20 rounded-full py-1.5 px-3 text-xs text-white focus:outline-none focus:ring-1 focus:ring-primary appearance-none pr-6">
                          <option value="">Select Size</option>
                          {product.sizes.map((size, idx) => (
                            <option key={idx} value={size}>{size}</option>
                          ))}
                        </select>
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 material-symbols-outlined text-xs pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <button className="w-full h-12 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(236,19,19,0.3)]">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Secure Payment Information */}
        <section className="py-12 relative border-t border-white/10 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-white mb-6">Secure Payment</h3>
            <p className="text-white/80 mb-6">We accept all major payment methods including Paystack, Flutterwave, and Stripe for secure transactions.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-sm font-medium">Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <span className="text-sm font-medium">Fast Shipping</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary">undo</span>
                <span className="text-sm font-medium">Easy Returns</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative border-t border-white/10">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <span className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4 block">The Tribe</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">DON'T MISS THE DROP</h2>
            <p className="text-white/60 mb-8">Subscribe for exclusive early access to Vol. 2 releases and tour dates.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                className="flex-1 h-12 bg-white/5 border border-white/10 rounded-full px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors uppercase text-sm font-medium"
                placeholder="ENTER YOUR EMAIL"
                type="email"
              />
              <button
                className="h-12 px-8 bg-primary rounded-full text-white font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(236,19,19,0.3)]"
                type="button"
              >
                Join
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MerchPage;