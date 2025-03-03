<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Anualidades'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        .row.align-items-center.mb-4
          .col-lg-8(data-aos="fade-rigth")
            .bg-color-3.p-4.mb-4
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-lg-0
                    img.mx-auto(src="@/assets/curso/tema3/2.svg",style="max-width: 90px;")
                .col
                  p.mb-0 Una anualidad es una secuencia de pagos o cobros iguales realizados o recibidos en intervalos regulares durante un periodo de tiempo definido. Estos pagos pueden efectuarse al final o al inicio de cada intervalo, lo que determina el tipo de anualidad: ordinaria o anticipada.
            
            p.mb-4 Las anualidades son un pilar fundamental en las matemáticas financieras, debido a que permiten modelar, proyectar y planificar flujos de efectivo futuros, facilitando la toma de decisiones informadas en contextos personales y empresariales (Chávez & Cuevas, 2016).

            p.mb-0.fw-bold En el caso de una:

          .col-lg-4.order-first.order-lg-last(data-aos="zoom-in-out")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/tema3/1.png",style="max-width: 400px;")
        
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              figure
                img.custom-image-card__image(src="@/assets/curso/tema3/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Anualidad ordinaria
                p.text-center Los pagos o cobros se realizan al final de cada periodo. Este tipo de anualidad es común en préstamos y financiamientos, como hipotecas o créditos personales, donde los pagos se programan al cierre de cada mes o año.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              figure
                img.custom-image-card__image(src="@/assets/curso/tema3/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-3.text-center Anualidad anticipada
                p.text-center Las transacciones se realizan al inicio del periodo. Este modelo es frecuente en contratos de arrendamiento o rentas vitalicias, donde el pago se efectúa antes que comience el periodo correspondiente.
    
    p.mb-4 Las anualidades son herramientas claves para gestionar flujos de efectivo recurrentes y, como tal, se aplican en múltiples áreas financieras:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7
              h5 Préstamos
              p En el ámbito de los préstamos, las anualidades permiten estructurar pagos periódicos que cubren tanto el capital como los intereses, proporcionando a los deudores una forma clara de cumplir con sus obligaciones. Ejemplos incluyen hipotecas, donde los pagos mensuales permiten al prestatario amortizar el capital del préstamo mientras paga los intereses generados, y créditos automotrices, que funcionan de manera similar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7
              h5 Inversiones
              p Las anualidades son igualmente importantes. Los planes de ahorro, las cuentas de retiro y los bonos a menudo se estructuran como anualidades, permitiendo a los inversionistas recibir o realizar pagos periódicos que facilitan la acumulación de riqueza a lo largo del tiempo. Por ejemplo, en una cuenta de retiro, una persona puede realizar aportes mensuales durante varios años, acumulando un fondo que crecerá mediante intereses compuestos y que luego se retirará como una renta periódica en la jubilación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure.mb-4.mb-lg-0
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7
              h5 Seguros
              p El sector de los seguros, también utiliza ampliamente las anualidades. En este caso, las personas realizan pagos periódicos para mantener activa una póliza de seguro, como en el caso de las primas de seguros de vida o de salud. Asimismo, las rentas vitalicias, un tipo específico de anualidad, garantizan a los beneficiarios un flujo constante de ingresos durante un periodo definido o incluso de por vida, proporcionando estabilidad financiera en etapas posteriores.
    
    .row.mb-4
      .col-lg-8
        .bg-color-2.p-4.mb-4
          .row
            .col-md-auto
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/tema3/8.svg",style="max-width: 90px;")
            .col
              p.mb-0 El estudio de las anualidades es crucial para comprender cómo calcular tanto el valor presente como el valor futuro de los flujos de efectivo periódicos. El valor presente de una anualidad es especialmente útil para evaluar cuánto valen hoy los pagos futuros, descontándolos a una tasa de interés específica. Este cálculo es esencial para los prestamistas, que necesitan determinar cuánto prestar hoy con base en los pagos futuros que recibirán. Por otro lado, el valor futuro permite estimar cuánto se habrá acumulado al final del periodo, considerando las contribuciones periódicas y la tasa de interés aplicada.
        
        p.mb-0 Además de su importancia práctica, las anualidades tienen un impacto directo en la planificación financiera, tanto personal como empresarial:

      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/9.png",style="max-width: 400px;")
    
    TabsC.color-acento-contenido.mb-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Nivel personal" :icon="require('@/assets/curso/tema3/10.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Nivel personal
            p.mb-0 Ayudan a las personas a planificar metas de ahorro a largo plazo, como la educación universitaria, la compra de una vivienda o la jubilación. Por ejemplo, al establecer un plan de ahorro con contribuciones mensuales constantes, se puede calcular el monto total acumulado en un periodo específico, facilitando la consecución de objetivos financieros concretos.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/11.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ámbito empresarial" :icon="require('@/assets/curso/tema3/12.svg')" )
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0.order-2
            h4.mb-4 Ámbito empresarial
            p.mb-0 Las anualidades son esenciales para estructurar financiamientos, evaluar proyectos de inversión y administrar el capital de trabajo. Una empresa que evalúa un proyecto de inversión puede utilizar el concepto de anualidad para analizar los flujos de efectivo recurrentes esperados y determinar si el proyecto es viable financieramente. De manera similar, al emitir bonos, las empresas estructuran pagos periódicos a los tenedores de bonos, utilizando anualidades como base para calcular los montos y tiempos de los pagos.
        
          .col-lg-5.order-1
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')
    
    .row.mb-4
      .col-lg-8(data-aos="fade-rigth")
        p.mb-4 En conclusión, las anualidades son una herramienta financiera indispensable que permite gestionar y planificar flujos de efectivo recurrentes de manera eficiente. Su aplicación en áreas como préstamos, inversiones y seguros refleja su versatilidad y relevancia en la toma de decisiones financieras. Comprender cómo funcionan las anualidades y cómo calcular su valor presente o futuro es esencial para maximizar el uso de los recursos disponibles, garantizar la estabilidad financiera y alcanzar metas económicas tanto a corto como a largo plazo. En un entorno donde la planificación financiera es cada vez más importante, las anualidades proporcionan una base sólida para construir un futuro económico seguro y sostenible.
        p.fw-bold Las principales fórmulas de las anualidades son:
      .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/tema3/14.png",style="max-width: 400px;")
    
    .row.mb-4
      .col-lg-6.pe-lg-0(data-aos="fade-rigth")
        .bg-color-6.p-4.h-100.align-content-center
          ul
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Valor Futuro de una anualidad vencida:
                p.mb-0 VF = R × [(1 + i)^n - 1] / i
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Valor Presente de una anualidad vencida:
                p.mb-0 VP = R × [1 - (1 + i)^-n] / i
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Valor Futuro de una anualidad anticipada:
                p.mb-0 VF = R × [(1 + i)^n - 1] / i × (1 + i)
            li.d-flex.align-items-start.mb-3
              img.me-2.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              div
                p.mb-0.fw-bold Valor Presente de una anualidad anticipada:
                p.mb-0 VP = R × [1 - (1 + i)^-n] / i × (1 + i)
      .col-lg-6.ps-lg-0(data-aos="fade-left")
        .bg-color-7.p-4.h-100.align-content-center
          p.mb-3.fw-bold Donde:
          ul.mb-0.pb-0
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Renta (R).] Es el monto fijo de cada pago o cobro periódico.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Periodo de pago.] Es el intervalo entre pagos sucesivos, como mensual, trimestral, anual, etc.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Plazo (n).] Representa el número total de periodos durante los cuales se realizarán los pagos o cobros.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Tasa de interés (i).] Es la tasa aplicada a cada periodo, expresada como un porcentaje anual o por periodo.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Valor Presente (VP).] Es el valor actual de todos los pagos futuros, descontados a la tasa de interés aplicada.
            li.d-flex.align-items-start
              img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
              span #[b Valor Futuro (VF).] Es la cantidad acumulada al final de todos los periodos, considerando los pagos y la capitalización de intereses.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Clasificación de las anualidades
    
    p.mb-4 Las anualidades se clasifican en:

    .row.align-items-center.mb-4
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="1" titulo="Anualidad vencida")
            p.mb-2 En este tipo de anualidad, los pagos se realizan al final de cada periodo. Este tipo es común en préstamos y financiamientos.
            p.mb-2 #[b Ejemplo.] Cálculo del Valor Futuro de una anualidad vencida.
            p.mb-2 Un inversionista deposita $500 al final de cada mes en una cuenta que paga un 6 % de interés anual, compuesto mensualmente, durante 5 años.
            p.fw-bold.mb-2 Paso 1. Identificar los datos
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Renta (\(R\)) = $500
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (\(i\)) = 0.06 / 12 = 0.005
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (\(n\)) = 5 × 12 = 60
            p.fw-bold.mb-2 Paso 2. Aplicar la fórmula
            p.mb-0 La fórmula para el valor futuro de una anualidad vencida es:
            p.mb-2 VF = R × [(1 + i)^n - 1] / i
            p.fw-bold.mb-2 Paso 3. Sustituir los valores
            p.mb-2 VF = 500 × [(1 + 0.005)^60 - 1] / 0.005 = $34,885
            p.mb-0 #[b Resultado.] El valor futuro será aproximadamente de $34,885.
          div(numero="2" titulo="Anualidad anticipada")
            p.mb-2 En una anualidad anticipada, los pagos se realizan al inicio de cada periodo. Este tipo es común en arrendamientos.
            p.mb-2 #[b Ejemplo.] Cálculo del Valor Presente de una anualidad anticipada.
            p.mb-2 Un cliente paga $1,000 durante 3 años, al inicio de cada trimestre, a una tasa del 8 % anual compuesta trimestralmente.
            p.fw-bold.mb-2 Paso 1. Identificar los datos
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Renta (\(R\)) = $1,000
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (\(i\)) = 0.08 / 4 = 0.02
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (\(n\)) = 3 × 4 = 12
            p.fw-bold.mb-2 Paso 2. Aplicar la fórmula
            p.mb-0 La fórmula para el valor presente de una anualidad anticipada es:
            p.mb-2 VP = R × [(1 - (1 + i)^-n) / i] × (1 + i)
            p.fw-bold.mb-2 Paso 3. Sustituir los valores
            p.mb-2 VP = 1,000 × [(1 - (1 + 0.02)^-12) / 0.02] × (1 + 0.02) ≈ $10,497.30
            p.mb-0 #[b Resultado.] El valor presente es aproximadamente de $10,497.30.
          div(numero="3" titulo="Anualidad ordinaria")
            p.mb-2 En una anualidad ordinaria, los pagos tienen un inicio y fin definido.
            p.mb-2 #[b Ejemplo.] Cálculo de la renta en una anualidad ordinaria.
            p.mb-2 Un ahorrador desea acumular $20,000 en 10 años, con depósitos trimestrales en una cuenta que paga un 5 % anual, compuesto trimestralmente.
            p.fw-bold.mb-2 Paso 1. Identificar los datos
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Valor Futuro (\(VF\)) = $20,000
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (\(i\)) = 0.05 / 4 = 0.0125
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (\(n\)) = 10 × 4 = 40
            p.fw-bold.mb-2 Paso 2. Aplicar la fórmula
            p.mb-2 La fórmula para calcular la renta es: R = [VF × i] / [(1 + i)^n - 1]
            p.fw-bold.mb-2 Paso 3. Sustituir los valores
            p.mb-2 R = [20,000 × 0.0125] / [(1 + 0.0125)^40 - 1] ≈ $426.49
            p.mb-0 #[b Resultado.] El ahorrador debe depositar $426.49 trimestralmente.

      .col-lg-4
        figure.d-none.d-lg-block
          img.mx-auto(src="@/assets/curso/tema3/15.png",style="max-width: 400px;")

    .row.align-items-center
      .col-lg-8
        LineaTiempoD.large(data-aos="fade-left")
          div(numero="4" titulo="Anualidad perpetua")
            p.mb-2 En una anualidad perpetua, los pagos se realizan indefinidamente. Este tipo de anualidad es común en bonos perpetuos y otras inversiones que generan ingresos constantes sin un límite de tiempo.
            p.mb-2 #[b Ejemplo.] Cálculo del Valor Presente de una anualidad perpetua.
            p.mb-2 Un inversionista compra un bono perpetuo que paga $1,000 anuales, con una tasa de interés del 4 %.
            p.fw-bold.mb-2 Paso 1. Identificar los datos
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Renta (\(R\)) = $1,000
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (\(i\)) = 0.04
            p.fw-bold.mb-2 Paso 2. Aplicar la fórmula
            p.mb-2 La fórmula para calcular el valor presente de una anualidad perpetua es: VP = R / i
            p.fw-bold.mb-2 Paso 3. Sustituir los valores
            p.mb-2 VP = 1,000 / 0.04 = 25,000
            p.mb-0 #[b Resultado.] El valor presente del bono es $25,000.
          div(numero="5" titulo="Anualidad variable")
            p.mb-2 En una anualidad variable, los pagos cambian de valor en cada periodo. Este tipo de anualidad es común en arrendamientos o contratos donde los pagos están sujetos a incrementos periódicos o condiciones variables.
            p.mb-2 #[b Ejemplo.] Anualidad variable con incremento constante.
            p.mb-2 Un arrendador cobra $1,000 el primer año y aumenta $100 cada año durante 5 años. La tasa de interés es del 6 % anual.
            p.fw-bold.mb-2 Paso 1. Identificar los datos
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Renta inicial (\(R\)) = $1,000
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Incremento anual = $100
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Tasa de interés (\(i\)) = 0.06
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Número de periodos (\(n\)) = 5
            p.fw-bold.mb-2 Paso 2. Aplicar la fórmula general para calcular el valor presente
            p.mb-0 La fórmula para el valor presente de una anualidad variable con incrementos constantes es:
            p.mb-2 VP = Σ [R_n / (1 + i)^n], donde R_n = R + (n-1) × Incremento
            p.fw-bold.mb-2 Paso 3. Calcular cada periodo
            ul.mb-2.pb-0
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Año 1: R_1 = 1,000, VP_1 = 1,000 / (1.06)^1 = 943.40
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Año 2: R_2 = 1,100, VP_2 = 1,100 / (1.06)^2 = 978.47
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Año 3: R_3 = 1,200, VP_3 = 1,200 / (1.06)^3 = 1,010.68
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Año 4: R_4 = 1,300, VP_4 = 1,300 / (1.06)^4 = 1,040.08
              li.d-flex.align-items-start
                img.me-1.mt-1(src="@/assets/curso/tema1/11.svg",style="max-width: 16px;")
                span Año 5: R_5 = 1,400, VP_5 = 1,400 / (1.06)^5 = 1,066.92
            p.fw-bold.mb-2 Paso 4. Sumar los valores presentes
            p.mb-0 VP = VP_1 + VP_2 + VP_3 + VP_4 + VP_5
            p.mb-2 VP ≈ 943.40 + 978.47 + 1,010.68 + 1,040.08 + 1,066.92 = 5,039.55
            p.mb-0 #[b Resultado.] El valor presente de la anualidad variable, es aproximadamente de $5,039.55.

      .col-lg-4.order-first
        figure.d-none.d-lg-block
          img.mx-auto(src="@/assets/curso/tema3/16.png",style="max-width: 400px;")
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40386" target="_blank" rel="noopener noreferrer") Rodríguez Franco, J. (2015). Matemáticas financieras: ( ed.). Grupo Editorial Patria. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71685" target="_blank" rel="noopener noreferrer") Boullosa Torrecilla, A. M. & Ríos Rodríguez, L. R. (2017). Matemática financiera: ( ed.). Editorial Feijóo.


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rZZA9MPG-Qc" target="_blank" rel="noopener noreferrer") Juliho Castillo. (2016, 5 julio). Anualidades diferidas

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=AlWOQKb7Urc" target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019, 23 septiembre). Cálculo de la cuota de una anualidad anticipada


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
