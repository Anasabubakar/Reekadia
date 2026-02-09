'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Reekadia Logo Tee',
    category: 'Unisex / Cotton',
    price: '₦15,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjAW09YqgZilWEiwp7rv0B8WyVMByz0Kj-4_SU7MEAxEArbwuSEQ8v8VVrL0TDUvhdxIAZRo859p-609wceJvAmTy8byWQ_ddE3LgAJGtEmDE7HEY_2U0miotLq46sJMJ8hpfk9OPS4oFoTXlCWxJBYBbpa8mPc9ehQRJ9Liel0DgvIIsp_dlkx71d4YUjED02zPKZJIEc0F4iqnFukHxowm1Aiwli32rkL2genYc6Si5z1nFUmaka9POGDzkILqZpwYVWVm90hcE',
    alt: 'Black t-shirt with Reekadia logo floating in glass block',
    tag: null,
  },
  {
    name: 'Banks Music Hoodie',
    category: 'Oversized / Heavyweight',
    price: '₦25,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP9gpNpSKWK0fkv7l2C9HbAVw-HDvCgDqPAuzp4wEt4t9i2o7VP7thzWzd1MZjHvskihQJ9AFwCs6J_K-HNgd8vIDiKDS_PQkexH612qvPbZIh8pw_Ajc1YmVIVz9bIe8hx-XMNZ5cJTp0-CmuZAANegRQmjA7DpeoW-W9TZLywcJcaxTd1rU7Ot-Nb2B6TKCXgE3KC0mFelJAzMp9xOHZMvVhBSmUTMYbQD9iggVIKQ5LLJ3_kWCrFCbaSpKniJjCzgUBcfBt_Qw',
    alt: 'Black hoodie with graphic print floating in glass block',
    tag: 'Best Seller',
  },
  {
    name: 'Vol. 1 Vinyl LP',
    category: 'Limited Edition',
    price: '₦20,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApiCxX0BuUfHW_PDF6I71u9KKIkNgH1QRHZxTXYMYAODL0dRKn5w_OQPwydPNeFr_200PAMtb-3pZgL1j3ikmUmnjdEqsqdxTiR1Fos8m3rXBfsqk-Sfuo1SJSE4fPRzs1exUPPFJCmWgF9vMuaJCG9bjKcGQORP8ov1lWkhCgHRLod3C2YcWkGFpmPcRGFligFA--6yFFzt8XIz0A_AaBX2zFLr_x1Hn73jq4jsTTkAp-49DlkoR84BXdHW6fJFEWQvtutL6FZvs',
    alt: 'Vinyl record in sleeve floating in glass block',
    tag: null,
  },
  {
    name: 'Reekadia Dad Cap',
    category: 'One Size',
    price: '₦10,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE2u-ApeU0XQ-yYQREKLwhMsBeFCPANWYyaLf-i08kYZy2Vun5DaT_pw1tTd9G3eiGVTsIqCsM2y5ZMITt3ObtH-X1csQeCHI16Hn_Gf971v1KS9FDaG5NjSvAEdiPN7IsUvkcMSkZHZ333h3U65b0omJS_PeTOumSMaStAuQrJTYLt2SMh0SkC-KnbXe97yGvSqG6aXmO19T4hUvZeuYErU6mSqEquJFfrIoa4u_7N-sxM7vk9B9yI0pfM7bhx39za8Zq82VYdis',
    alt: 'Black cap with embroidery floating in glass block',
    tag: null,
  },
  {
    name: 'Tour Tote Bag',
    category: 'Canvas',
    price: '₦8,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAON9JeYQ8SgPJsfHZYhFmUCUoX5qv2YKAWHOe7iqoWBMr06DiH3Um5C5UUDnMWmOLQbekz_dw_-VNGXy70Wpn_YZuoTw1VW2jrD4RojsL_4nF-U0nFAt5uWIOFYHt8yn_qqB-vQSxcNSvQexwGgPN18I-YXofAh8nSlPjYlW202UXVZP_W-nveDfaDXYIgRk-licRZ5z6ZjCudnySpVqI24em2p-dfCeQs0XvCzQd5og6uW70XjMszW-2qv5VLW4SYFYrGQnh5C8c',
    alt: 'Tote bag with print floating in glass block',
    tag: null,
  },
  {
    name: 'Liquid Bottle',
    category: 'Stainless Steel',
    price: '₦12,000',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbSMH1EQF0XLddPqH1eprZO7q-_2bQADefujDWs6-fUGMbrWGK2Z5KkVByI00FuaoQVCd6_Xyvs9k9Z8W8PeHxrUXrm_xeigXYqwS8Wh2ZlL-LUMgyBCszGcq94bct12TvknPb0-JM89j76tIZe6ygNWQzDoHE4xM0SDzap4Oq5m0znjdV-VZxLw05qLF_0HPKCYD1JjfcKvf4d1FmuZtVWzLAnBehnjFxAixxfarz8mDbAk67PROGbbAVgvGb863GVRVdEoJ9oXA',
    alt: 'Water bottle metallic floating in glass block',
    tag: null,
  },
];

const MerchPage = () => {
  return (
    <div className="bg-background-dark text-white font-display overflow-x-hidden selection:bg-primary selection:text-white">
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
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrIbv1Q_4vW4GVgsRP3o_7I2s4DsBt0EFprN5E2qHJRlfrFIcQOYxVZOWyRC5i3HRBiFlALYyJDdp3DO4q54p3-G-QuxyDVcV9syZDBW6I3DIqciQDboau7FNey1kisglCW6zr9rQ-Un8BpGcY5T8bKZCmiDgoBhV-Ehef8Hj8tDE90nI26XR6WzVz4GmpcjR98MM0O4f-MmmcFUIOWM-V8buR3Xrs9_D43ePi6OhWlqfm11-PHOIUwRP-NrZ6JZdi9JAmfB0qsHc')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/40 to-background-dark z-0"></div>
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 text-base md:text-lg max-w-xl font-light leading-relaxed"
            >
              Official merchandise featuring the new Liquid Glass aesthetic. <br className="hidden md:block" />Premium materials meeting futuristic design.
            </motion.p>
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

        <section className="w-full px-4 sm:px-8 py-20 bg-background-dark relative">
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
                    {product.tag && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.tag}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="size-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 px-2 pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white text-lg font-bold leading-tight">{product.name}</h3>
                        <p className="text-white/40 text-xs mt-1 uppercase tracking-wider">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">{product.price}</p>
                      </div>
                    </div>
                    <button className="w-full h-12 mt-2 rounded-full bg-white/5 hover:bg-primary border border-white/10 hover:border-primary text-white font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(236,19,19,0.3)]">
                      <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full flex justify-center mt-20">
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Load More Products
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black relative border-t border-white/10">
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