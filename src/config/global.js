export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Tasas de interés',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tasas de interés',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interés simple',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Interés compuesto',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tasas nominales, efectivas y periódicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tasas nominales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tasas efectivas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tasas periódicas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Tasas de interés vencidas y anticipadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tasas de interés vencidas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tasas de interés anticipadas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Anualidades, tipos de pagos e ingresos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Anualidades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de pagos y ejemplos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Miguel Seco, J. M. D. & Miguel Solano, A. D. (2020). Matemáticas financieras: problemas resueltos: ( ed.). Editorial Tébar Flores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/176521 ',
    },
    {
      referencia:
        'Ramírez Molinares, C. V., & García Barbosa, M. (2011). Fundamentos de Matemáticas Financieras. Universidad Veracruzana. ',
      link:
        'https://www.uv.mx/personal/cbustamante/files/2011/06/matematicas_financieras.pdf ',
    },
    {
      referencia:
        'Naranjo Bermúdez, L. A. (2019). Fundamentos y aplicaciones de matemáticas financieras: (1 ed.). D - Institución Universitaria de Envigado. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/226485 ',
    },
    {
      referencia:
        'Escobar Arias, G. E. (2020). Matemáticas financieras: ( ed.). Editorial Universidad Autónoma de Manizales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/175093 ',
    },
    {
      referencia:
        'Rivera Salcedo, J. (2010). Matemáticas financieras: ( ed.). Instituto Politécnico Nacional. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/72202',
    },
    {
      referencia:
        'García Boza, J. (2016). Matemáticas financieras: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49157l',
    },
    {
      referencia:
        'Apraiz Larragán, A. (2003). Fundamentos de matemática financiera: (2 ed.). Editorial Desclée de Brouwer. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/47688',
    },
    {
      referencia:
        'Valencia Angulo, OE, Valencia Angulo, EA y Escudero, CA (2011). Financiación e indiferencia en el valor de la anualidad cuando el número de periodos tiende a infinito. Scientia Et Technica , XVI (49), 153-157. ',
      link: 'https://www.redalyc.org/articulo.oa?id=84922625026 ',
    },
  ],
  glosario: [
    {
      termino: 'Anualidad Diferida',
      significado:
        'Serie de pagos iguales que comienzan después de un periodo de aplazamiento definido.',
    },
    {
      termino: 'Capitalización Continua',
      significado:
        'Método donde los intereses se calculan y añaden constantemente al capital, en lugar de hacerlo en intervalos definidos.',
    },
    {
      termino: 'Cuota Fija',
      significado:
        'Pago periódico constante que incluye intereses y amortización del capital en préstamos o anualidades.',
    },
    {
      termino: 'Flujo de Caja Libre',
      significado:
        'Efectivo disponible después de cubrir gastos operativos y necesidades de inversión.',
    },
    {
      termino: 'Interés Acumulado',
      significado:
        'Intereses generados que no han sido pagados ni retirados y se suman al saldo inicial.',
    },
    {
      termino: 'Interés Nominal',
      significado:
        'Porcentaje de interés acordado en el contrato, sin ajustar por inflación o frecuencia de capitalización.',
    },
    {
      termino: 'Periodo de Capitalización',
      significado:
        'Intervalo de tiempo en el que los intereses generados se añaden al capital.',
    },
    {
      termino: 'Plazo de Amortización',
      significado:
        'Tiempo total necesario para liquidar completamente un préstamo mediante pagos periódicos.',
    },
    {
      termino: 'Tabla de Amortización',
      significado:
        'Representación detallada de cada pago de un préstamo, indicando intereses, capital y saldo pendiente.',
    },
    {
      termino: 'Tasa Real',
      significado:
        'Tasa de interés ajustada por inflación, que refleja el poder adquisitivo del dinero.',
    },
    {
      termino: 'Tasa Variable',
      significado:
        'Porcentaje de interés que cambia durante el plazo de un préstamo o inversión según condiciones del mercado.',
    },
    {
      termino: 'Tiempo de Recuperación',
      significado:
        'Periodo necesario para recuperar la inversión inicial mediante los flujos de efectivo generados.',
    },
    {
      termino: 'Valor Actual Neto (VAN)',
      significado:
        'Método para evaluar proyectos, considerando la diferencia entre los flujos descontados y la inversión inicial.',
    },
    {
      termino: 'Vida Útil',
      significado:
        'Periodo durante el cual un activo genera beneficios económicos para su propietario.',
    },
    {
      termino: 'Interés Efectivo',
      significado:
        'Porcentaje que refleja el costo real de un préstamo o el rendimiento de una inversión después de capitalizar los intereses.',
    },
    {
      termino: 'Financiero',
      significado:
        'Diferencia entre los ingresos generados por activos financieros y el costo de los pasivos financieros.',
    },
  ],
}
