let dados = [
    {
        titulo: "Memórias Póstumas de Brás Cubas",
        descricao: "Obra-prima de Machado de Assis, nos apresenta um narrador inusitado: um defunto que decide contar a própria história. Com um tom irônico e crítico, Brás Cubas, um homem da alta sociedade brasileira do século XIX, relembra sua vida marcada por amores não correspondidos, frustrações e uma visão pessimista da existência. Essa obra, considerada um marco do Realismo no Brasil, convida o leitor a uma reflexão profunda sobre a vida, a morte e a condição humana, tudo isso embalado por uma narrativa ágil e repleta de ironia.",
        link:"https://www.amazon.com.br/Mem%C3%B3rias-p%C3%B3stumas-Cubas-Machado-Assis/dp/6555246936/ref=sr_1_2?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&s=books&sr=1-2",
        tags:"realismo literatura brasileira clássico ironia morte vida sátiraséculo XIX" 
    },
    {
        titulo: "A Moreninha",
        descricao: "Em a Moreninha, Joaquim Manuel de Macedo nos presenteia com uma história marcada pela idealização da mulher amada e a busca por um amor puro e eterno, características típicas do Romantismo. A trama se desenvolve na Ilha de Paquetá, onde Augusto conhece Carolina, a moreninha que dá título à obra.",
        link:"https://www.amazon.com.br/moreninha-Joaquim-Manoel-Macedo/dp/6550970059/ref=sr_1_1?s=books&sr=1-1",
        tags:"joaquim manuel de macedo romantismo"  
    },
    {
        titulo: "O Cortiço",
        descricao: "O Cortiço, de Aluísio Azevedo, é uma obra-prima do Naturalismo brasileiro que nos transporta para um cortiço carioca do século XIX. Através de uma narrativa rica em detalhes e personagens complexos, o autor retrata a vida de diversos moradores desse ambiente. A obra explora temas como a luta pela sobrevivência, a ascensão social, o determinismo biológico e o impacto do meio ambiente sobre o indivíduo.",
        link:"https://www.amazon.com.br/corti%C3%A7o-Alu%C3%ADsio-Azevedo/dp/8594318839/ref=pd_sim_d_sccl_2_4/141-0195494-5891806?psc=1",
        tags:"aluísio azevedo naturalismo"
    },
    {
        titulo: "A Hora da Estrela",
        descricao: "Clarice Lispector, em 'A Hora da Estrela', narra a vida de Macabéa, uma jovem nordestina que busca seu lugar no mundo. Com uma prosa poética e introspectiva, a autora explora temas como a solidão, a marginalização e a busca por identidade. A obra é considerada um marco da literatura feminina brasileira.",
        link:"https://www.amazon.com.br/hora-estrela-Edi%C3%A7%C3%A3o-comemorativa/dp/6555320354/ref=pd_bxgy_d_sccl_2/141-0195494-5891806?psc=1a",
        tags:"clarice lispector macabéa literatura feminina"
    },
    {
        titulo: "Dom Casmurro",
        descricao: "Machado de Assis, em 'Dom Casmurro', tece uma trama envolvente em torno da dúvida sobre a fidelidade de Capitu. O romance, narrado em primeira pessoa por Bentinho, explora temas como a inveja, a paixão e a construção da identidade.",
        link:"https://www.amazon.com.br/Dom-Casmurro-Machado-Assis/dp/859431860X/ref=pd_bxgy_d_sccl_1/141-0195494-5891806?psc=1",
        tags:"machado de assis capitu bentinho"
    },
    {
        titulo: "Capitães da Areia",
        descricao: "Jorge Amado, em 'Capitães da Areia', retrata a vida de um grupo de meninos de rua em Salvador. Com uma linguagem vívida e poética, o autor denuncia as desigualdades sociais e a exploração infantil, ao mesmo tempo em que celebra a amizade, a coragem e a esperança.",
        link:"https://www.amazon.com.br/Capit%C3%A3es-areia-Jorge-Amado/dp/8535914064/ref=pd_sim_d_sccl_3_7/137-5143893-6529753?psc=1",
        tags:"jorge amado salvador"
    },
    {
        titulo: "Grande Sertão: veredas",
        descricao: "Em Grande Sertão: veredas, Guimarães Rosa nos transporta para o sertão. A narrativa, repleta de linguagem rica e poética, acompanha a jornada de Riobaldo Tatarana, um jagunço que relembra sua vida e os conflitos que marcaram a região.",
        link:"https://www.amazon.com.br/Grande-sert%C3%A3o-Veredas-Guimar%C3%A3es-Rosa/dp/8535931988/ref=sr_1_1_sspa?s=books&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
        tags:"guimarães rosa sertão riobaldo tatarana regionalismo"
    },
    {
        titulo: "Iracema",
        descricao: "Romance indianista de José de Alencar que narra a história de amor entre uma índia tupi e um português, em um Brasil colonial idealizado. A obra é marcada por uma linguagem poética e pela idealização da natureza e do indígena.",
        link:"https://www.amazon.com.br/Iracema-Jos%C3%A9-Alencar/dp/655552748X/ref=pd_sim_d_sccl_2_5/141-0195494-5891806?psc=1",
        tags:"josé de alencar natureza brasil colonial"
    },
    {
        titulo: "O triste fim de Policarpo Quaresma",
        descricao: "Romance de Lima Barreto que satiriza a burguesia e a política brasileira do início do século XX. Policarpo Quaresma, um nacionalista ingênuo, busca transformar o Brasil em um país idealizado, mas acaba frustrado e marginalizado.",
        link:"https://www.amazon.com.br/Triste-Policarpo-Quaresma-Lima-Barreto/dp/8563560174/ref=sr_1_1?s=books&sr=1-1",
        tags:"lima barreto sátira social"
    },
    {   titulo: "Vidas Secas", 
        descricao:"Em Vidas Secas, Graciliano Ramos retrata a vida sofrida de uma família de retirantes no sertão nordestino. A obra denuncia as desigualdades sociais e as condições de vida no semiárido brasileiro.", 
        link:"https://www.amazon.com.br/Vidas-secas-Graciliano-Ramos/dp/6550971292/ref=pd_sim_d_sccl_2_2/141-0195494-5891806?psc=1s",
        tags:"graciliano ramos sertão seca retirantes"
    }
   ];
   
   