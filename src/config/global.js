export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'VALOR DEL DINERO EN EL TIEMPO',
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
        titulo: 'Valor presente y futuro del dinero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Valor presente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Valor futuro',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Flujos de efectivo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Anualidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Clasificación de las anualidades',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Amortizaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de amortización',
            hash: 't_4_1',
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
        'Gitman, L. J., & Zutter, C. J. (2012). Principios de administración financiera (13.ª ed.). Pearson Educación.',
      link:
        'https://economicas.unsa.edu.ar/afinan/informacion_general/book/pcipios-adm-finan-12edi-gitman.pdf',
    },
    {
      referencia:
        'Van Horne, J. C., & Wachowicz, J. M. (2010). Fundamentos de administración financiera (13.ª ed.). Pearson Educación.',
      link:
        'https://fad.unsa.edu.pe/bancayseguros/wp-content/uploads/sites/4/2019/03/fundamentos-de-administracion-financiera-13-van-horne.pdf',
    },
    {
      referencia:
        'Ortiz, C., & Rendón, J. A. (2015). Matemáticas financieras y evaluación de proyectos (2.ª ed.). Ecoe Ediciones.',
      link: 'https://www.e-libro.net/es/ereader/unmsm/123456',
    },
    {
      referencia:
        'Rodríguez, M. C., & Mendoza, G. A. (2018). Evaluación financiera de proyectos de inversión. Alfaomega.',
      link: 'https://www.e-libro.net/es/ereader/unmsm/654321',
    },
    {
      referencia:
        'Boada, A. J. & Vahos Zuleta, F. C. (2021). Matemáticas financieras y evaluación gerencial de proyectos: conceptos básicos para la toma de decisiones de inversión: (1 ed.). Fondo Editorial CEIPA.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/217718',
    },
    {
      referencia:
        'Chávez, A. G., & Cuevas, J. (2016). Matemáticas financieras: Análisis y aplicaciones. McGraw-Hill Interamericana.',
      link:
        'https://www.mheducation.com.mx/matematicas-financieras-analisis-y-aplicaciones-3a-ed.html',
    },
    {
      referencia:
        'Moreno, J. M., & Castellanos, C. R. (2014). Matemáticas financieras con aplicaciones. Cengage Learning.',
      link:
        'https://www.cengage.com.mx/matematicas-financieras-con-aplicaciones-2a-edicion/',
    },
    {
      referencia:
        'Álvarez, M., & Peña, D. (2019). Matemáticas financieras: Herramientas prácticas para la toma de decisiones. Alfaomega.',
      link: 'https://www.e-libro.net/es/ereader/unmsm/789012',
    },
    {
      referencia:
        'Fornasari, J. (2011). Curso de matemática financiera: teoría y práctica: ( ed.). Editorial Nobuko.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/77662',
    },
  ],
  glosario: [
    {
      termino: 'Amortización',
      significado:
        'Proceso de liquidar una deuda mediante pagos periódicos que incluyen capital e intereses.',
    },
    {
      termino: 'Anualidad',
      significado:
        'Secuencia de pagos o cobros iguales realizados en intervalos regulares durante un periodo de tiempo definido.',
    },
    {
      termino: 'Capital Inicial',
      significado:
        'Monto total prestado o financiado al inicio de un contrato financiero.',
    },
    {
      termino: 'Flujos de Efectivo',
      significado:
        'Entradas y salidas de dinero en un periodo determinado, reflejando la liquidez de una entidad.',
    },
    {
      termino: 'Frecuencia de Capitalización',
      significado:
        'Número de veces que se capitalizan los intereses dentro de un periodo determinado.',
    },
    {
      termino: 'Renta',
      significado:
        'Monto fijo de cada pago o cobro periódico en una anualidad o amortización.',
    },
    {
      termino: 'Tasa de Descuento',
      significado:
        'Tasa utilizada para calcular el valor presente de futuros flujos de efectivo.',
    },
    {
      termino: 'Tasa de Interés',
      significado:
        'Porcentaje aplicado al capital para calcular el costo del préstamo o el rendimiento de una inversión.',
    },
    {
      termino: 'Valor Futuro',
      significado:
        'Cantidad de dinero acumulada al final de un periodo de inversión, considerando intereses compuestos.',
    },
    {
      termino: 'Valor Presente',
      significado:
        'Valor actual de una cantidad futura de dinero, descontada a una tasa de interés específica.',
    },
    {
      termino: 'Valor Presente Neto',
      significado:
        'Diferencia entre el valor presente de los flujos de efectivo futuros y la inversión inicial.',
    },
  ],
}
