<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Valor presente y futuro del dinero'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las tasas de interés son un concepto fundamental en las matemáticas financieras, puesto que representan el costo del dinero en un periodo específico. Al estudiar este tema, comprenderá cómo se calculan, cómo se aplican en diferentes contextos financieros y su importancia en la toma de decisiones estratégicas. Las tasas de interés se utilizan tanto en la concesión de créditos como en la inversión, sirviendo como un indicador clave del costo o el rendimiento del dinero.
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por ejemplo, cuando se solicita un préstamo, el interés que paga depende de la tasa acordada, mientras que, al invertir, las tasas determinan el rendimiento de su capital. Entender las diferencias entre los tipos de tasas y su cálculo le permitirá evaluar opciones financieras, de manera más efectiva.
        p(data-aos="fade-left") El interés es un concepto fundamental en las matemáticas financieras, porque representa el costo de utilizar dinero prestado o el beneficio obtenido por invertir dinero en un periodo determinado. Se clasifica principalmente en dos tipos: interés simple e interés compuesto. Ambos tipos son esenciales para comprender la dinámica del crecimiento financiero y la toma de decisiones económicas.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Interés simple
    
    p.mb-5 El interés simple es una de las formas más básicas y fundamentales para calcular el rendimiento generado por un capital inicial (C) durante un periodo de tiempo determinado. A diferencia del interés compuesto, el interés simple no toma en cuenta los intereses acumulados en periodos anteriores; en cambio, se calcula únicamente sobre el monto principal o capital inicial. Esto lo convierte en un método lineal y sencillo que es ampliamente utilizado en transacciones financieras de corto plazo o en situaciones donde los cálculos deben ser rápidos y directos (Miguel Seco & Miguel Solano, 2020).

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Interés simple
            p.mb-4(data-aos="fade-right") En el PDF Interés simple, se presentan ejemplos prácticos que ilustran cómo aplicar esta herramienta en distintos escenarios financieros, desde préstamos personales hasta descuentos comerciales. Estos casos destacan la utilidad del interés simple para prever costos o rendimientos de manera clara, ideal en contextos donde no se busca la capitalización de intereses.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Interés simple.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-7.order-6.order-lg-1
        p(data-aos="fade-left") La fórmula para calcular el interés simple es:  I = C * r * t
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 I: Interés generado.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 C: Capital inicial.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 r: Tasa de interés por periodo (en formato decimal).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 t: Tiempo total de la operación, expresado en años o periodos.
        p(data-aos="fade-left") La fórmula para calcular el monto total al final del plazo es: M = C + I = C * (1 + r * t)

    h2(data-aos="fade-left") Ejemplo: 
    p.mb-5 Supongamos que invertimos $10,000 en una cuenta bancaria que ofrece una tasa de interés simple del 5 % anual durante 4 años.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Identificación de los datos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Capital inicial (C): $10,000.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Tasa de interés anual (r): 5 % = 0.05.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Tiempo (t): 4 años.
    
          .div(titulo="Paso 2")
            p Cálculo del interés generado.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Usamos la fórmula: I = C * r * t
            p.mb-0 Sustituyendo los valores: I = 10,000 * 0.05 * 4 = 2,000
          .div(titulo="Paso 3")
            p Cálculo del monto total.
            p.mb-0 Sumamos el interés al capital inicial: M = C + I = 10,000 + 2,000 = 12,000

    
          .div(titulo="Paso 4")
            p Interpretación del resultado.
            p.mb-o Después de 4 años, obtendremos un monto total de $12,000, de los cuales $10,000 corresponden al capital inicial y $2,000 al interés generado.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Interés compuesto
    
    p.mb-5 El interés compuesto es uno de los conceptos más poderosos y fundamentales en las finanzas, puesto que permite calcular el crecimiento de un capital no solo sobre la base del monto inicial, sino también considerando los intereses acumulados en periodos anteriores. Este efecto acumulativo, conocido como “interés sobre interés,” genera un crecimiento exponencial del dinero, haciéndolo significativamente más atractivo que el interés simple para inversiones de largo plazo o estrategias de ahorro que buscan maximizar el rendimiento (Miguel Seco & Miguel Solano, 2020).

    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/6.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="1%" y="74.5%" numero="+")
                h5 1. ¿Cómo funciona?
                p Una de las características clave del interés compuesto, es que su efectividad está directamente influida por la frecuencia de capitalización, es decir, la cantidad de veces que se calculan y reinvierten los intereses en un año. Cuanto mayor sea la frecuencia de capitalización, como mensual, trimestral o incluso diaria, mayor será el monto acumulado al final del periodo. Por ejemplo, un capital con intereses compuestos capitalizados mensualmente crecerá más rápido que uno con capitalización anual, incluso si la tasa de interés anual es la misma, puesto que los intereses se reinvierten con mayor frecuencia, aumentando el monto base para el siguiente cálculo.
    
              .bg-color-white.box-shadow.p-3(x="0%" y="38%" numero="+")
                h5 2. Característica clave
                p Una de las características clave del interés compuesto, es que su efectividad está directamente influida por la frecuencia de capitalización, es decir, la cantidad de veces que se calculan y reinvierten los intereses en un año. Cuanto mayor sea la frecuencia de capitalización, como mensual, trimestral o incluso diaria, mayor será el monto acumulado al final del periodo. Por ejemplo, un capital con intereses compuestos capitalizados mensualmente crecerá más rápido que uno con capitalización anual, incluso si la tasa de interés anual es la misma, puesto que los intereses se reinvierten con mayor frecuencia, aumentando el monto base para el siguiente cálculo.
    
              .bg-color-white.box-shadow.p-3(x="14%" y="12%" numero="+")
                h5 3. Ejemplo
                p El impacto del interés compuesto es particularmente notable en inversiones a largo plazo. Por ejemplo, una persona que invierte $10,000 a una tasa de interés anual del 5 % durante 20 años verá un crecimiento mucho mayor con interés compuesto que con interés simple. Mientras que el interés simple generará un crecimiento lineal de $1,000 por año, el interés compuesto hará que el capital crezca exponencialmente, alcanzando un monto significativamente superior gracias a la acumulación de intereses sobre intereses.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="12%" numero="+")
                h5 4. Utilización
                p El interés compuesto es ampliamente utilizado en diversas áreas financieras, como en cuentas de ahorro, planes de retiro, inversiones en bonos o acciones, y en productos financieros como certificados de depósito y fondos mutuos. Su capacidad para generar rendimientos exponenciales lo convierte en una opción preferida tanto para individuos como para instituciones financieras que buscan maximizar el crecimiento de sus capitales.
    
              .bg-color-white.box-shadow.p-3(x="100%" y="38%" numero="+")
                h5 5. Ámbito del endeudamiento
                p Además de ser una herramienta poderosa para los inversionistas, el interés compuesto también tiene aplicaciones en el ámbito del endeudamiento. Por ejemplo, en préstamos como hipotecas o tarjetas de crédito, el interés compuesto puede incrementar rápidamente la deuda si los pagos no se realizan de manera oportuna, debido a que los intereses acumulados se añaden al saldo pendiente, generando nuevos intereses sobre ese monto. Esto resalta la importancia de comprender cómo funciona el interés compuesto, tanto en el contexto de las inversiones como en el de las deudas.
              .bg-color-white.box-shadow.p-3(x="100%" y="74%" numero="+")
                h5 6. Planificación financiera
                p El interés compuesto también tiene un impacto psicológico significativo en la planificación financiera. El concepto de “crecimiento exponencial” motiva a las personas a comenzar a ahorrar o invertir lo antes posible, porque el tiempo es uno de los factores más importantes en su eficacia. Mientras más largo sea el periodo de inversión, mayor será el impacto del interés compuesto, lo que subraya la importancia de comenzar a construir capital temprano en la vida para maximizar los beneficios a largo plazo.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En conclusión, el interés compuesto es una herramienta financiera indispensable que impulsa el crecimiento exponencial del dinero a lo largo del tiempo. Su capacidad para reinvertir intereses generados lo convierte en una opción ideal para inversiones de largo plazo y estrategias de ahorro. Comprender cómo funciona el interés compuesto y cómo aprovechar su potencial es esencial para tomar decisiones financieras inteligentes, ya sea para maximizar el rendimiento de inversiones o para gestionar de manera eficiente los costos asociados a deudas. En un entorno financiero donde el tiempo y la acumulación desempeñan roles cruciales, el interés compuesto se destaca como uno de los conceptos más valiosos y transformadores.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-7.order-6.order-lg-1
        p(data-aos="fade-left") La fórmula para calcular el monto total del interés compuesto es: M = C * (1 + r)^t
    
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
              p.mb-0 r: Tasa de interés por periodo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 t: Tiempo total de la operación.
        p(data-aos="fade-left") La fórmula para calcular el interés generado es:  I = M – C


    h2(data-aos="fade-left") Ejemplo: 
    p.mb-5 Supongamos que una empresa invierte $15,000 en un fondo que paga una tasa de interés compuesto del 6 % anual durante 5 años.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Identificación de los datos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Capital inicial (C): $15,000.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Tasa de interés anual (r): 6 % = 0.06.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Tiempo (t): 5 años.
    
          .div(titulo="Paso 2")
            p Cálculo del monto total.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Usamos la fórmula: M = C * (1 + r)^t
            p.mb-0 Sustituyendo los valores: M = 15,000 * (1 + 0.06)^5 ≈ 20,073.38
          .div(titulo="Paso 3")
            p Cálculo del interés generado.
            p.mb-0 Restamos el capital inicial al monto total: I = M - C = 20,073.38 - 15,000 = 5,073.38

    
          .div(titulo="Paso 4")
            p Interpretación del resultado.
            p.mb-o Al cabo de 5 años, el monto acumulado será de $20,073.38, de los cuales $15,000 corresponden al capital inicial y $5,073.38 al interés compuesto generado.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/72663" target="_blank" rel="noopener noreferrer") Mendoza Melken, L. F. (2010). Integración y matemáticas financieras: ( ed.). Instituto Politécnico Nacional. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/164532" target="_blank" rel="noopener noreferrer") García Monsalve, J. (2013). Matemáticas financieras: notas de clases: ( ed.). Ediciones Unaula. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minedu.gob.pe/somospromo/pdf/preparacion/razonamiento-matematico/rm-interes-simple-y-compuesto.pdf" target="_blank" rel="noopener noreferrer") Ministerio de Educación del Perú. (s.f.). Interés simple y compuesto. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uv.mx/personal/cbustamante/files/2011/06/matematicas_financieras.pdf" target="_blank" rel="noopener noreferrer") Universidad Veracruzana. (2011). Fundamentos de Matemáticas Financieras.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=tnwBpeR-5FY " target="_blank" rel="noopener noreferrer") Unidad de Innovación Virtual. (2019, 10 de abril). Tasas de Interés, algunas reglas en la conversión [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WEy-JdeLSro " target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019, 16 de mayo). Base para calcular el interés simple y compuesto [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=79x3JzGRT8Q " target="_blank" rel="noopener noreferrer") Informática, Electrónica y algo más. (2023, 24 de octubre). Interés simple y compuesto - Entendiendo las finanzas básicas [Vídeo]. YouTube.  


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
