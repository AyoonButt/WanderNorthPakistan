import React from 'react';
import type { AppProps } from 'next/app';
import '../index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';
import { TooltipProvider } from '../components/ui/tooltip';
import { Toaster } from '../components/ui/toaster';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Component {...pageProps} />
      </TooltipProvider>
    </QueryClientProvider>
  );
} 