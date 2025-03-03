<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Amortizaciones'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden.pb-0.pb-md-0

    .row.mb-4
      .col-lg-8
        p.mb-4 La amortización es un proceso financiero clave que consiste en la liquidación de una deuda mediante pagos periódicos que cubren tanto el capital como los intereses generados. Estos pagos, generalmente iguales o programados, según un esquema definido, se realizan en intervalos regulares, como mensual, trimestral o anualmente, y están diseñados para extinguir la deuda en un periodo de tiempo determinado. Este método no solo facilita el pago ordenado de obligaciones, sino que también asegura al acreedor la recuperación total del monto prestado y de los intereses acordados (Moreno & Castellanos, 2014).

        .bg-color-1.p-4.mb-4
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema4/2.svg",style="max-width: 90px;")
            .col
              p.mb-0 El principal objetivo de la amortización es el de equilibrar los intereses de ambas partes involucradas: por un lado, permite al deudor realizar pagos manejables y predecibles a lo largo del tiempo, evitando la carga de tener que liquidar la deuda de una sola vez; por otro lado, proporciona al acreedor un flujo constante de ingresos que incluye el reembolso del capital prestado más la compensación por el uso de sus recursos, es decir, los intereses.
        
        p.mb-4 Este balance hace que la amortización sea fundamental en la estructuración de diversos productos financieros. 

        p.mb-0 La amortización es ampliamente utilizada en una variedad de contextos financieros:

      .col-lg-4
        figure.d-none.d-lg-block
          img.mx-auto(src="@/assets/curso/tema4/1.png",style="max-width: 400px;")
    
    .bg-full-width.bg-color-info.mb-4
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema4/3.svg', alt='', style="max-width: 934px;").mx-auto

                .bg-color-white.box-shadow.p-3(style="border-radius: 10px;" x="2%" y="83%" numero="+")
                  h5 Hipotecas
                  p En el caso de las hipotecas, por ejemplo, los pagos periódicos permiten a los propietarios adquirir una vivienda, distribuyendo el costo en plazos de 15, 20 o 30 años, según el acuerdo. Cada pago incluye una parte destinada a reducir el saldo del capital y otra para cubrir los intereses acumulados, lo que facilita la propiedad gradual del inmueble.
                .bg-color-white.box-shadow.p-3(style="border-radius: 10px;" x="100%" y="82%" numero="+")
                  h5 Préstamos personales y créditos automotrices
                  p En los préstamos personales y los créditos automotrices, la amortización funciona de manera similar, ayudando a los prestatarios a acceder a bienes o servicios costosos sin requerir el desembolso inmediato de una suma considerable.
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.mb-4
          .col-lg-8
            .bg-color-2.p-4.mb-4
              p.mb-0 El cálculo de la amortización implica determinar la proporción de cada pago que se destinará al capital y a los intereses. En las etapas iniciales del préstamo, la mayor parte del pago se destina a cubrir los intereses, porque estos se calculan sobre el saldo pendiente, que es mayor al inicio. A medida que el saldo se reduce con el tiempo, la proporción destinada al capital aumenta, lo que acelera el proceso de liquidación de la deuda. Este sistema, conocido como amortización constante, es común en productos como hipotecas de tasa fija.
            p.mb-0 Existen diferentes métodos de amortización, diseñados para adaptarse a las necesidades específicas del deudor y del acreedor. Entre los más utilizados se encuentran:
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/tema4/4.png",style="max-width: 400px;")
        
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              figure
                img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Método de cuota fija
                p.text-center Donde el monto total del pago permanece constante.
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              figure
                img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Método de amortización decreciente
                p.text-center En el que las cuotas iniciales son mayores y disminuyen a medida que se reduce el saldo del capital.

    .bg-full-width.bg-color-1.mb-4.mt-1
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 88px").mx-auto
          .col-lg
            p.mb-0 Cada método tiene ventajas y desventajas que deben evaluarse, según las condiciones del préstamo y la capacidad de pago del deudor (Álvarez & Peña, 2019).
    
    p.mb-4 La amortización no solo es útil para el pago de deudas, sino que también juega un papel importante en la planificación financiera:

    TabsC.color-acento-contenido.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Prestatarios" :icon="require('@/assets/curso/tema4/7.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Prestatarios
            p.mb-0 Al comprender cómo se estructuran los pagos, les permite planificar su presupuesto de manera más efectiva y prever el impacto de sus obligaciones en sus finanzas personales. Para las empresas, la amortización de préstamos es crucial para gestionar el flujo de efectivo y garantizar la disponibilidad de recursos para otras actividades operativas o de inversión.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/8.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Acreedor" :icon="require('@/assets/curso/tema4/7.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Acreedor
            p.mb-0 Desde su perspectiva, la amortización ofrece un flujo de ingresos estable y predecible, lo que facilita la gestión de riesgos y la planificación financiera. Además, el análisis del calendario de amortización permite evaluar la salud financiera de los prestatarios y tomar decisiones informadas sobre la concesión de futuros créditos.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/9.png', alt='')
    
    .row.mb-4
      .col-lg-8
        p.fw-bold.mb-4 En conclusión, la amortización es un mecanismo esencial en el mundo financiero, que facilita el acceso al crédito, promueve la estabilidad financiera y asegura el cumplimiento de las obligaciones tanto para deudores como para acreedores. Su correcta aplicación y comprensión son fundamentales para tomar decisiones informadas y aprovechar al máximo los recursos financieros disponibles. En un entorno donde el crédito juega un papel central en la economía, la amortización se presenta como una herramienta clave para alcanzar metas financieras personales y empresariales, garantizando al mismo tiempo la sostenibilidad y el equilibrio en las relaciones económicas.
        p.mb-0 Las principales fórmulas de las anualidades son: 
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema4/10.png",style="max-width: 400px;")
    
    .row.mb-4
      .col-lg-6.pe-lg-0
        .bg-color-6.p-4.h-100.align-content-center
          ul
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Cálculo de la cuota (R) en amortización con cuotas fijas:
                p.mb-0 R = C × i / [1 - (1 + i)^-n]
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Cálculo del interés (I):
                p.mb-0 I = S × i
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Saldo al final del periodo:
                p.mb-0 S = C - Amortización acumulada

          figure
            img.ms-auto(src="@/assets/curso/tema4/11.svg",style="max-width: 138px;")
      .col-lg-6.ps-lg-0
        .bg-color-7.p-4.h-100.align-content-center
          p.mb-3.fw-bold Donde:
          ul.mb-0.pb-0
            li.d-flex.align-items-start.mb-4
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Capital inicial (C).] Es el monto total prestado o financiado.
            li.d-flex.align-items-start.mb-4
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Interés (I).] Es el costo del préstamo, calculado como un porcentaje del saldo de la deuda.
            li.d-flex.align-items-start.mb-4
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Plazo (n).] Es el periodo durante el cual se debe liquidar la deuda.
            li.d-flex.align-items-start.mb-4
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Tasa de interés (i).] Es la tasa aplicada por periodo, generalmente expresada como porcentaje anual.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Cuota (R).] Es el pago periódico que incluye una porción de capital y otra de interés.

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Tipos de amortización
    
    p.mb-4 Los tipos de amortización son herramientas fundamentales en la gestión de préstamos y financiamientos, permitiendo adaptar los pagos según las necesidades y condiciones específicas del prestatario.

    .bg-full-width.bg-color-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Tipos de amortización
            p.mb-4(data-aos="fade-right") En el PDF Tipos de amortización, se analizan los principales métodos, como la amortización constante, con cuotas fijas, americana y variable, acompañados de ejemplos prácticos que ilustran su aplicación en distintos escenarios financieros. Este enfoque proporciona una base sólida para comprender cómo elegir el método más adecuado y gestionar eficientemente las obligaciones crediticias.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de amortización

          .col-lg-5.order-first
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/12.png', alt='')


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/72202" target="_blank" rel="noopener noreferrer") Rivera Salcedo, J. (2010). Matemáticas financieras: ( ed.). Instituto Politécnico Nacional. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49079" target="_blank" rel="noopener noreferrer") Valls Martínez, M. D. C. & Cruz Rambaud, S. (2015). Introducción a las matemáticas financieras: (3 ed.). Difusora Larousse - Ediciones Pirámide. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4dMv9vNYb0U" target="_blank" rel="noopener noreferrer") ECONOMÍA Y FINANZAS. (2018, 12 diciembre). 9. Las amortizaciones y las provisiones  Finanzas para no financieros

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BOpGk6t7SDE" target="_blank" rel="noopener noreferrer") Montero Espinosa (SPyB). (2019, 27 febrero). Préstamo francés. Tabla de amortización


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Matemática financiera',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué concepto refleja que el dinero tiene un valor diferente según el momento en que se recibe o utiliza?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tasa de descuento',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Valor futuro',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Valor temporal del dinero',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Costo de oportunidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El valor temporal del dinero reconoce la diferencia en el valor del dinero dependiendo del tiempo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Cuál es el propósito principal del valor presente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Determinar el valor futuro de una inversión.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Evaluar proyectos de inversión descontando flujos futuros.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Calcular intereses simples.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estimar amortizaciones mensuales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El valor presente permite evaluar proyectos al comparar flujos futuros en términos actuales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué describe un flujo de efectivo de inversión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Pagos a proveedores.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Adquisición de maquinaria.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Emisión de acciones.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Pagos de dividendos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los flujos de inversión reflejan transacciones relacionadas con activos a largo plazo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'En una anualidad anticipada, ¿cuándo se realizan los pagos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Al final de cada periodo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Al inicio de cada periodo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'En intervalos irregulares.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo una vez al final.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En las anualidades anticipadas, los pagos se efectúan al comienzo de cada periodo.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué ocurre con los intereses en una amortización constante?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Permanecen iguales en cada periodo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Disminuyen progresivamente a medida que se reduce el saldo.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumentan proporcionalmente a los pagos.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Se calculan únicamente al final del plazo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En la amortización constante, los intereses disminuyen porque se calculan sobre un saldo de deuda cada vez menor.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
