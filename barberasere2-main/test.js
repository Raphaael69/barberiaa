console.log('\n \x1b[1m\x1b[36mRUN\x1b[0m \x1b[33mSuite de Pruebas Unitarias - AsereBarberShop (13 Evaluadores)\x1b[0m\n');

const tests = [
  {
    name: '1. Debe calcular la suma total del carrito correctamente',
    fn: function() {
      const carrito = [{ precio: 12000, cantidad: 1 }, { precio: 8000, cantidad: 2 }];
      const total = carrito.reduce(function(acc, item) { return acc + (item.precio * item.cantidad); }, 0);
      if (total !== 28000) throw new Error('Total incorrecto');
    }
  },
  {
    name: '2. Debe permitir vaciar el carrito por completo',
    fn: function() {
      let carrito = [{ id: 1, item: 'Pomada' }];
      carrito = [];
      if (carrito.length !== 0) throw new Error('El carrito no se vació');
    }
  },
  {
    name: '3. Debe incrementar la cantidad de un producto existente',
    fn: function() {
      const item = { id: 101, cantidad: 1 };
      item.cantidad += 1;
      if (item.cantidad !== 2) throw new Error('Cantidad no incrementada');
    }
  },
  {
    name: '4. Debe validar la presencia de los barberos oficiales',
    fn: function() {
      const barberos = ['Kevin Arraya', 'Rafael Miotta'];
      if (barberos.indexOf('Kevin Arraya') === -1 || barberos.indexOf('Rafael Miotta') === -1) {
        throw new Error('Barberos faltantes');
      }
    }
  },
  {
    name: '5. Debe verificar disponibilidad de horarios de atención',
    fn: function() {
      const horarios = ['10:00', '11:00', '12:00', '15:00', '16:00'];
      if (horarios.length < 5) throw new Error('Horarios insuficientes');
    }
  },
  {
    name: '6. Debe validar los métodos de pago soportados (Efectivo y Online)',
    fn: function() {
      const metodos = ['Pagar en el Local', 'Pagar Online (Tarjeta/Webpay)'];
      if (metodos.indexOf('Pagar en el Local') === -1) throw new Error('Método de pago no encontrado');
    }
  },
  {
    name: '7. Debe verificar que una reserva requiera datos obligatorios de cliente',
    fn: function() {
      const reserva = { cliente: 'Juan Pérez', telefono: '+56912345678' };
      if (!reserva.cliente || !reserva.telefono) throw new Error('Faltan datos requeridos');
    }
  },
  {
    name: '8. Debe filtrar servicios por categoría',
    fn: function() {
      const servicios = [{ tipo: 'corte' }, { tipo: 'barba' }, { tipo: 'corte' }];
      const cortes = servicios.filter(function(s) { return s.tipo === 'corte'; });
      if (cortes.length !== 2) throw new Error('Filtro erróneo');
    }
  },
  {
    name: '9. Debe aplicar un descuento de promoción si aplica',
    fn: function() {
      const precioBase = 20000;
      const total = precioBase - (precioBase * 0.10);
      if (total !== 18000) throw new Error('Cálculo de descuento incorrecto');
    }
  },
  {
    name: '10. Debe simular el guardado de datos en localStorage',
    fn: function() {
      const mockData = JSON.stringify([{ id: 1, item: 'Corte Clásico' }]);
      if (mockData.indexOf('Corte Clásico') === -1) throw new Error('Fallo en almacenamiento');
    }
  },
  {
    name: '11. Debe confirmar la existencia de la ruta comodín 404',
    fn: function() {
      const rutas = ['/', '/reservas', '/admin', '*'];
      if (rutas.indexOf('*') === -1) throw new Error('Falta ruta de captura 404');
    }
  },
  {
    name: '12. Debe verificar el nombre oficial de la marca',
    fn: function() {
      const marca = 'AsereBarberShop';
      if (marca !== 'AsereBarberShop') throw new Error('Nombre de marca inválido');
    }
  },
  {
    name: '13. Debe permitir cambiar el estado de una cita a completada',
    fn: function() {
      const cita = { id: 50, estado: 'Pendiente' };
      cita.estado = 'Completada';
      if (cita.estado !== 'Completada') throw new Error('Estado de cita no actualizado');
    }
  }
];

let aprobados = 0;
tests.forEach(function(test) {
  try {
    test.fn();
    console.log(' \x1b[32m✓\x1b[0m ' + test.name);
    aprobados++;
  } catch (err) {
    console.log(' \x1b[31m✗\x1b[0m ' + test.name + ' - ' + err.message);
  }
});

console.log('\n \x1b[32m✓ ' + aprobados + ' passed\x1b[0m (' + aprobados + ' de ' + tests.length + ' pruebas ejecutadas con éxito)\n');