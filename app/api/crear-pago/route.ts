import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN || '',
});

export async function POST(request: Request) {
  try {
    const { titulo, precioNeto } = await request.json();

    // Cálculo del IVA (19%)
    const iva = Math.round(precioNeto * 0.19);
    const totalConIva = precioNeto + iva;

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            id: 'reserva-servicio',
            title: `Reserva: ${titulo} (IVA incl.)`,
            quantity: 1,
            unit_price: totalConIva,
            currency_id: 'CLP',
          },
        ],
        back_urls: {
          success: 'https://tantraprovidencia.cl', // Reemplaza por tu dominio real
          failure: 'https://tantraprovidencia.cl',
          pending: 'https://tantraprovidencia.cl',
        },
        auto_return: 'approved',
      },
    });

    return NextResponse.json({ init_point: result.init_point });
  } catch (error) {
    console.error('Error al generar pago:', error);
    return NextResponse.json({ error: 'Error procesando el pago' }, { status: 500 });
  }
}