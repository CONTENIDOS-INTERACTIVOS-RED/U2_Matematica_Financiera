<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Flujos de efectivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Los flujos de efectivo son uno de los elementos más importantes en la gestión financiera de una empresa, proyecto o inversión, debido a que representan las entradas y salidas de dinero durante un periodo de tiempo determinado. Estas transacciones reflejan la capacidad de una entidad para generar efectivo, cumplir con sus obligaciones financieras, sostener sus operaciones y planificar para el futuro. Los flujos de efectivo son una medida crucial de la salud financiera, dado que muestran no solo cuánto dinero se está generando, sino también cómo se utiliza (Ortiz & Rendón, 2015).

    .row.mb-4.align-items-center
      .col-lg-4(data-aos="fade-rigth")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/1.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        .bg-color-2.p-4.mb-4
          p.mb-4 Entender y analizar los flujos de efectivo es esencial para la toma de decisiones estratégicas. Permite a los gestores evaluar la viabilidad de proyectos de inversión, prever problemas de liquidez, determinar la capacidad de la empresa para hacer frente a sus deudas y planificar inversiones futuras.
          p.mb-0 Una gestión eficiente de los flujos de efectivo asegura que una empresa pueda mantener operaciones continuas, cumplir con sus obligaciones financieras en tiempo y forma y garantizar su sostenibilidad a largo plazo. En esencia, los flujos de efectivo son el “pulso” de cualquier organización, indicando su capacidad para sobrevivir y prosperar en un entorno competitivo y dinámico.
        
        p.mb-0 Una empresa con una sólida generación de flujos de efectivo puede aprovechar oportunidades de crecimiento, como la expansión de operaciones o la inversión en tecnología. Por otro lado, una mala gestión de los flujos de efectivo puede conducir a problemas de liquidez, que a su vez pueden afectar la capacidad de la empresa para operar, incluso si es rentable en términos contables. Por ello, los flujos de efectivo no solo son una herramienta de análisis, sino también una guía práctica para tomar decisiones informadas y oportunas.
    
    p.mb-4 Por otra parte, los flujos de efectivo se clasifican en tres categorías principales, cada una de las cuales ofrece información específica sobre las actividades financieras de una empresa:

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/2.png",style="max-width: 400px;")
      .col-lg-8.order-lg-first
        LineaTiempoD.large(data-aos="fade-left")
          p(numero="1" titulo="Flujos de efectivo operativos") Reflejan el dinero generado o utilizado por las actividades principales de la empresa. Estas actividades incluyen ventas de productos o servicios, pagos a proveedores, compras de inventario y gastos relacionados con las operaciones diarias, como salarios y servicios públicos. Este tipo de flujo es un indicador clave de la capacidad de la empresa para generar ingresos suficientes para sostener su operación principal sin depender de financiamiento externo. Una empresa con flujos de efectivo operativos positivos, tiene mayor probabilidad de mantener la estabilidad y solventar sus gastos operativos de manera autónoma (Rodríguez & Mendoza, 2018).
          p(numero="2" titulo="Flujos de efectivo de inversión") Están relacionados con las transacciones de adquisición o venta de activos a largo plazo, como propiedades, plantas, equipos o inversiones financieras. Estas transacciones reflejan las decisiones estratégicas de la empresa sobre cómo asignar sus recursos para generar valor a largo plazo. Los flujos negativos en esta categoría no necesariamente son un problema, puesto que pueden indicar que la empresa está invirtiendo en su crecimiento futuro. Por ejemplo, la compra de maquinaria nueva para aumentar la producción podría generar flujos de efectivo negativos en el corto plazo, pero beneficios significativos en el largo plazo (Rodríguez & Mendoza, 2018).
          p(numero="3" titulo="Flujos de efectivo de financiamiento") Corresponden a las actividades relacionadas con la obtención y el reembolso de capital. Esto incluye la emisión de acciones, la obtención de préstamos y el pago de dividendos. Estos flujos reflejan cómo la empresa se financia a sí misma, ya sea mediante la atracción de inversores o la adquisición de deuda. Un análisis detallado de esta categoría es crucial para entender la estructura financiera de la empresa y su capacidad para cumplir con sus obligaciones financieras a largo plazo (Rodríguez & Mendoza, 2018).
    
    p.mb-4 Adicionalmente, para calcular y analizar los flujos de efectivo, las empresas pueden emplear dos métodos principales: el directo y el indirecto. Ambos enfoques tienen ventajas específicas y se utilizan, según las necesidades de la entidad o las normativas contables aplicables.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Método directo" :icon="require('@/assets/curso/tema2/3.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Método directo
            p.mb-0 Consiste en registrar las entradas y salidas de efectivo de forma explícita, detallando los cobros de clientes, los pagos a proveedores y otros movimientos de efectivo a medida que ocurren. Este método ofrece una visión clara y detallada de cómo se generan y utilizan los flujos de efectivo en las operaciones diarias. Es especialmente útil para identificar problemas inmediatos de liquidez y para proporcionar información precisa a los gestores que necesitan supervisar el flujo de caja de manera constante.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Método indirecto" :icon="require('@/assets/curso/tema2/3.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Método indirecto
            p.mb-0 Parte del resultado neto de la empresa y ajusta elementos no monetarios como la depreciación, las variaciones en inventarios y las cuentas por pagar o cobrar. Este método es más común en los estados financieros porque ofrece una visión más amplia de la relación entre la rentabilidad y los flujos de efectivo. Al conectar el resultado neto con los flujos de efectivo, permite a los analistas comprender mejor cómo las operaciones de la empresa impactan su capacidad para generar efectivo.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 88px").mx-auto
          .col-lg
            p.mb-0 Sin embargo, ambos métodos son complementarios y su aplicación depende del contexto. Por ejemplo, el método directo puede ser más adecuado para gestionar operaciones diarias, mientras que el indirecto es preferido para fines de análisis estratégico y de reporte financiero.
    
    h2.mb-4 Ejemplo 1. Análisis de flujos regulares de efectivo

    p.mb-4 Una empresa recibe ingresos de $10,000 mensuales durante un año por la venta de un producto. Además, tiene gastos operativos mensuales por $6,000. Queremos calcular el flujo de efectivo neto, mensual y anual:

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/7.png",style="max-width: 400px;")
      .col-lg-8.order-lg-first
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Identificar las entradas y salidas mensuales")
            ul
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Entradas: $10,000.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Salidas: $6,000.
          div(numero="2" titulo="Calcular el flujo de efectivo mensual")
            p.mb-0 Flujo de efectivo mensual:
            p.mb-0 Flujo mensual = Entradas – Salidas
            p Flujo mensual = 10,000 - 6,000 = 4,000
          div(numero="3" titulo="Calcular el flujo de efectivo anual")
            p.mb-0 Flujo anual = Flujo mensual × 12
            p Flujo anual = 4,000 × 12 = 48,000
          p(numero="4" titulo="Resultado") El flujo de efectivo mensual es de $4,000, y el flujo anual asciende a $48,000. Esto indica que la empresa genera suficiente efectivo para cubrir sus gastos y mantener operaciones.

    h2.mb-4 Ejemplo 2: Análisis de flujos irregulares de efectivo

    p.mb-4 Un proyecto genera los siguientes flujos de efectivo anuales, durante tres años:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 Año 1: $20,000.
      .col-lg-4.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 Año 2: $25,000.
      .col-lg-4.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 Año 3: $30,000.
    
    p.mb-4 La inversión inicial es de $50,000, y la tasa de descuento es del 8 %. Queremos calcular el valor presente neto (VPN) del proyecto:

    .row.mb-4.align-items-center
      .col-lg-4.order-first
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/8.png",style="max-width: 400px;")
      .col-lg-8.order-lg-first
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Calcular el valor presente de cada flujo de efectivo")
            p.mb-2 La fórmula para el valor presente es: #[b VP = Flujo / (1 + r)^n]
            p.mb-0 Donde:
            ul.mb-0.pb-0
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span r = 0.08 (tasa de descuento).
              li.d-flex.mb-0.pb-0
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span n es el año correspondiente.
            p.mb-0.fw-bold Año 1:
            p.mb-0 VP1 = 20,000 / (1 + 0.08)^1 = 20,000 / 1.08 ≈ 18,518.52
            p.mb-0.fw-bold Año 2:
            p.mb-0 VP2 = 25,000 / (1 + 0.08)^2 = 25,000 / 1.1664 ≈ 21,454.77
            p.mb-0.fw-bold Año 3:
            p VP3 = 30,000 / (1 + 0.08)^3 = 30,000 / 1.259712 ≈ 23,823.64
          div(numero="2" titulo="Sumar los valores presentes")
            p.mb-0 VPN = VP1 + VP2 + VP3 - Inversión inicial
            p VPN = 18,518.52 + 21,454.77 + 23,823.64 - 50,000 ≈ 13,796.93
          p(numero="3" titulo="Resultado") El valor presente neto del proyecto es de $13,796.93, lo que indica que es una inversión rentable.

    
    h2.mb-4 Ejemplo 3: Comparación de proyectos

    p.mb-4 Supongamos que se evalúan dos proyectos con los siguientes flujos de efectivo anuales:

    .row.justify-content-center
      .col-lg-5.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 Proyecto A: $15,000 por cinco años.
      .col-lg-5.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 Proyecto B: $10,000 por siete años.
    
    p.mb-4 La tasa de descuento es del 6 %.

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema2/9.png",style="max-width: 400px;")
      .col-lg-8.order-lg-first
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Calcular el valor presente de cada proyecto")
            p.mb-0.fw-bold Proyecto A:
            p.mb-0 VP_A = 15,000 × (0.943396 + 0.890000 + 0.839619 + 0.792094 + 0.747258) ≈ 62,968.94
            p.mb-0.fw-bold Proyecto B:
            p VP_B = 10,000 × (0.943396 + 0.890000 + 0.839619 + 0.792094 + 0.747258 + 0.705419 + 0.665058) ≈ 58,008.44
          div(numero="2" titulo="Comparar los resultados")
            ul.mb-0.pb-0
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Proyecto A: $62,968.94.
              li.d-flex.mb-0.pb-0
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Proyecto B: $58,008.44.
          p(numero="3" titulo="Resultado") El #[b Proyecto A] es más rentable, en términos de valor presente.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/96913" target="_blank" rel="noopener noreferrer") Meza Orozco, J. D. J. (2011). Matemáticas financieras aplicadas: (4 ed.). Ecoe Ediciones. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/76600" target="_blank" rel="noopener noreferrer") Aching Guzmán, C. (2012). Matemáticas financieras para toma de decisiones empresariales: ( ed.). B - EUMED. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Gt3lo1q15po" target="_blank" rel="noopener noreferrer") Accounting Instruction, Help, & How To (Financial & Managerial). (2024, 20 octubre). Introducción al estado de flujos de efectivo 10 Contabilidad financiera

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=7iCrf920KFw" target="_blank" rel="noopener noreferrer") Accounting Instruction, Help, & How To (Financial & Managerial). (2024a, octubre 20). Clasificación de flujos de efectivo 20 Contabilidad financiera


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
