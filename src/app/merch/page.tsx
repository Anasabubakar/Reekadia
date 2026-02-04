'use client';

import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const products = [
  { id: 1, name: 'The Game Needs You Tee', price: '$35.00', category: 'Apparel', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop' },
  { id: 2, name: 'Reekadia Hoodie', price: '$65.00', category: 'Apparel', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'Banks Dad Hat', price: '$25.00', category: 'Accessories', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1936&auto=format&fit=crop' },
  { id: 4, name: 'Limited Vinyl', price: '$45.00', category: 'Music', image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?q=80&w=2076&auto=format&fit=crop' },
];

export default function MerchPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
           <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-2">Merch</h1>
           <p className="text-xl text-gray-400">Official apparel and collectibles.</p>
        </div>
        
        <button className="glass-panel px-6 py-3 rounded-full flex items-center gap-2 text-white hover:bg-white/10 transition-colors">
           <ShoppingCart size={20} />
           <span className="font-bold">Cart (0)</span>
        </button>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative aspect-[3/4] bg-white/5 rounded-3xl overflow-hidden mb-4 border border-white/5">
               <div 
                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                 style={{ backgroundImage: `url(${product.image})` }}
               ></div>
               
               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-wider rounded-xl hover:bg-purple-500 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                     Add to Cart
                  </button>
               </div>
               
               <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase text-white border border-white/10">
                  {product.category}
               </div>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{product.name}</h3>
            <p className="text-gray-400 font-mono">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
