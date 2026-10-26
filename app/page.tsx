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
    coverImage: '/IMAGES/FERSH111.jpeg',
    photos: ['/IMAGES/FERSH111.jpeg'],
  },
  {
    id: 'daniela',
    name: 'Daniela',
    cover