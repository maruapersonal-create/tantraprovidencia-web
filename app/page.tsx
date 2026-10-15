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
    blurContent: false,
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
    blurContent: false,
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
    blurContent: false,
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
    blurContent: false,
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
    blurContent: false,
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
    blurContent: false,
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
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="