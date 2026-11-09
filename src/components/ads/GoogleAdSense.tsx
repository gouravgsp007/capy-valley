'use client';

import React from 'react';
import Script from 'next/script';

interface GoogleAdSenseProps {
  clientId?: string;
}

export default function GoogleAdSense({ clientId }: GoogleAdSenseProps) {
  const publisherId =
    clientId || process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX';

  // Do not load invalid/placeholder tags in SSR
  if (!publisherId) return null;

  return (
    <Script
      id="google-adsense"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
