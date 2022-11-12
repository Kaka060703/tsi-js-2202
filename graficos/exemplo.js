new Morris.Line({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeLinha',
    resize: true,
    // Dados do gráfico
    data: [
     { year: '2008', value: 20 },
     { year: '2009', value: 10 },
     { year: '2010', value: 5 },
     { year: '2011', value: 5 },
     { year: '2012', value: 20 },
     { year: '2013', value: 25 },
     { year: '2014', value: 7 }
    ],
    // O nome do eixo com os valores de X
    xkey: 'year',
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],
    // Rótulos para os índices -- aparece quando passa o mouse por cima
    labels: ['Value']
});

new Morris.Donut({
    element: 'graficoDeDonut',
    data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ]
});

new Morris.Bar({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeBarra',
    resize: true,
    // Dados do gráfico
    data: [
     { year: '2008', value: 20 },
     { year: '2009', value: 10 },
     { year: '2010', value: 5 },
     { year: '2011', value: 5 },
     { year: '2012', value: 20 },
     { year: '2013', value: 25 },
     { year: '2014', value: 7 }
    ],
    // O nome do eixo com os valores de X
    xkey: 'year',
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],
    // Rótulos para os índices -- aparece quando passa o mouse por cima
    labels: ['Value']
});


new Morris.Area({
    // ID do elemento onde o gráfico vai aparecer
    element: 'graficoDeArea',
    resize: true,
    // Dados do gráfico
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 },
        { year: '2013', value: 25 },
        { year: '2014', value: 7 }
    ],
    // O nome do eixo com os valores de X
    xkey: 'year',
    // Uma lista de nomes dos atributos de dados contidos em Y
    ykeys: ['value'],
    labels: ['Value']
});

