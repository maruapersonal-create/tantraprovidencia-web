import { NextResponse } from 'next/server';
import { MercadoPagoConfig, Preference } from 'mercadopago';

export async function POST(request: Request) {
  try {
    const token = process.env.MP_ACCESS_TOKEN;

    if (!token) {
      console.error('ERROR: No se encontró MP_ACCESS_TOKEN en .env.local');
      return NextResponse.json({ error: 'Falta el token de Mercado Pago' }, { status: 500 });
    }

    const client = new MercadoPagoConfig({ accessToken: token });
    const body = await request.json();
    const { titulo, precioNeto } = body;

    // Convertir a número y calcular el total con IVA (19%)
    const valorBase = Number(precioNeto);
    const totalConIva = Math.round(valorBase * 1.19);

    const preference = new Preference(client);
    const result = await preference.create({
      body: {
        items: [
          {
            id: 'reserva-servicio',
            title: `Reserva: ${titulo} (Incluye IVA)`,
            quantity: 1,
            unit_price: totalConIva,
            currency_id: 'CLP',
          },
        ],
      },
    });

    const initPoint = result.init_point || result.sandbox_init_point;

    if (!initPoint) {
      throw new Error('Mercado Pago no devolvió la URL de pago');
    }

    return NextResponse.json({ url: initPoint });
  } catch (error: any) {
    console.error('Error detallado de Mercado Pago:', error);
    return NextResponse.json(
      { error: error?.message || 'Error al generar el pago' },
      { status: 500 }
    );
  }
}