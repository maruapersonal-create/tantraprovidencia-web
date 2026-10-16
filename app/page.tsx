'use client';

import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';

interface Masajista {
  id: string;
  name: string;
  coverImage: string;
  photos: string[];
}

const BASE_WHATSAPP_URL = 'https://wa.me/56944127664?text=';
const INSTAGRAM_URL = 'https://www.instagram.com/massage_fernanda';

// 1. MASAJE EXPRESS (30 MINUTOS)
const PLANES_EXPRESS = [
  {
    id: 'express-basico',
    title: 'Express Básico',
    priceNeto: 35000,
    time: '30 min',
    popular: false,
    tag: 'Rápido & Eficaz',
    contenido:
      'Masaje en una zona (espalda o piernas) + estimulación manual (masajista con ropa).',
  },
  {
    id: 'express-avanzado',
    title: 'Express Avanzado',
    priceNeto: 45000,
    time: '30 min',
    popular: true,
    tag: 'MÁS SOLICITADO 30 MIN',
    contenido:
      'Masaje en una zona (espalda o piernas) + estimulación oral c/c (masajista en lencería).',
  },
  {
    id: 'express-full',
    title: 'Express Full',
    priceNeto: 70000,
    time: '30 min',
    popular: false,
    tag: 'Exclusivo Express',
    contenido:
      'Masaje en una zona (espalda o piernas) + contacto.',
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
      'Masaje cuerpo completo + estimulación manual (masajista con ropa).',
  },
  {
    id: 'premium-avanzado',
    title: 'Premium Avanzado',
    priceNeto: 65000,
    time: '60 min',
    popular: true,
    tag: 'RECOMENDADO ⭐',
    contenido:
      'Masaje cuerpo completo + estimulación oral c/c (masajista en lencería).',
  },
  {
    id: 'premium-full',
    title: 'Premium Full',
    priceNeto: 100000,
    time: '60 min',
    popular: false,
    tag: 'Exclusivo VIP',
    contenido:
      'Masaje cuerpo completo + contacto.',
  },
];

const MASAJISTAS: Masajista[] = [
  {
    id: 'fernanda',
    name: 'Fernanda',
    coverImage: '/IMAGES/OCTUBREFERNANDA11.jpeg',
    photos: ['/IMAGES/OCTUBREFERNANDA11.jpeg'],
  },
  {
    id: 'daniela',
    name: 'Daniela',
    coverImage: '/IMAGES/OCTUBREDANIELA11.jpeg',
    photos: ['/IMAGES/OCTUBREDANIELA11.jpeg'],
  },
  {
    id: 'mara',
    name: 'Mara',
    coverImage: '/IMAGES/MARA2.jpeg',
    photos: ['/IMAGES/MARA2.jpeg'],
  },
  {
    id: 'tatiana',
    name: 'Tatiana',
    coverImage: '/IMAGES/TATIANA3.jpeg',
    photos: ['/IMAGES/TATIANA3.jpeg'],
  },
  {
    id: 'nikki',
    name: 'Nikki',
    coverImage: '/IMAGES/NIKKI.jpeg',
    photos: ['/IMAGES/NIKKI.jpeg'],
  },
];

const InstagramIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C9.284 2 8.944 2.012 7.877 2.06 6.812 2.108 6.086 2.278 5.45 2.525A5.143 5.143 0 003.586 3.586C2.937 4.235 2.525 4.962 2.278 5.998C2.012 7.064 2 7.404 2 10.12V13.88C2 16.596 2.012 16.936 2.06 18.003C2.108 19.068 2.278 19.794 2.525 20.43C2.772 21.066 3.184 21.793 3.833 22.442C4.482 23.091 5.209 23.503 6.245 23.75C7.311 24.016 7.651 24.028 10.367 24.028H14.127C16.843 24.028 17.183 24.016 18.25 23.968C19.315 23.92 20.041 23.75 20.677 23.503A5.143 5.143 0 0022.541 22.442C23.19 21.793 23.602 21.066 23.849 20.03C24.115 18.964 24.127 18.624 24.127 15.908V12.148C24.127 9.432 24.115 9.092 24.067 8.025C24.019 6.96 23.849 6.234 23.602 5.598C23.355 4.962 22.943 4.235 22.294 3.586A5.143 5.143 0 0020.43