<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Tasas de interés vencidas y anticipadas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En el ámbito financiero, el cálculo de intereses no solo depende de la tasa aplicada y del tiempo, sino también del momento en que los pagos se realizan. Este momento puede ser al final del periodo (tasa de interés vencida) o al inicio del periodo (tasa de interés anticipada). Comprender esta diferencia es crucial para evaluar correctamente el costo o el rendimiento de operaciones financieras como préstamos, arrendamientos e inversiones.
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tasas de interés vencidas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La tasa de interés vencida es un concepto fundamental en el ámbito financiero, ampliamente utilizado en operaciones como préstamos, depósitos bancarios y otros instrumentos de ahorro e inversión.
        p(data-aos="fade-left") Este tipo de tasa se caracteriza por aplicarse sobre el capital al finalizar un periodo determinado, lo que significa que los intereses generados se calculan y pagan únicamente al término de ese intervalo de tiempo previamente acordado. Es el modelo más común y estándar en las finanzas debido a su simplicidad y claridad en la forma en que los intereses se acumulan y se liquidan.
      
    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Tasas de interés vencidas
            p.mb-4(data-aos="fade-right") En el PDF <b>Tasas de interés vencidas</b>, se presentan ejemplos prácticos que ilustran su aplicación en productos como préstamos, depósitos a plazo fijo y bonos, permitiendo a los usuarios comprender su funcionamiento, evaluar opciones financieras y tomar decisiones informadas para optimizar sus recursos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tasas de interés vencidas.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/4.png', alt='')
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-7.order-6.order-lg-1
        p(data-aos="fade-left") La fórmula para para cálculo del monto con tasa vencida, es: M = C * (1 + i)^n
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 M: Monto total al final del plazo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 C: Capital inicial.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 i: Tasa periódica de interés.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 n: Número de periodos.
    
    h2(data-aos="fade-left") Ejemplo: 
    h2(data-aos="fade-left") Cálculo con tasa vencida

    p.mb-5 Supongamos que deposita $5,000 en una cuenta de ahorro que paga una tasa del 8 % anual, compuesta anualmente, durante 3 años.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p.mb-0 Identificación de datos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Capital inicial (C): $5,000.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Tasa de interés anual ( i ): 8% = 0.08.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Número de años (n): 3.
    
          .div(titulo="Paso 2")
            p.mb-0 Aplicación de la fórmula.
            p.mb-0 Utilizamos la fórmula: M = C * (1 + i)^n
            p.mb-0 Sustituyendo los valores: M = 5,000 * (1 + 0.08)^3 ≈ 6,298.56
           
           
          .div(titulo="Paso 3")
            p.mb-0 Interpretación del resultado.
            p.mb-0 El monto total al final de 3 años será $6,298.56, de los cuales $5,000 corresponden al capital inicial y $1,298.56 al interés generado bajo una tasa vencida.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Tasas de interés anticipadas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/7.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") La tasa de interés anticipada es un concepto financiero que se aplica en operaciones donde los intereses se calculan y se pagan al inicio del periodo pactado, antes que transcurra el tiempo correspondiente. Este esquema es diferente al de la tasa de interés vencida, dado que en lugar de liquidar los intereses al final del periodo, el prestatario o usuario realiza el pago por adelantado. Este modelo es menos común, pero tiene aplicaciones específicas en situaciones que requieren una mayor seguridad para el prestamista o proveedor del servicio.
    

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Tasas de interés anticipadas
            p.mb-4(data-aos="fade-right") En el PDF <b>Tasas de interés anticipadas</b>, se analizan ejemplos prácticos que ilustran su aplicación en contextos como arrendamientos y operaciones de financiamiento, permitiendo comprender su impacto financiero y las decisiones estratégicas relacionadas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tasas de interés anticipadas.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/8.png', alt='')

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-7.order-6.order-lg-1
        p(data-aos="fade-left") La fórmula para cálculo del monto con tasa anticipada, es: M = C * (1 + i)^n / (1 + i)
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 M: Monto efectivo al final del plazo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 C: Capital inicial.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 i: Tasa periódica de interés.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 n: Número de periodos.
    
    h2(data-aos="fade-left") Ejemplo: 
    h2(data-aos="fade-left") Cálculo con tasa anticipada

    p.mb-5 Un cliente solicita un préstamo de $10,000 con una tasa de interés anticipada del 10 % anual, compuesto anualmente, durante 2 años.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7
              h5 Identificación de datos.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 Capital inicial (C): $10,000.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 Tasa de interés anual (i): 10 % = 0.10.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 Número de años (n): 2.
                
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7
              h5 Aplicación de la fórmula.
              p Utilizamos la fórmula: M = C * (1 + i)^n / (1 + i)
              p Sustituyendo los valores: M = 10,000 * (1 + 0.10)^2 / (1 + 0.10) ≈ 11,000
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7
              h5 Interpretación del resultado.
              p El monto efectivo al final del plazo será $11,000, de los cuales $10,000 corresponden al capital inicial y $1,000 al interés generado bajo una tasa anticipada.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105573" target="_blank" rel="noopener noreferrer") García Boza, J. (2017). Matemáticas financieras: (2 ed.). Difusora Larousse - Ediciones Pirámide.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41321 " target="_blank" rel="noopener noreferrer") Chu Rubio, M. & Agüero Olivos, C. (2015). Matemática para las decisiones financieras: ( ed.). Universidad Peruana de Ciencias Aplicadas (UPC). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.usta.edu.co/bitstream/handle/11634/9941/anualidades_amortizacion_5dic.pdf" target="_blank" rel="noopener noreferrer") Universidad del Valle. (s.f.). Anualidades y Amortizaciones. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.udbvirtual.edu.sv/materiales_didacticos/resource/assets/MAF901/impresos/UIA3.pdf" target="_blank" rel="noopener noreferrer") Universidad de El Salvador. (s.f.). Anualidades: Conceptos y Aplicaciones.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=nSeOef6Hyq0 " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019c, mayo 18). ¿Cómo se convierte una tasa vencida en anticipada? [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=mBKPsQCOen8" target="_blank" rel="noopener noreferrer") Vicente, Y. (2020, 15 septiembre). TASA VENCIDA a TASA ANTICIPADA [Vídeo]. YouTube


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
