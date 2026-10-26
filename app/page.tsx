'use client';

import React, { useEffect, useMemo } from 'react';

interface Masajista {
  id: string;
  name: string;
  videoUrl: string;
}

const BASE_WHATSAPP_URL = 'https://wa.me/56944127664?text=';
const INSTAGRAM_URL = 'https://www.instagram.com/massage_fernanda';

// 1. MASAJE EXPRESS (30 MINUTOS)
const PLANES_EXPRESS = [
  {
    id: 'express-basico',
    title: 'Express Básico',
    priceNeto: 40000,
    time: '30 min',
    popular: false,
    tag: 'Rápido & Eficaz',
    contenido:
      'Masaje profesional en una zona (espalda o piernas) + estimulación manual (masajista con uniforme).',
  },
  {
    id: 'express-avanzado',
    title: 'Express Avanzado',
    priceNeto: 50000,
    time: '30 min',
    popular: true,
    tag: 'MÁS SOLICITADO 30 MIN',
    contenido:
      'Masaje profesional en una zona (espalda o piernas) + NURU REAL, es decir, masaje sensual piel con piel, cliente y masajista al completo desnudo, finaliza con estimulación manual.',
  },
  {
    id: 'express-full',
    title: 'Express Full',
    priceNeto: 70000,
    time: '30 min',
    popular: false,
    tag: 'Exclusivo Express',
    contenido:
      'Masaje profesional en una zona (espalda o piernas) + exquisito y placentero contacto.',
  },
];

// 2. MASAJE PREMIUM (60 MINUTOS)
const PLANES_PREMIUM = [
  {
    id: 'premium-basico',
    title: 'Premium Básico',
    priceNeto: 50000,
    time: '60 min',
    popular: false,
    tag: 'Relajación Completa',
    contenido:
      'Masaje profesional en cuerpo completo + estimulación manual (masajista con uniforme).',
  },
  {
    id: 'premium-avanzado',
    title: 'Premium Avanzado',
    priceNeto: 70000,
    time: '60 min',
    popular: true,
    tag: 'RECOMENDADO ⭐',
    contenido:
      'Masaje profesional en cuerpo completo + NURU REAL, es decir, masaje sensual piel con piel, cliente y masajista al completo desnudo, finaliza con estimulación oral c/c.',
  },
  {
    id: 'premium-full',
    title: 'Premium Full',
    priceNeto: 100000,
    time: '60 min',
    popular: false,
    tag: 'Exclusivo VIP',
    contenido:
      'Masaje profesional en cuerpo completo + exquisito y placentero piel a piel incluye contacto. (servicio vip)',
  },
];

const MASAJISTAS: Masajista[] = [
  {
    id: 'fernanda',
    name: 'Fernanda',
    videoUrl: '/VIDEOS/FERNANDA.mp4',
  },
  {
    id: 'daniela',
    name: 'Daniela',
    videoUrl: '/VIDEOS/DANIELA.mp4',
  },
  {
    id: 'mara',
    name: 'Mara',
    videoUrl: '/VIDEOS/MARA2.mp4',
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    videoUrl: '/VIDEOS/TATIANA3.mp4',
  },
  {
    id: 'nikki',
    name: 'Nikki',
    videoUrl: '/VIDEOS/NIKKI.mp4',
  },
];

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C9.284 2 8.944 2.012 7.877 2.06 6.812 2.108 6.086 2.278 5.45 2.525A5.143 5.143 0 003.586 3.586C2.937 4.235 2.525 4.962 2.278 5.998C2.012 7.064 2 7.404 2 10.12V13.88C2 16.596 2.012 16.936 2.06 18.003C2.108 19.068 2.278 19.794 2.525 20.43C2.772 21.066 3.184 21.793 3.833 22.442C4.482 23.091 5.209 23.503 6.245 23.75C7.311 24.016 7.651 24.028 10.367 24.028H14.127C16.843 24.028 17.183 24.016 18.25 23.968C19.315 23.92 20.041 23.75 20.677 23.503A5.143 5.143 0 0022.541 22.442C23.19 21.793 23.602 21.066 23.849 20.03C24.115 18.964 24.127 18.624 24.067 8.025C24.019 6.96 23.849 6.234 23.602 5.598C23.355 4.962 22.943 4.235 22.294 3.586A5.143 5.143 0 0020.43 2.525C19.394 2.278 18.668 2.108 17.602 2.06C16.535 2.012 16.195 2 13.479 2H12zm0 1.983c2.67 0 2.987.01 4.042.058 1.002.046 1.546.213 1.908.354.48.186.822.408 1.182.768.36.36.582.702.768 1.182.141.362.308.906.354 1.908.048 1.055.058 1.372.058 4.042v3.382c0 2.67-.01 2.987-.058 4.042-.046 1.002-.213 1.546-.354 1.908a3.16 3.16 0 01-.768 1.182 3.16 3.16 0 01-1.182.768c-.362.141-.906.308-1.908.354-1.055.048-1.372.058-4.042.058h-3.382c-2.67 0-2.987-.01-4.042-.058-1.002-.046-1.546-.213-1.908-.354a3.16 3.16 0 01-1.182-.768 3.16 3.16 0 01-.768-1.182c-.141-.362-.308-.906-.354-1.908-.048-1.055-.058-1.372-.058-4.042V9.891c0-2.67.01-2.987.058-4.042.046-1.002.213-1.546.354-1.908a3.16 3.16 0 01.768-1.182 3.16 3.16 0 011.182-.768c.362-.141.906-.308 1.908-.354 1.055-.048 1.372-.058 4.042-.058H12zm0 3.392a5.96 5.96 0 100 11.92 5.96 5.96 0 000-11.92zm0 1.983a3.977 3.977 0 110 7.954 3.977 3.977 0 010-7.954zm6.406-3.845a1.392 1.392 0 100 2.784 1.392 1.392 0 000-2.784z"
      fill="currentColor"
    />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export default function TantraProvidencia() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleDragStart = (e: DragEvent) => e.preventDefault();
    const handleCopy = (e: ClipboardEvent) => e.preventDefault();
    const handleSelectStart = (e: Event) => e.preventDefault();

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (
        (e.ctrlKey || e.metaKey) &&
        ['s', 'p', 'u', 'c', 'x', 'a', 'i', 'j', 'k', '+', '-', '0', '='].includes(key)
      ) {
        e.preventDefault();
      }
      if (e.key === 'F12' || e.key === 'PrintScreen') {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleGesture = (e: Event) => e.preventDefault();
    
    let lastTouchEnd = 0;