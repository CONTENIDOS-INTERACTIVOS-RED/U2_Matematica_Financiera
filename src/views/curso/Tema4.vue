<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Anualidades, tipos de pagos e ingresos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden.pb-0.pb-md-0

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 A continuación, estudiaremos las anualidades, los tipos de pagos y los ingresos.
          
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Anualidades
    
    p.mb-4 Para comenzar con el estudio de la temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el diseño de productos financieros, como hipotecas y pensiones, las anualidades juegan un papel crucial. 
        p.mb-5(data-aos="fade-left") Por ejemplo, en una hipoteca con pagos mensuales, la estructura de la anualidad asegura que cada pago cubra tanto los intereses como una porción del capital, permitiendo al prestatario amortizar la deuda de manera predecible y al prestamista recibir ingresos regulares. En las pensiones, las anualidades garantizan a los beneficiarios un flujo constante de ingresos durante su jubilación, proporcionando estabilidad financiera en una etapa donde los ingresos laborales pueden ser inexistentes.
        h5.mb-3 En el contexto de los seguros, las anualidades también son fundamentales. 
        p(data-aos="fade-left") Por ejemplo, las rentas vitalicias permiten a los asegurados recibir pagos recurrentes durante toda su vida, a cambio de una prima inicial. Este tipo de anualidades garantiza una estabilidad financiera a largo plazo, al tiempo que permite a las aseguradoras gestionar el riesgo asociado a la longevidad de sus clientes.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0
        .bg-color-2.p-5(data-aos="fade-left")
          p.mb-0 En conclusión, las anualidades son herramientas esenciales en la planificación y gestión financiera, ofreciendo una estructura clara y predecible para pagos e ingresos recurrentes. Su análisis debe considerar factores como la temporalidad (vencidas o anticipadas), la duración (temporales o perpetuas) y las tasas de interés aplicadas, dado que estos elementos determinan su costo, rentabilidad y viabilidad. Comprender cómo funcionan las anualidades y cómo se adaptan a diferentes escenarios financieros es clave para tomar decisiones informadas que maximicen el valor de los recursos disponibles y aseguren la estabilidad financiera en el futuro. Ya sea en préstamos, inversiones, seguros o pensiones, las anualidades proporcionan una base sólida para planificar y alcanzar metas económicas de manera eficiente y sostenible.

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Tipos de pagos y ejemplos
    
    p.mb-4 Las anualidades pueden clasificarse, según el momento en el que se realizan los pagos o ingresos, su duración, y la variabilidad de los flujos. A continuación, se detallan los principales tipos de anualidades, con ejemplos ampliamente desarrollados, para comprender mejor su aplicación práctica.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Tipos de pagos y ejemplos
            p.mb-4(data-aos="fade-right") En el siguiente documento se detallan los principales tipos de anualidades, con ejemplos ampliamente desarrollados, para comprender mejor su aplicación práctica.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipos de pagos y ejemplos.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/5.png', alt='')
    
        

 

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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/176642 " target="_blank" rel="noopener noreferrer") Martínez, E. (2011). Matemática financiera: ( ed.). Universidad Abierta para Adultos (UAPA). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39516 " target="_blank" rel="noopener noreferrer") Rodríguez Franco, J. & Rodríguez Jiménez, E. C. (2015). Matemáticas financieras 2: ( ed.). Grupo Editorial Patria. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.ulima.edu.pe/bitstream/handle/20.500.12724/5910/Matematica%20financiera.pdf?isAllowed=y&sequence=1 " target="_blank" rel="noopener noreferrer") Universidad de Lima. (2018). Matemática Financiera: Teoría y Ejercicios.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.udbvirtual.edu.sv/materiales_didacticos/resource/assets/MAF901/impresos/UIA3.pdf" target="_blank" rel="noopener noreferrer") Universidad de El Salvador. (s.f.). Anualidades: Conceptos y Aplicaciones. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=C62Qky6pZE4 " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019e, septiembre 16). Cómo calcular el valor presente de una anualidad perpetua y su comprobación [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=_28FlpCuVaU " target="_blank" rel="noopener noreferrer") Videos educativos. (2020, 20 mayo). anualidades- FINANZAS CORPORATIVAS [Vídeo]. YouTube. 


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
