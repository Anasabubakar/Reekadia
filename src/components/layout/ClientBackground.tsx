'use client';

import dynamic from 'next/dynamic';

const Background = dynamic(() => import('./Background'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-[#110505]" aria-hidden="true" />,
});

export default function ClientBackground() {
  return <Background />;
}
