<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tasas nominales, efectivas y periódicas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") En el mundo financiero, es fundamental comprender cómo se expresan y calculan las tasas de interés. 
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las tasas nominales, efectivas y periódicas, son conceptos básicos que permiten analizar y comparar distintas opciones de financiamiento o inversión. Estas tasas reflejan la relación entre el interés generado, el tiempo y la frecuencia de capitalización, lo que facilita la toma de decisiones financieras informadas. 
    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tasas nominales
    
    p.mb-4 La tasa nominal (TN) es uno de los conceptos más comunes y fundamentales en el ámbito financiero y se utiliza ampliamente para expresar el costo o rendimiento de diversos instrumentos financieros. Esta tasa se presenta como un porcentaje anual y actúa como una referencia general para describir el interés asociado a préstamos, inversiones o cualquier otra operación financiera. Sin embargo, la tasa nominal no incluye el efecto acumulativo de la capitalización de intereses, lo que significa que no refleja el crecimiento real o el costo efectivo de una operación, especialmente cuando los intereses se capitalizan con mayor frecuencia que una vez al año (Naranjo Bermúdez, 2019).

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-1.order-lg-2
            h2.mb-4(data-aos="flip-up") Tasas nominales
            p.mb-4(data-aos="fade-right") En el PDF <b>Tasas nominales</b>, se exploran ejemplos prácticos que muestran su aplicación, destacando su relación con la frecuencia de capitalización y su diferencia con la tasa efectiva. Este contenido proporciona herramientas clave para analizar y comparar productos financieros, facilitando decisiones informadas en contextos financieros diversos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tasas nominales.
    
          .col-lg-4.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-7.order-6.order-lg-1
        p(data-aos="fade-left") La fórmula para convertir una tasa nominal a una tasa periódica: TP = TN / m
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 TP: Tasa periódica (por periodo de capitalización).
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 TN: Tasa nominal anual.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 m: Frecuencia de capitalización (número de periodos en un año, por ejemplo, 12 para mensual).

    h2(data-aos="fade-left") Ejemplo: 
    h2(data-aos="fade-left") Cálculo de tasa periódica a partir de la tasa nominal

    p.mb-5 Una empresa tiene una inversión que ofrece una tasa nominal anual del 12 %, capitalizada mensualmente. Deseas calcular cuánto interés aplica en cada periodo de capitalización para entender mejor el comportamiento de la inversión.

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 1" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 1
            p.mb-0 Identificación de datos.
            p.mb-0 a tasa nominal es del 12 % anual (TN = 0.12). Dado que la capitalización es mensual, hay 12 periodos de capitalización en un año (m = 12).

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 2" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 2
            p.mb-0 Cálculo de la tasa periódica.
            p.mb-0 La tasa periódica se calcula dividiendo la tasa nominal anual entre el número de periodos de capitalización al año.mb-0
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = TN / m
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.12 / 12
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.01

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 3" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 3
            p.mb-0 Interpretación del resultado.
            p.mb-0 La tasa periódica mensual es del 1 % (0.01 en formato decimal). Esto significa que en cada periodo de capitalización (cada mes), se aplicará un interés equivalente al 1 % sobre el saldo acumulado o el monto base.
            p.mb-0 Este cálculo es esencial para inversiones o préstamos con pagos periódicos, dado que determina cuánto se acumula o se debe pagar en cada periodo. Por ejemplo, en el caso de un préstamo, cada mes se calculará un 1 % de interés sobre el saldo pendiente.

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='', style="width: 100%;")
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tasas efectivas
    
    p.mb-4 La tasa efectiva (TE) es un indicador financiero clave que representa el rendimiento real de una inversión o el costo total de un financiamiento, considerando el efecto completo de la capitalización de los intereses. A diferencia de la tasa nominal, que se presenta como un porcentaje anual sin incluir el impacto de la capitalización, la tasa efectiva integra el efecto del interés compuesto, proporcionando una medida más precisa del crecimiento real del dinero en inversiones o del costo acumulado en préstamos (Naranjo Bermúdez, 2019).

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 ¿Por qué es útil?
              p La tasa efectiva es especialmente útil porque permite comparar opciones financieras que tienen distintas frecuencias de capitalización, como mensual, trimestral, semestral o anual. Este atributo es fundamental en la toma de decisiones financieras, dado que muchas veces las instituciones financieras presentan tasas nominales que no reflejan completamente el costo o rendimiento real. Por ejemplo, dos inversiones pueden tener la misma tasa nominal anual, pero si una se capitaliza mensualmente y la otra anualmente, los rendimientos finales serán diferentes, y solo la tasa efectiva permite medir con precisión el rendimiento real de cada opción.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Cálculo
              p El cálculo de la tasa efectiva toma en cuenta no solo la tasa nominal, sino también la frecuencia de capitalización, es decir, cuántas veces al año los intereses se calculan y se suman al capital. Cuanto mayor sea la frecuencia de capitalización, mayor será el impacto del interés compuesto, y, por ende, más alta será la tasa efectiva. Por ejemplo, una tasa nominal anual del 12 % con capitalización mensual generará una tasa efectiva superior al 12 %, porque los intereses se aplican y se reinvierten cada mes, aumentando el capital base para los cálculos posteriores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Inversiones y préstamos
              p La tasa efectiva es ampliamente utilizada tanto en el ámbito de las inversiones como en el de los préstamos. En el caso de las inversiones, es un indicador clave para evaluar el rendimiento real de instrumentos financieros como cuentas de ahorro, certificados de depósito, bonos, y fondos de inversión. Por ejemplo, si un inversor tiene la opción de elegir entre dos cuentas de ahorro, una con capitalización trimestral y otra con capitalización mensual, la tasa efectiva le permitirá identificar cuál ofrece un mayor rendimiento total, independientemente de la frecuencia con la que se calculen los intereses.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Ámbito financiero
              p En el ámbito del financiamiento, la tasa efectiva es crucial para calcular el costo total de productos como hipotecas, préstamos personales, créditos automotrices o tarjetas de crédito. Por ejemplo, una hipoteca con una tasa nominal del 10 % y capitalización mensual tendrá un costo total mayor que una con la misma tasa nominal y capitalización anual. La tasa efectiva permite a los prestatarios entender el verdadero costo de los préstamos y compararlos de manera justa, considerando el impacto del interés compuesto en cada caso.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7
              h5 Alternativas financieras internacionales
              p La tasa efectiva desempeña un papel importante en la evaluación de alternativas financieras internacionales, donde las tasas de interés y las frecuencias de capitalización pueden variar significativamente entre países o instituciones financieras. Por ejemplo, un inversor que analiza bonos emitidos en diferentes mercados puede utilizar la tasa efectiva para determinar cuál de ellos ofrece un mejor rendimiento ajustado al impacto de la capitalización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7
              h5 Ventaja significativa
              p Una de las ventajas más significativas de la tasa efectiva es que proporciona una base estandarizada para comparar diferentes opciones financieras. Mientras que las tasas nominales pueden ser engañosas o incompletas, la tasa efectiva elimina las distorsiones causadas por la frecuencia de capitalización, permitiendo a los usuarios tomar decisiones informadas y basadas en el costo o rendimiento real. Esto es especialmente relevante en un entorno financiero donde las instituciones suelen utilizar tasas nominales como herramienta de marketing para destacar productos que pueden parecer más atractivos de lo que realmente son.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7
              h5 Ejemplo
              p Por ejemplo, si una persona está evaluando dos opciones de financiamiento para un préstamo de $50,000, una con una tasa nominal anual del 8 % con capitalización trimestral y otra con una tasa nominal anual del 7.8 % con capitalización mensual, podría parecer que la segunda opción es más económica. Sin embargo, al calcular la tasa efectiva, podría descubrir que la primera opción tiene un costo total más bajo debido a la menor frecuencia de capitalización. Este tipo de análisis subraya la importancia de la tasa efectiva como herramienta para tomar decisiones financieras acertadas.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En conclusión, la tasa efectiva es un indicador esencial en las finanzas, puesto que refleja el rendimiento o costo real de una operación financiera al considerar completamente el impacto del interés compuesto. Su capacidad para estandarizar comparaciones entre opciones con distintas frecuencias de capitalización la convierte en una herramienta invaluable tanto para inversores como para prestatarios. Comprender y utilizar la tasa efectiva es fundamental para optimizar decisiones financieras, maximizar rendimientos y minimizar costos en un entorno financiero cada vez más complejo y competitivo.

    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        p(data-aos="fade-left") La fórmula para calcular la tasa efectiva anual: TEA = (1 + TP)^m – 1
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Donde:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 TEA: Tasa efectiva anual.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 TP: Tasa periódica.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-3
              p.mb-0 m: Número de periodos de capitalización en un año.

    h2(data-aos="fade-left") Ejemplo: 
    h2(data-aos="fade-left") Cálculo de tasa efectiva anual

    p.mb-5 Un banco ofrece una cuenta de ahorros con una tasa nominal anual del 12 % y capitalización trimestral. Como inversionista, deseas calcular cuál será el rendimiento real anual considerando el efecto de la capitalización.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p.mb-0 Identificación de los datos.
            p.mb-0 La tasa nominal anual es del 12 % (TN = 0.12). Dado que la capitalización es trimestral, hay 4 periodos de capitalización al año (m = 4).
    
          .div(titulo="Paso 2")
            p.mb-0 Cálculo de la tasa periódica.
            p.mb-0 Primero, obtenemos la tasa periódica dividiendo la tasa nominal entre el número de periodos al año:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = TN / m
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.12 / 4
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.03
           
          .div(titulo="Paso 3")
            p.mb-0 Cálculo de la tasa efectiva anual.
            p.mb-0 La tasa efectiva anual se calcula utilizando la fórmula:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = (1 + TP)^m - 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = (1 + 0.03)^4 – 1 
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = 1.125509 - 1 = 0.125509
    
          .div(titulo="Paso 4")
            p.mb-0 Interpretación del resultado.
            p.mb-o La tasa efectiva anual es del 12.55 % (0.125509 en formato decimal). Esto significa que, al considerar la capitalización trimestral, el rendimiento real de la inversión es mayor que el 12 % nominal inicialmente ofrecido.
            p.mb-0 Este cálculo es crucial para comparar productos financieros que tienen diferentes frecuencias de capitalización. Un inversionista siempre debería analizar la TEA para entender el verdadero rendimiento.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Tasas periódicas
    
    p.mb-4 La tasa periódica (TP) es un concepto esencial en el ámbito financiero y se refiere al interés que se aplica en cada periodo de capitalización de un instrumento financiero, ya sea un préstamo o una inversión. Esta tasa se obtiene al dividir la tasa nominal anual entre el número de periodos de capitalización en un año, lo que la convierte en una herramienta indispensable para calcular los intereses generados o cobrados en un intervalo específico. Su principal función es determinar el costo o rendimiento correspondiente a cada periodo de tiempo dentro del horizonte anual (Naranjo Bermúdez, 2019).

    .bg-full-width.bg-color-7
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Tasas periódicas
            p.mb-4(data-aos="fade-right") En el PDF <b>Tasas periódicas</b>, se presentan ejemplos prácticos que ilustran cómo calcular y aplicar esta tasa para determinar intereses en préstamos e inversiones, facilitando decisiones financieras más informadas. Este material destaca su relevancia en la planificación financiera y en la comparación de productos con diferentes frecuencias de capitalización.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tasas periódicas.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/19.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En conclusión, la tasa periódica es un elemento clave en las finanzas que desglosa la tasa nominal anual en intervalos más pequeños, adaptándose a la frecuencia de capitalización de cada operación financiera. Su importancia radica en su capacidad para proporcionar una visión detallada y específica del costo o rendimiento en cada periodo, facilitando cálculos precisos y comparaciones efectivas entre diferentes productos financieros. Comprender la tasa periódica es esencial para gestionar de manera eficiente tanto las obligaciones de pago como las oportunidades de inversión, asegurando una mejor toma de decisiones en un entorno financiero complejo y dinámico.
    
    h2(data-aos="fade-left") Ejemplo: 
    h2(data-aos="fade-left").mb-5 Comparación de tasas con diferente capitalización


    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") La fórmula para calcular la tasa efectiva anual: TEA = (1 + TP)^m – 1
    
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          p Supongamos que tiene dos opciones de inversión:
          ul.lista-ul--color
            li.mb-0.d-flex
              i
              p.mb-0 1. Una tasa nominal anual del 10 % con capitalización mensual.
            li.mb-0.d-flex
              i
              p.mb-0 2. Una tasa nominal anual del 10 % con capitalización semestral.
        p Desea determinar cuál de las dos opciones ofrece un mayor rendimiento anual considerando el efecto de la capitalización.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/21.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p.mb-0 Identificación de datos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Para la primera inversión: TN = 10\% = 0.10, m = 12 (mensual).
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 Para la segunda inversión: TN = 10\% = 0.10, m = 2 (semestral).
    
          .div(titulo="Paso 2")
            p.mb-0 Cálculo de la tasa periódica para ambas inversiones.
            p.mb-0 1. Primera inversión:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = TN / m
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.10 / 12
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TP = 0.008333
            p.mb-0 2. Segunda inversión:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TP = TN / m
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TP = 0.10 / 2
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TP = 0.05
           
          .div(titulo="Paso 3")
            p.mb-0 Cálculo de la tasa efectiva anual para ambas inversiones.
            p.mb-0 1. Primera inversión:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = (1 + TP)^m - 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = (1 + 0.008333)^12 - 1
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-3
                p.mb-0 TEA = 1.104713 - 1 = 0.104713
            p.mb-0 2. Segunda inversión:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TEA = (1 + TP)^m - 1
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TEA = (1 + 0.05)^2 – 1
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-3
                  p.mb-0 TEA = 1.1025 - 1 = 0.1025
    
          .div(titulo="Paso 4")
            p.mb-0 Interpretación del resultado.
            p.mb-o La primera inversión, con capitalización mensual, tiene una tasa efectiva anual del 10.47 %, mientras que la segunda inversión, con capitalización semestral, tiene una tasa efectiva anual del 10.25 %. Por lo tanto, la primera inversión ofrece un mejor rendimiento anual debido a la mayor frecuencia de capitalización.
            p.mb-0 Este análisis permite elegir la mejor opción financiera basándose en el rendimiento efectivo, considerando la frecuencia de capitalización.

  
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/ " target="_blank" rel="noopener noreferrer") de Vergara, L. C. & Castrillón Cifuentes, J. (2014). Matemáticas financieras: (5 ed.). Universidad del Norte 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/105545" target="_blank" rel="noopener noreferrer") Tarango, J. P. (2019). Matemáticas financieras: ( ed.). Cano Pina. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.ulima.edu.pe/bitstream/handle/20.500.12724/5910/Matematica%20financiera.pdf?isAllowed=y&sequence=1" target="_blank" rel="noopener noreferrer") Universidad de Lima. (2018). Matemática Financiera: Teoría y Ejercicios.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.ulima.edu.pe/bitstream/handle/20.500.12724/5910/Matematica%20financiera.pdf?isAllowed=y&sequence=15" target="_blank" rel="noopener noreferrer") Universidad de Lima. (2018). Matemática Financiera: Teoría y Ejercicios. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RlYZA7B1w6o" target="_blank" rel="noopener noreferrer") Mis Finanzas U. (2019c, septiembre 9). Conversión entre tasas de interés [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Bq4cwmfFhHE " target="_blank" rel="noopener noreferrer") Mariacanovirtual. (2017, 24 noviembre). Tasa efectiva, nominal y equivalencias [Vídeo]. YouTube


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
