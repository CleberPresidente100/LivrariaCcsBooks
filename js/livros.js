


// Função para obter as informações de um único livro.
function GetLivro(idLivro){

    var livro = null;
    var ListaDeLivros = GetAllLivros();
    
    // Faz a leitura de todos os livros em busca do livro que se procura.
    ListaDeLivros.forEach(function(item){
        // Cria o id do livro sendo pesquisado.
        var id = item.categoria + item.idImagem;

        // Verifica se o id do livro pesquisado é igual ao id do livro que se deseja encontrar.
        if(id = idLivro){
            livro = item;
            return;
        }
    });

    return livro;
}



// Função para obter todos os livros de uma determinada categoria.
function GetAllLivrosCategoria(categoria){

    var listaDeLivrosCategoria = [];
    var ListaDeLivros = GetAllLivros();
    
    // Faz a leitura de todos os livros em busca dos livros que pertencem a categoria que se procura.
    ListaDeLivros.forEach(function(item){

        // Verifica se a categoria pesquisada é igual a categoria que se deseja encontrar.
        if(item.categoria = categoria){
            listaDeLivrosCategoria.push(item);
        }
    });

    return listaDeLivrosCategoria;
}



// Função para obter todos os livros que estão em promoção.
function GetAllLivrosPromocao(){

    var listaDeLivrosPromocao = [];
    var ListaDeLivros = GetAllLivros();
    
    // Faz a leitura de todos os livros em busca dos livros que estão em promoção
    ListaDeLivros.forEach(function(item){

        // Verifica se o livro está na promoção.
        if(item.precoComDesconto != ""){
            listaDeLivrosPromocao.push(item);
        }
    });

    return listaDeLivrosPromocao;
}



// Função para listar todos os livros.
function GetAllLivros (){

    var ListaDeLivros = [];

    /***********************************
    *
    *   ROMANCE 
    * 
    ***********************************/

    ListaDeLivros.push({

        nome = "Esse Duque é Meu",
        autor = "James, Eloisa",
        isbn = "9788580419429",
        categoria = "Romance",
        descricao = '',
        idImagem = 10,
    
        idioma = "Português",
        numeroPaginas = 320,
        edicao = 1,
        anoPublicaco = 2019,
    
        precoOriginal = 44.9,
        precoComDesconto = 31.4,
    });

    ListaDeLivros.push({

        nome = "Contra Todas As Probabilidades Do Amor",
        autor = "Crane, Rebekah",
        isbn = "9788595810105",
        categoria = "Romance",
        descricao = 'Sejam bem-vindos ao acampamento Pádua. Um retiro de verão para adolescentes problemáticos. Mas não se tratam de problemas comuns, como não querer estudar, mentir ou colar na prova. Não! Estamos falando de problemas reais. Alguns deles tão grandes, tão sérios, que até um adulto desmoronaria sob o peso deles. No acampamento, Zander, uma garota enviada pelos pais contra a sua vontade, encontra uma série de adolescentes na mesma situação, e com três deles ela estabelece uma relação de amizade — Grover, Alex e Cassie. Todos os quatro são tão diferentes quanto as pessoas podem ser, mas têm algo em comum — eles estão quebrados por dentro. Em meio às sessões de grupo e, à medida em que o verão dá as caras, os quatro revelam seus trágicos segredos. Zander encontra-se atraída pelos encantos de Grover, e então começa a se perguntar, depois de muito tempo, se pode apostar em ser feliz novamente. Mas, antes, ela precisa lidar abertamente com seus problemas, para poder juntar seus pedaços e reconstruir sua vida Você pode pensar que se trata de uma história triste. E há partes duras sim, mas, Rebekah Crane consegue mostrar como na dificuldade podemos encontrar uma saída. Isso é uma das coisas que faz o livro completamente encantador, divertido e doce, capaz de deixar em você um grande sorriso no rosto.',
        idImagem = 9,
    
        idioma = "Português",
        numeroPaginas = 240,
        edicao = 1,
        anoPublicaco = 2018,
    
        precoOriginal = 39.9,
        precoComDesconto = 16.9,
    });

    ListaDeLivros.push({

        nome = "A Dama Mais Apaixonada",
        autor = "Quinn, Julia - James, Eloisa - Brockway, Connie",
        isbn = "9788530600211",
        categoria = "Romance",
        descricao = 'SEGUNDO VOLUME DA DUOLOGIA "A DAMA MAIS...". A dama mais apaixonada é uma história contada em três partes, repleta de diálogos espirituosos, conspirações e romances improváveis. “Leitura obrigatória para fãs de romances de época.” – Kirkus Reviews “Rico em inteligência e romantismo, A dama mais apaixonada é um livro inestimável.” – Booklist Três estrelas do Romance de Época se unem para transportar você a um mundo de tentação, paixão e amores inesperados Quando os sobrinhos do proprietário de terras escocês Taran Ferguson se recusam a se casar para dar continuidade à linhagem da família, ele decide cuidar pessoalmente da questão e arranjar uma esposa para pelo menos um dos dois. Numa noite de festa, Taran invade um castelo e sequestra quatro damas: uma linda e ousada donzela, uma herdeira com uma pequena mancha na reputação, uma bela e rica inglesa e uma jovem sem sobrenome tradicional ou fortuna. Uma delas certamente se apaixonará por um lorde escocês. Resta saber se, em meio à fúria de um duque sequestrado por engano, um castelo decrépito e uma tempestade violenta que não vai permitir que ninguém vá embora tão cedo, haverá espaço para que um amor floresça.',
        idImagem = 8,
    
        idioma = "Português",
        numeroPaginas = 288,
        edicao = 1,
        anoPublicaco = 2019,
    
        precoOriginal = 39.9,
        precoComDesconto = 27.9,
    });

    ListaDeLivros.push({

        nome = "Já Disse Que Te Amo?",
        autor = "Maskame, Estelle ",
        isbn = "9788580419597",
        categoria = "Romance",
        descricao = 'PRIMEIRO VOLUME DA TRILOGIA JÁ DISSE QUE TE AMO. Romance, lealdade e drama em uma trilogia que envolve o leitor desde a primeira pa´gina. “As consequências de um divórcio, os segredos de família e, principalmente, as dores do primeiro amor conduzem esta história sobre amadurecimento, vibrante de emoções.” – Publishers Weekly “Um livro forte, com uma irresistível pitada de amor proibido.” – Booklist Três verões inesquecíveis de segredos, mágoas e amores proibidos e avassaladores. Eden Munro foi para a Califórnia aproveitar o sol, as praias e celebridades. Seria um verão maravilhoso se ela não tivesse que conhecer sua nova família, repleta de estranhos: um pai que não vê há três anos, uma madrasta simpática até demais e três irmãos postiços. Na casa chique, ela vai ter que ficar bem ao lado do quarto de Tyler Bruce, o mais velho dos irmãos. Ele tem olhos verdes que transbordam raiva e sarcasmo, um ego maior que uma mansão de Beverly Hills e cara de poucos amigos. Eden nunca tinha conhecido alguém tão desagradável e tão... intrigante. Aos poucos, Eden tenta entender o que faz de Tyler uma pessoa tão envolvente quanto o clima da Califórnia. Em meio às festas e às novas amizades, ela percebe que está se apaixonando pela única pessoa que não deveria. Já disse que te amo? é o primeiro livro da trilogia de Estelle Maskame, que teve mais de 4 milhões de acessos no Wattpad.',
        idImagem = 7,
    
        idioma = "Português",
        numeroPaginas = 336,
        edicao = 1,
        anoPublicaco = 2019,
    
        precoOriginal = 39.9,
        precoComDesconto = 27.9,
    });

    ListaDeLivros.push({

        nome = "Almas Gêmeas - Por Quanto Tempo Um Sonho Consegue Sobreviver?",
        autor = "Sparks, Nicholas",
        isbn = "9788580418637",
        categoria = "Romance",
        descricao = 'Novo romance de Nicholas Sparks. Traduzidos para 50 idiomas, os livros de Nicholas Sparks já venderam mais de 100 milhões de livros no mundo. Hope Anderson está numa encruzilhada. Aos 36 anos, ela namora o mesmo homem há seis, sem perspectiva de casamento. Quando seu pai é diagnosticado com ELA, Hope resolve passar uma semana na casa de praia da família, na Carolina do Norte, para pensar nas difíceis decisões que precisa tomar em relação ao próprio futuro. Tru Walls nasceu numa família rica no Zimbábue. Nunca esteve nos Estados Unidos, até receber uma carta de um homem que diz ser seu pai biológico, convidando-o a encontrá-lo numa casa de praia na Carolina do Norte. Intrigado ele aceita e faz a viagem. Quando os dois estranhos se cruzam na praia, nasce entre eles uma ligação eletrizante e imediata. Nos dias que se seguem, os sentimentos que desenvolvem um pelo outro os obrigam a fazer escolhas que colocam à prova suas lealdades e reais chances de felicidade. O novo romance de Nicholas Sparks, na tradição de Diário de uma Paixão e Noites de Tormenta, aborda as muitas facetas do amor, os arrependimentos e a esperança que nunca morre, trazendo à tona a pergunta: por quanto tempo um sonho consegue sobreviver?',
        idImagem = 6,
    
        idioma = "Português",
        numeroPaginas = 288,
        edicao = 1,
        anoPublicaco = 2018,
    
        precoOriginal = 44.9,
        precoComDesconto = 37.9,
    });

    ListaDeLivros.push({

        nome = "A Filha Do Conde",
        autor = "Heath, Lorraine",
        isbn = "9786580969876",
        categoria = "Romance",
        descricao = 'Era revoltante ver que ela estava ainda mais bonita do que quando a vira pela última vez, quando trocaram juras de amor e fizeram promessas que foram quebradas poucas horas depois… Os anos e a maturidade tinham acrescentado uma graça que Lavínia não possuía aos 17, quando Finn declarara o seu amor.Será que ela ainda se lembrava dos momentos com carinho ou a memória também rasgava seu coração, como fazia com o dele? Lavínia o fizera de tolo. Nenhuma das lembranças que tinha dela deveriam ser agradáveis. Mas, em algumas noites, ainda ficava na cama encarando o teto, porque a imagem dela surgia sempre que fechava os olhos.Cinco anos de sua vida em isolamento, e a única coisa para lhe fazer companhia, para mantê-lo são, era a lembrança que tinha dela. Aquelas memórias eram seu sustento. No começo, ele as invocava para alimentar a sede de vingança, de retribuição, mas a solidão fora aumentando até transformá-las em sonhos. As lembranças traziam a esperança de que o amor estaria esperando em algum lugar, que voltaria a tê-la, sorrindo para ele, rindo com ele, enchendo-o de alegria. Lavínia não era mais sua - na verdade, nunca fora - mas, ainda assim, uma parte tola de si não conseguia se esquecer de quando quase a tivera, aquela garota que amara no passado.',
        idImagem = 5,
    
        idioma = "Português",
        numeroPaginas = 304,
        edicao = 1,
        anoPublicaco = 2020,
    
        precoOriginal = 39.9,
        precoComDesconto = 27.9,
    });

    ListaDeLivros.push({

        nome = "Um Amor Para Recordar",
        autor = "Sparks, Nicholas",
        isbn = "9788580419818",
        categoria = "Romance",
        descricao = '',
        idImagem = 4,
    
        idioma = "Português",
        numeroPaginas = 144,
        edicao = 1,
        anoPublicaco = 2019,
    
        precoOriginal = 39.9,
        precoComDesconto = 27.9,
    });

    ListaDeLivros.push({

        nome = "Como Eu Era Antes de Você",
        autor = "Moyes, Jojo",
        isbn = "9788580573299",
        categoria = "Romance",
        descricao = 'Aos 26 anos, Louisa Clark não tem muitas ambições. Ela mora com os pais, a irmã mãe solteira, o sobrinho pequeno e um avô que precisa de cuidados constantes desde que sofreu um derrame. Trabalha como garçonete num café, um emprego que não paga muito, mas ajuda nas despesas, e namora Patrick, um triatleta que não parece interessado nela. Não que ela se importe. Quando o café fecha as portas, Lou é obrigada a procurar outro emprego. Sem muitas qualificações, consegue trabalho como cuidadora de um tetraplégico. Will Traynor, de 35 anos, é inteligente, rico e mal-humorado. Preso a uma cadeira de rodas depois de um acidente de moto, o antes ativo e esportivo Will desconta toda a sua amargura em quem estiver por perto. Tudo parece pequeno e sem graça para ele, que sabe exatamente como dar um fim a esse sentimento. O que Will não sabe é que Lou está prestes a trazer cor a sua vida. E nenhum dos dois desconfia de que irá mudar para sempre a história um do outro.',
        idImagem = 3,
    
        idioma = "Português",
        numeroPaginas = 320,
        edicao = 1,
        anoPublicaco = 2013,
    
        precoOriginal = 44.9,
        precoComDesconto = 36.9,
    });

    ListaDeLivros.push({

        nome = "História De Um Grande Amor",
        autor = "Quinn, Julia",
        isbn = "9788530601089",
        categoria = "Romance",
        descricao = 'PRIMEIRO VOLUME DA TRILOGIA BEVELSTOKE. Julia Quinn já vendeu mais 1 milhão de livros pela Editora Arqueiro. “O timing perfeito de Julia Quinn para o humor permanece intacto. Este romance bem-escrito, divertido e delicado é diversão garantida.” – Publishers Weekly Aos 10 anos, Miranda Cheever já dava sinais claros de que não seria nenhuma bela dama. E já nessa idade, aprendeu a aceitar o destino de solteirona que a sociedade lhe reservava. Até que, numa tarde qualquer, Nigel Bevelstoke, o belo e atraente visconde de Turner, beijou solenemente sua mãozinha e lhe prometeu que, quando ela crescesse, seria tão bonita quanto já era inteligente. Nesse momento, Miranda não só se apaixonou, como teve certeza de que amaria aquele homem para sempre. Os anos que se seguiram foram implacáveis com Nigel e generosos com Miranda. Ela se tornou a mulher linda e interessante que o visconde previu naquela tarde memorável, enquanto ele virou um homem solitário e amargo, como consequência de um acontecimento devastador. Mas Miranda nunca esqueceu a verdade que anotou em seu diário tantos anos antes. E agora ela fará de tudo para salvar Nigel da pessoa que ele se tornou e impedir que seu grande amor lhe escape por entre os dedos.',
        idImagem = 2,
    
        idioma = "Português",
        numeroPaginas = 288,
        edicao = 1,
        anoPublicaco = 2020,
    
        precoOriginal = 39.9,
        precoComDesconto = 27.9,
    });

    ListaDeLivros.push({

        nome = "Teto Para Dois",
        autor = "O'leary, Beth",
        isbn = "9788551005415",
        categoria = "Romance",
        descricao = '',
        idImagem = 1,
    
        idioma = "Português",
        numeroPaginas = 400,
        edicao = 1,
        anoPublicaco = 2019,
    
        precoOriginal = 49.9,
        precoComDesconto = 42.9,
    });



    /***********************************
    *
    *   FICÇÃO
    * 
    ***********************************/

    ListaDeLivros.push({

        nome = "A Máquina do Tempo: Uma Invenção",
        autor = "H.G Wells",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Publicado em 1895, A Máquina do Tempo é considerado um dos primeiros romances a tratar do conceito de viagem no tempo. O personagem central, um cientista apresentado na trama apenas como o Viajante do Tempo, constrói uma máquina capaz de viajar pela quarta dimensão. Ao testá-la, é transportado para o ano de 802.701, em um mundo povoado pelos pacíficos elóis. Mas os elóis não são os únicos habitantes dessa nova Terra, e o Viajante do Tempo terá de enfrentar os morlocks, seres que vivem nos subterrâneos e guardam um importante segredo sobre o destino da humanidade.',
        idImagem = 1,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 29.61,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A Garota Do Lago",
        autor = "Charlie Donlea",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.',
        idImagem = 2,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 12.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "caixa de passaros: não abra os olhos",
        autor = "Josh Malerman",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Romance de estreia de Josh Malerman, Caixa de Pássaros é um thriller psicológico tenso e aterrorizante, que explora a essência do medo. Uma história que vai deixar o leitor completamente sem fôlego mesmo depois de terminar de ler. Basta uma olhadela para desencadear um impulso violento e incontrolável que acabará em suicídio. Ninguém é imune e ninguém sabe o que provoca essa reação nas pessoas. Cinco anos depois do surto ter começado, restaram poucos sobreviventes, entre eles Malorie e dois filhos pequenos. Ela sonha em fugir para um local onde a família possa ficar em segurança, mas a viagem que tem pela frente é assustadora: uma decisão errada e eles morrerão.',
        idImagem = 3,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 10.99,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "O homem de giz",
        autor = "C. J. Tudor",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Assassinato e sinais misteriosos em uma trama para fãs de Stranger Things e Stephen King. Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás. Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente construídos, mistérios de prender o fôlego e reviravoltas que vão impressionar até os leitores mais escaldados.',
        idImagem = 4,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 34.89,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "Sherlock Holmes - Casos Extraordinários",
        autor = "Doyle, Arthur Conan",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Esse volume reúne contos em que Sherlock demonstra seus métodos. Em A face amarela, Sherlock atende um homem com dúvidas sobre sua esposa. O ritual Musgrave apresenta um dos primeiros casos resolvidos por Sherlock, envolvendo um mapa do tesouro e estranhos desaparecimentos. A Liga dos Cabeças-Vermelhas trata de uma curiosa organização, que contratava apenas homens ruivos. O diamante azul começa com um ganso roubado e termina com..., bom, é preciso ler para conhecer essa estranha forma de praticar um roubo. As histórias apresentadas neste livro são de fácil leitura, o que permite ao jovem leitor acompanhar o método Holmes e entender o fascínio que esse personagem extraordinário tem exercido durante todos esses anos. Tradução e adaptação - Marcia Kupstas - Marcia ama as histórias. A partir de 1986 começou na carreira de escritora e hoje tem mais de 70 livros publicados, boa parte deles para jovens.',
        idImagem = 5,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 47,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A cabana",
        autor = "William P. Young",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Esta história deve ser lida como se fosse uma oração – a melhor forma de oração, cheia de ternura, amor, transparência e surpresas. Se você tiver que escolher apenas um livro de ficção para ler este ano, leia A cabana." - Michael W. Smith Publicado nos Estados Unidos por uma editora pequena, A cabana se revelou um desses livros raros que, através do entusiasmo e da indicação dos leitores, se torna um fenômeno de público – já são quase dois milhões de exemplares vendidos – e de imprensa. Durante uma viagem de fim de semana, a filha mais nova de Mack Allen Phillips é raptada e evidências de que ela foi brutalmente assassinada são encontradas numa cabana abandonada. Após quatro anos vivendo numa tristeza profunda causada pela culpa e pela saudade da menina, Mack recebe um estranho bilhete, aparentemente escrito por Deus, convidando-o para voltar à cabana onde aconteceu a tragédia. Apesar de desconfiado, ele vai ao local do crime numa tarde de inverno e adentra passo a passo no cenário de seu mais terrível pesadelo. Mas o que ele encontra lá muda o seu destino para sempre. Em um mundo tão cruel e injusto, A cabana levanta um questionamento atemporal: se Deus é tão poderoso, por que não faz nada para amenizar o nosso sofrimento? As respostas que Mack encontra vão surpreender você e podem transformar sua vida de forma tão profunda quanto transformou a dele. Você vai querer partilhar este livro com todas as pessoas que ama.',
        idImagem = 6,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 29.89,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A Garota No Trem",
        autor = "Hawkins, Paula",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'A garota no trem, best-seller internacional que deu origem ao filme estrelado por Emily Blunt. Todas as manhãs Rachel pega o trem das 8h04 de Ashbury para Londres. O arrastar trepidante pelos trilhos faz parte de sua rotina. O percurso, que ela conhece de cor, é um hipnotizante passeio por galpões, caixas d’água, pontes, casebres e aconchegantes casas vitorianas.Em determinado trecho, o trem para no sinal vermelho. E é de lá que Rachel observa diariamente a casa de número 15. Obcecada com seus belos habitantes – a quem chama de Jess e Jason –, Rachel é capaz de descrever o que imagina ser a vida perfeita do jovem casal. Até testemunhar uma cena chocante, segundos antes de o trem dar um solavanco e seguir viagem. Poucos dias depois, ela descobre que Jess – na verdade Megan – está desaparecida.Sem conseguir se manter alheia à situação, ela vai à polícia e conta o que viu. E acaba não só participando diretamente do desenrolar dos acontecimentos, mas também da vida de todos os envolvidos.Uma narrativa extremamente inteligente e repleta de reviravoltas, A garota no trem é um thriller digno de Hitchcock a ser compulsivamente devorado. “Nada é mais viciante que A garota no trem.” Vanity Fair“Os fãs de Garota exemplar vão devorar esse thriller psicológico.” People O livro adulto que vendeu mais rápido na história.Eleito em 2015 um dos melhores livros do ano pelo Kirkus Reviews.Vencedor do Goodreads Choice Award de 2015 na categoria Mistério & Thriller.',
        idImagem = 7,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 34.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A culpa é das estrelas",
        autor = "John Green",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Hazel é uma paciente terminal. Ainda que, por um milagre da medicina, seu tumor tenha encolhido bastante — o que lhe dá a promessa de viver mais alguns anos —, o último capítulo de sua história foi escrito no momento do diagnóstico. Mas em todo bom enredo há uma reviravolta, e a de Hazel se chama Augustus Waters, um garoto bonito que certo dia aparece no Grupo de Apoio a Crianças com Câncer. Juntos, os dois vão preencher o pequeno infinito das páginas em branco de suas vidas.Inspirador, corajoso, irreverente e brutal, A culpa é das estrelas é a obra mais ambiciosa e emocionante de John Green, sobre a alegria e a tragédia que é viver e amar.Best-seller da Veja',
        idImagem = 8,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 28.72,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A guerra dos mundos",
        autor = "H.G.Wells",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Eles vieram do espaço. Eles vieram de Marte. Com tripés biomecânicos gigantes, querem conquistar a Terra e manter os humanos como escravos. Nenhuma tecnologia terrestre parece ser capaz de conter a expansão do terror pelo planeta. É o começo da guerra mais importante da história. Como a humanidade poderá resistir à investida de um potencial bélico tão superior? Publicado pela primeira vez em 1898, A guerra dos mundos aterrorizou e divertiu muitas gerações de leitores. Esta edição especial contém as ilustrações originais criadas em 1906 por Henrique Alvim Corrêa, brasileiro radicado na Bélgica. Conta também com um prefácio escrito por Braulio Tavares, uma introdução de Brian Aldiss, membro da H. G. Wells Society, e uma entrevista com H. G. Wells e o famoso cineasta Orson Welles - responsável pelo sucesso radiofônico de A guerra dos mundos em 1938 -, que fazem desta a edição definitiva para fãs de Wells.',
        idImagem = 9,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 47.92,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "Perdido Em Marte - Uma Missão A Marte. Um Terrível Acidente. A Luta de Um Homem Pela Sobrevivência",
        autor = "Andy Weir",
        isbn = "",
        categoria = "Ficcao",
        descricao = 'Ha seis dias, o astronauta Mark Watney se tornou a decima sétima pessoa a pisar em Marte. E, provavelmente, será a primeira a morrer no planeta vermelho. Depois de uma forte tempestade de areia, a missão Ares 3 e abortada e a tripulação vai embora, certa de que Mark morreu em um terrível acidente. Ao despertar, ele se vê completamente sozinho, ferido e sem ter como avisar as pessoas na Terra que está vivo. E, mesmo que conseguisse se comunicar, seus mantimentos terminariam anos antes da chegada de um possível resgate. Ainda assim, Mark não está disposto a desistir. Munido de nada além de curiosidade e de suas habilidades de engenheiro e botânico e um senso de humor inabalável, ele embarca numa luta obstinada pela sobrevivência. Para isso, será o primeiro homem a plantar batatas em Marte e, usando uma genial mistura de cálculos e fita adesiva, vai elaborar um plano para entrar em contato com a Nasa e, quem sabe, sair vivo de lá. Com um forte embasamento científico real e moderno, perdido em Marte e um suspense memorável e divertido, impulsionado por uma trama que não para de surpreender o leitor.',
        idImagem = 10,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 29,
        precoComDesconto = 0,
    });



    /***********************************
    *
    *   AVENTURA 
    * 
    ***********************************/

    ListaDeLivros.push({

        nome = "As Aventuras de Mike",
        autor = "Gabriel Dearo, Manu Digilio",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 1,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 19.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "As Aventuras de Sherlock Holmes",
        autor = "Mark Twain",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 2,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 27.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A Rainha Vermelha",
        autor = "Victoria Aveyard",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 3,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 25.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "Jogador Nº 1",
        autor = "Ernest Cline",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 4,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 30.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "As Aventuras Na Netoland Com Luccas Neto",
        autor = "Luccas Neto",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 5,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 18.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "Die Unendliche Geschichte",
        autor = "Michael Ende",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 6,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 84.5,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "As Aventuras de Sherlock Holmes",
        autor = "Arthur Conan Doyle",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 7,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 27.9,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A Viajante do Tempo",
        autor = "Diana Gabaldon",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 8,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 39.89,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "The Amber Spyglass",
        autor = "Philip Pullman",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 9,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 42.89,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "A grande aventura de Maria Fumaça",
        autor = "Ana Maria Machado",
        isbn = "",
        categoria = "Aventura",
        descricao = '',
        idImagem = 10,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 29.4,
        precoComDesconto = 0,
    });



    /***********************************
    *
    *   Infantil 
    * 
    ***********************************/
/*
    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 1,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 2,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 3,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 4,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 5,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 6,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 7,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 8,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 9,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Infantil",
        descricao = '',
        idImagem = 10,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });
*/


    /***********************************
    *
    *   Policial 
    * 
    ***********************************/
/*
    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 1,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 2,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 3,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 4,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 5,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 6,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 7,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 8,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 9,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Policial",
        descricao = '',
        idImagem = 10,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });
*/


    /***********************************
    *
    *   Modelo 
    * 
    ***********************************/
/*
    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 1,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 2,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 3,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 4,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 5,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 6,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 7,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 8,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 9,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });

    ListaDeLivros.push({

        nome = "",
        autor = "",
        isbn = "",
        categoria = "Modelo",
        descricao = '',
        idImagem = 10,

        idioma = "Português",
        numeroPaginas = 0,
        edicao = 1,
        anoPublicaco = 20,

        precoOriginal = 0,
        precoComDesconto = 0,
    });
*/




    return ListaDeLivros;
}


