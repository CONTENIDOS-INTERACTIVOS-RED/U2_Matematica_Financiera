<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Valor presente y futuro del dinero'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.align-items-center.mb-4
      .col-lg-4(data-aos="fade-rigth")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/1.png",style="max-width: 400px;", data-aos="zoom-in")
      .col-lg-8(data-aos="fade-left")
        .bg-color-4.p-4.mb-4
          .row.align-items-center
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/2.svg",style="max-width: 90px;", data-aos="zoom-in")
            .col
              p.mb-0(data-aos="fade-left") El valor del dinero en el tiempo, es un principio fundamental en las matemáticas financieras y en la economía. Este concepto reconoce que el dinero tiene un valor diferente, dependiendo del momento en que se recibe o se utiliza. 
        
        p.mb-4(data-aos="fade-left") Esto se debe a factores como la inflación, la capacidad de generar rendimientos a través de inversiones y el costo de oportunidad, asociado al uso de recursos en el presente.

        p.mb-4.fw-bold(data-aos="fade-left") El valor presente (VP) y el valor futuro (VF), son herramientas que permiten analizar la equivalencia del dinero a lo largo del tiempo, facilitando la toma de decisiones informadas en el ámbito financiero.

        p.mb-0(data-aos="fade-left") Estas herramientas se aplican en situaciones como la evaluación de proyectos, la comparación de alternativas de inversión y la planificación financiera personal.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Valor presente
    
    .row.mb-4.align-items-center
      .col-lg-8(data-aos="fade-rigth")
        p.mb-4(data-aos="fade-left") El Valor Presente (VP), es uno de los conceptos más importantes en el ámbito de las finanzas, puesto que permite determinar el valor actual de una cantidad de dinero que se espera recibir en el futuro.

        .bg-color-2.mb-4.p-4
          p(data-aos="fade-left") Este concepto se basa en el principio del valor temporal del dinero, que sostiene que una suma de dinero disponible en el presente no tiene el mismo valor que una suma equivalente en el futuro. Esta diferencia en el valor del dinero a lo largo del tiempo está determinada por factores fundamentales como la capacidad del dinero para generar intereses, el impacto de la inflación y el costo de oportunidad asociado con su uso en el presente (Gitman & Zutter, 2012).
        
        p.mb-0(data-aos="fade-left") La capacidad del dinero para generar intereses radica en que una cantidad disponible hoy, puede ser invertida, generando rendimientos adicionales a lo largo del tiempo. Por ejemplo, si recibe $10,000 hoy y decide invertirlos, al final de un periodo de tiempo habrá acumulado no solo el monto inicial, sino también los intereses generados. Esto implica que el dinero en el presente tiene un mayor valor que una cantidad equivalente recibida en el futuro, porque se pierde la oportunidad de obtener rendimientos si el dinero no se recibe de inmediato. 

      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/3.png",style="max-width: 400px;", data-aos="zoom-in")

    .bg-full-width.bg-color-1.mb-4
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 88px").mx-auto
          .col-lg
            p.mb-0(data-aos="fade-left") Por otro lado, la inflación, que refleja el aumento generalizado de los precios a lo largo del tiempo, reduce el poder adquisitivo del dinero. Esto significa que una cantidad fija de dinero podrá comprar menos bienes o servicios en el futuro, lo que refuerza la idea que el dinero tiene más valor si se dispone de él en el presente.

    p.mb-4(data-aos="fade-up") Ampliemos la información:

    .row.mb-4.align-items-center
      .col-lg-4(data-aos="fade-rigth")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/5.png",style="max-width: 400px;")
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Costo de oportunidad")
            p Es un factor crucial cuando se analiza el valor temporal del dinero. Al utilizar recursos financieros en el presente, se renuncia a otras oportunidades potenciales de inversión o consumo que podrían generar beneficios adicionales. Por ejemplo, decidir posponer una inversión implica perder los posibles rendimientos que esa inversión habría generado durante ese tiempo.

          .div(titulo="Concepto del Valor Presente")
            p Un ejemplo que lo ilustra claramente, es la elección entre recibir una suma de dinero hoy o en el futuro. Supongamos que tiene la opción de recibir $10,000 ahora o dentro de un año. Si elige recibir el dinero hoy, puede invertirlo a una tasa de interés y generar rendimientos durante ese año. Sin embargo, si decide esperar, el monto recibido dentro de un año tendrá un valor real menor debido a la pérdida de esos intereses potenciales, el impacto de la inflación y las oportunidades perdidas.

          .div(titulo="Cálculo del Valor Presente")
            p Es esencial para tomar decisiones financieras informadas, debido a que permite comparar flujos de efectivo futuros y presentes de manera precisa. Esta herramienta es ampliamente utilizada en diversas áreas de las finanzas, incluyendo la evaluación de proyectos de inversión, la planificación financiera personal, la gestión empresarial y la valoración de instrumentos financieros como bonos y valores. En el ámbito de la evaluación de proyectos, se utiliza para analizar si los beneficios futuros generados por una inversión justifican el desembolso inicial, permitiendo a los tomadores de decisiones, optar por proyectos que maximicen el valor económico.

          .div(titulo="Contexto empresarial")
            p En este contexto, el VP es una herramienta clave para analizar la viabilidad de estrategias de largo plazo y para tomar decisiones relacionadas con adquisiciones, fusiones o expansión. Por ejemplo, una empresa que evalúa la compra de nueva maquinaria puede utilizar el Valor Presente para calcular el beneficio económico actual de los ingresos adicionales que esa maquinaria generará en los próximos años. Este análisis permite determinar si la inversión es rentable o no, tomando en cuenta tanto los costos iniciales como los ingresos futuros descontados al presente.

          .div(titulo="Nivel personal")
            p A nivel personal, el Valor Presente es una herramienta indispensable para la planificación financiera. Permite a las personas calcular cuánto necesita ahorrar hoy para alcanzar metas futuras, como la compra de una vivienda, la educación universitaria de sus hijos o un fondo de retiro. Al considerar factores como la tasa de interés y el periodo de tiempo, el VP ayuda a los individuos a tomar decisiones estratégicas sobre cómo asignar sus recursos de manera eficiente.
    
    p.mb-4(data-aos="fade") El Valor Presente también juega un papel importante en la comparación de alternativas financieras. Por ejemplo, al evaluar diferentes opciones de inversión, el VP ayuda a identificar cuál ofrece el mayor rendimiento neto en términos actuales. Asimismo, es útil para valorar instrumentos financieros como bonos, permitiendo calcular su precio justo en función de los pagos futuros de intereses y el reembolso del principal.

    .row.mb-4
      .col-lg-8(data-aos="fade-rigth")
        .bg-color-2.p-4.h-100.align-content-center
          p.mb-0 En conclusión, el Valor Presente no solo es una herramienta matemática, sino un pilar fundamental para la toma de decisiones financieras responsables. Su aplicación asegura que los recursos disponibles se utilicen de manera eficiente, maximizando su valor en un contexto donde el tiempo, la inflación y el riesgo financiero son factores constantes. Comprender y aplicar el concepto del Valor Presente permite tanto a individuos como a empresas planificar de manera estratégica, evaluar opciones y asegurar que las decisiones tomadas hoy sean sostenibles y rentables en el futuro. Este enfoque no solo optimiza el uso de los recursos actuales, sino que también fortalece la capacidad para enfrentar los desafíos económicos de un entorno cada vez más dinámico y competitivo.
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/6.png",style="max-width: 400px;")
    
    p.mb-0(data-aos="fade") La fórmula general para calcular el valor presente es: #[b VP = VF/ (1 + r)^n]
    p.fw-bold.mb-4 Donde:

    .row
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center(data-aos="fade-left")
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 VP es el valor presente.
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center(data-aos="fade-left")
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 VF es el valor futuro (la cantidad que se recibirá en el futuro).
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center(data-aos="fade-left")
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 r es la tasa de interés o descuento por periodo.
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center(data-aos="fade-left")
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 n es el número de periodos (años, meses, etc.).

    p(data-aos="fade-left") Esta fórmula utiliza el concepto de interés compuesto inverso; es decir, descuenta los intereses futuros, para traer el valor al presente.

    .bg-full-width.bg-color-5.mb-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Ejemplos
            p.mb-4(data-aos="fade-right") El uso de ejemplos prácticos es fundamental para comprender conceptos financieros y tomar decisiones acertadas. En el PDF Ejemplos, se analizan situaciones como la evaluación de pagos futuros, la comparación entre opciones de pago y el cálculo del valor presente de flujos múltiples de efectivo, ilustrando cómo aplicar fórmulas financieras en contextos reales. Estos casos permiten interpretar resultados y entender el impacto del tiempo y la tasa de interés en el valor del dinero.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ejemplos

          .col-lg-5.order-first
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='')
  
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Valor futuro
    
    p.mb-4 El Valor Futuro es una herramienta fundamental en la planificación financiera, ya que permite proyectar el crecimiento del dinero a lo largo del tiempo mediante la aplicación de intereses compuestos.

    .bg-full-width.bg-color-5.mb-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Valor futuro
            p.mb-4(data-aos="fade-right") En el PDF Valor Futuro, se exploran conceptos clave como la relación entre la tasa de interés, el periodo de inversión y la frecuencia de capitalización, proporcionando ejemplos prácticos que facilitan la comprensión y aplicación de este cálculo en contextos personales y empresariales. Esta perspectiva permite evaluar decisiones financieras estratégicas y establecer metas económicas realistas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Valor futuros

          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='')
    
    p.mb-0 La fórmula general del valor futuro es: #[b VF = VP × (1 + r)^n]
    p.fw-bold.mb-4 Donde

    .row
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 VF es el valor futuro, o el monto que se espera alcanzar en el futuro.
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 VP es el valor presente, o la cantidad inicial invertida.
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 r es la tasa de interés por periodo (expresada en términos decimales, por ejemplo, 5 % = 0.05).
      .col-lg-3.col-md-6.mb-4
        .bg-color-1.p-2.h-100.align-content-center
          .row.align-items-center
            .col-lg-4
              figure.mb-1.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema1/7.svg",style="max-width: 76px;")
            .col-lg-8.ps-lg-0
              p.mb-0 n es el número de periodos (años, meses, etc.).
    
    p.mb-4 El cálculo del Valor Futuro, está basado en la acumulación de intereses compuestos, lo que significa que los intereses generados en cada periodo se reinvierten y generan más intereses en los periodos siguientes.

    h2 Ejemplo 1: Crecimiento de una inversión inicial

    p.mb-4 Supongamos que decide invertir $10,000 a una tasa de interés anual del 6 %, durante cinco años. Queremos calcular cuánto dinero tendrá al final de este periodo:

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/10.png",style="max-width: 400px;")
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Identificar los datos")
            ul
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Valor Presente (VP) = $10,000.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (r) = 0.06 (6 % anual).
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (n) = 5 años.

          div(numero="2" titulo="Aplicar la fórmula")
            p.mb-0 Sustituimos los valores en la fórmula:
            p.mb-0 VF = VP × (1 + r)^n
            p VF = 10,000 × (1 + 0.06)^5

          div(numero="3" titulo="Calcular paso a paso")
            p.mb-0 1. Sumamos 1 a la tasa de interés: 1 + 0.06 = 1.06.
            p.mb-0 2. Elevamos este valor al número de periodos: 1.06^5 = 1.3382255776.
            p.mb-0 3. Multiplicamos el resultado por el valor presente: VF = 10,000 × 1.3382255776.
            p VF ≈ 13,382.26.

          p(numero="4" titulo="Resultado") El valor futuro de una inversión de $10,000 a una tasa de interés anual del 6 % durante cinco años, será aproximadamente de $13,382.26.

    h2 Ejemplo 2: Comparación de tiempos

    p.mb-4 Supongamos que decide invertir $15,000 a una tasa del 5 % anual, pero está considerando diferentes horizontes de tiempo: tres años, cinco años y diez años. Queremos calcular el valor futuro, para cada uno de estos periodos.

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/12.png",style="max-width: 400px;")
      .col-lg-8.order-lg-first
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Datos para el cálculo")
            ul
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Valor Presente (VP) = $15,000.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (r) = 0.05 (5 % anual).

          div(numero="2" titulo="Aplicar la fórmula para cada caso")
            p.mb-0.fw-bold 1. Para n = 3 años:
            p.mb-0 VF = 15,000 × (1 + 0.05)^3
            p.mb-0 VF = 15,000 × 1.157625 ≈ 17,364.38.
            p.mb-0.fw-bold 2. Para n = 5 años:
            p.mb-0 VF = 15,000 × (1 + 0.05)^5
            p.mb-0 VF = 15,000 × 1.276281 ≈ 19,144.22.
            p.mb-0 VF = 15,000 × (1 + 0.05)^10
            p.mb-0 VF = 15,000 × 1.628894 ≈ 24,433.41.

          div(numero="3" titulo="Resultado")
            p.mb-4 El valor futuro de $15,000 crece significativamente a medida que aumenta el tiempo:
            ul
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span En 3 años: $17,364.38.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span En 5 años: $19,144.22.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span En 10 años: $24,433.41.

    h2 Ejemplo 3: Frecuencia de capitalización

    p.mb-4 Imagine que invierte $8,000 a una tasa de interés anual del 4 %, pero los intereses se capitalizan trimestralmente. Queremos calcular el valor futuro después de siete años.

    .row.mb-4.align-items-center
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema1/13.png",style="max-width: 400px;")
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Datos relevantes")
            ul
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Valor Presente (VP) = $8,000.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (r) = 0.04 (4 % anual).
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (n) = 7 años.
              li.d-flex
                img.me-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Frecuencia de capitalización: trimestral (4 capitalizaciones por año).

          div(numero="2" titulo="Ajustar la fórmula")
            p.mb-0 Cuando los intereses se capitalizan varias veces al año, la fórmula se modifica:
            p.mb-0 VF = VP × (1 + r/m)^(n × m)
            p.mb-0 Sustituimos los valores:
            p VF = 8,000 × (1 + 0.04/4)^(7 × 4)

          div(numero="3" titulo="Calcular paso a paso")
            p.mb-0 1. Dividimos la tasa de interés entre el número de capitalizaciones: 0.04 / 4 = 0.01.
            p.mb-0 2. Sumamos 1: 1 + 0.01 = 1.01.
            p.mb-0 3. Calculamos el número total de periodos: 7 × 4 = 28.
            p.mb-0 4. Elevamos el resultado al número de periodos: 1.01^28 ≈ 1.319469.
            p 5. Multiplicamos por el valor presente: VF = 8,000 × 1.319469 ≈ 10,555.75.

          p(numero="4" titulo="Resultado") El valor futuro de $8,000 con una tasa anual del 4 %, capitalizada trimestralmente durante siete años, será aproximadamente de $10,555.75.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/130920" target="_blank" rel="noopener noreferrer") Gutiérrez Banegas, M. Á. (2020). Matemáticas financieras: ( ed.). Instituto Mexicano de Contadores Públicos. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/175093" target="_blank" rel="noopener noreferrer") Escobar Arias, G. E. (2020). Matemáticas financieras: ( ed.). Editorial Universidad Autónoma de Manizales. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1xv4raOrRhU" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2018, 7 septiembre). Ingenieria Economica 01 Valor del dinero en el tiempo

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=o8YGIMMDbjg" target="_blank" rel="noopener noreferrer") Sustraendo h. (2018, 4 enero). Introducción al Valor futuro y al Valor Presente


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
