export const categories = [
  {
    name: 'Пиццы',
  },
  {
    name: 'Закуски',
  },
  {
    name: 'Завтрак',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Кофе',
  },
  {
    name: 'Напитки',
  },
  {
    name: 'Десерты',
  },
  {
    name: 'Соусы',
  },
];

export const ingredients = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
      },
      {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
      },
      {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
      },
      {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
      },
      {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
      },
      {
        name: 'Шампиньоны',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
      },
      {
        name: 'Ветчина',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
      },
      {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
      },
      {
        name: 'Острая чоризо',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
      },
      {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
      },
      {
        name: 'Свежие томаты',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
      },
      {
        name: 'Красный лук',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
      },
      {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
      },
      {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
      },
      {
        name: 'Сладкий перец',
        price: 59,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
      },
      {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
      },
      {
        name: 'Митболы',
        price: 79,
        imageUrl:
          'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
      },
].map((obj, index) => ({ id: index + 1, ...obj }));


export const products = [

  // Закуски
  {
    name: 'Дэнвич с говядиной',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF023C30BF9E6BA72D6ABB6375A56D.avif',
    categoryId: 2,
    description: 'Хрустящая чиабатта с ароматной пряной говядиной и цыпленком с соусами бургер и барбекю, свежими томатами и моцареллой',
  },
  {
    name: 'Дэнвич ветчина и сыр',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp',
    categoryId: 2,
    description: 'Поджаристая чиабатта и знакомое сочетание ветчины, цыпленка, моцареллы со свежими томатами, соусом ранч и чесноком',
  },
  {
    name: 'Дэнвич чоризо барбекю',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FF041FE1F94C903576DCFD01E.avif',
    categoryId: 2,
    description: 'Насыщенный вкус острых колбасок чоризо и пикантной пепперони с соусами бургер и барбекю, свежими томатами, маринованными огурчиками, моцареллой и луком в румяной чиабатте',
  },
  {
    name: 'Паста с креветками',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFAF3EBF5FBE38A44307BB6788AA0.avif',
    categoryId: 2,
    description: 'Паста из печи с креветками, томатами, моцареллой, соусом альфредо и чесноком',
  },
  {
    name: 'Паста Карбонара',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797018746EF899D162D16FA99625.avif',
    categoryId: 2,
    description: 'Паста из печи с беконом, сырами чеддер и пармезан, томатами, моцареллой, фирменным соусом альфредо и чесноком',
  },
  {
    name: 'Паста Мясная',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797018D60B9B8D278F668BD4D3C7.avif',
    categoryId: 2,
    description: 'Паста из печи с митболами, соусом бургер, моцареллой, фирменным томатным соусом и чесноком',
  },
  {
    name: 'Паста Песто',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797019062658A437457F8E1D5887.avif',
    categoryId: 2,
    description: 'Паста из печи с соусом песто, цыпленком, томатами, моцареллой и фирменным томатным соусом',
  },
  {
    name: 'Супермясной Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797022F9AD72AC34E1B01DC6AEBA.avif',
    categoryId: 2,
    description: 'Горячая закуска с цыпленком, моцареллой, митболами, острыми колбасками чоризо и соусом бургер в тонкой пшеничной лепешке',
  },
  {
    name: 'Додстер с ветчиной',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
    categoryId: 2,
    description: 'Горячий завтрак с ветчиной, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
  },
  {
    name: 'Додстер',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp',
    categoryId: 2,
    description: 'Легендарная горячая закуска с цыпленком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
  },
  {
    name: 'Острый Додстер 🌶️🌶️',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp',
    categoryId: 2,
    description: 'Горячая закуска с цыпленком, перчиком халапеньо, маринованными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
  },
  {
    name: 'Грибной Стартер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EFA1F49B7FEC658A18B8E8C3B8C6C5.avif',
    categoryId: 2,
    description: 'Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке',
  },
  {
    name: 'Сырный Стартер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EFA1F4AB2244098A783EAAB4691E53.avif',
    categoryId: 2,
    description: 'Горячая закуска с очень сырной начинкой. Моцарелла, пармезан, чеддер и соус ранч в тонкой пшеничной лепешке',
  },
  {
    name: 'Куриные наггетсы',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp',
    categoryId: 2,
    description: 'Нежное куриное мясо в хрустящей панировке',
  },
  {
    name: 'Картофель из печи с соусом',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp',
    categoryId: 2,
    description: 'Запеченная в печи картошечка с пряными специями. В комплекте сырный соус',
  },
  {
    name: 'Картофель из печи',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EED646B7AC9C38BA256320DD31C4D5.avif',
    categoryId: 2,
    description: 'Запеченная в печи картошечка — привычный вкус и мало масла. В составе пряные специи',
  },
  {
    name: 'Куриные кусочки',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B9521D369D61228456C8F6C9.avif',
    categoryId: 2,
    description: 'Сочные кусочки цельного куриного филе с золотистой корочкой',
  },
  {
    name: 'Куриные крылья барбекю',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8936F8E4BBBBB02EE89E2A39A9E6.avif',
    categoryId: 2,
    description: 'Куриные крылышки со специями и ароматом копчения',
  },
  {
    name: 'Ланчбокс с куриными крыльями',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FC8BE09CA8AB2DC9E77BDE64A.avif',
    categoryId: 2,
    description: 'Горячий сытный обед из куриных крылышек со специями и ароматом копчения, пряного картофеля из печи и соуса барбекю',
  },
  {
    name: 'Ланчбокс с куриными кусочками',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FC8E6C0298C0A9B098DA8AE5D.avif',
    categoryId: 2,
    description: 'Горячий сытный обед из нежных куриных кусочков, пряного картофеля из печи и сырного соуса',
  },
  {
    name: 'Салат Цезарь',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8D3BC9E84FB7B5CFB7F47C6FB334.avif',
    categoryId: 2,
    description: 'Цыпленок, свежие листья салата айсберг, томаты черри, сыры чеддер и пармезан, соус цезарь, пшеничные гренки, итальянские травы',
  },
  {
    name: 'Греческий салат с соусом бальзамик',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8D3BA81A876693A0C3A50226B1F3.avif',
    categoryId: 2,
    description: 'Хрустящий салат айсберг, сочные томаты черри, маслины, свежий огурец, кубики брынзы и бальзамик. Дрессинг для заправки в наборе',
  },

  // Завтрак
  {
    name: 'Омлет с беконом',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif',
    categoryId: 3,
    description: 'Классическое сочетание горячего омлета с поджаристой корочкой и бекона с добавлением моцареллы и томатов на завтрак',
  },
  {
    name: 'Омлет с ветчиной и грибами',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp',
    categoryId: 3,
    description: 'Горячий сытный омлет с поджаристой корочкой, ветчина, шампиньоны и моцарелла',
  },
  {
    name: 'Омлет с пепперони',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp',
    categoryId: 3,
    description: 'Сытный и сбалансированный завтрак — омлет с поджаристой корочкой, пикантная пепперони, томаты и моцарелла',
  },
  {
    name: 'Омлет сырный',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797033873EB1B4B77F7E70BBA37E.avif',
    categoryId: 3,
    description: 'Горячий завтрак из омлета с поджаристой корочкой, моцарелла, кубики брынзы, сыры чеддер и пармезан',
  },
  {
    name: 'Сырники со сгущенным молоком',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF90613992FBC69C3DD4772681C783.avif',
    categoryId: 3,
    description: 'Нежные сырники, приготовленные в печи, с порционным сгущенным молоком',
  },
  {
    name: 'Сырники с малиновым вареньем',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF9060F35D7C26BF41590B9079FEBE.avif',
    categoryId: 3,
    description: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
  },
  {
    name: 'Сырники',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF9060DD723610942E8F368B03540A.avif',
    categoryId: 3,
    description: 'Любимый десерт многих наших гостей — румяные сырники из печи. Такие нежные, в меру сладкие и напоминающие детство',
  },
  
  // Коктейли
  {
    name: 'Молочный коктейль Ежевика-малина',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEB92C801211CBAF91BB30F77568C5.avif',
    categoryId: 4,
    description: 'Сливочная прохлада классического молочного коктейля с добавлением лесных ягод',
  },
  {
    name: 'Молочный коктейль Пина Колада',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEA69C98929AD79D1ADB5EF4CF22BB.avif',
    categoryId: 4,
    description: 'Тропическое сочетание кокоса и ананаса в нежном милкшейке',
  },
  {
    name: 'Молочный коктейль с печеньем Орео',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF5BC24DC566B0918B1EDE2949A71A.avif',
    categoryId: 4,
    description: 'Как вкуснее есть печенье? Его лучше пить! Попробуйте молочный коктейль с мороженым и дробленым печеньем «Орео»',
  },
  {
    name: 'Классический молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF5BC13531CC94BB01BEF8FA0CC92F.avif',
    categoryId: 4,
    description: 'В мире так много коктейлей, но классика — вечна. Попробуйте наш молочный напиток с мороженым',
  },
  {
    name: 'Клубничный молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF5BC1B51D1329B6378418B134C873.avif',
    categoryId: 4,
    description: 'Не важно, какое время года на улице, этот коктейль с клубничным концентратом вернет вас в лето с одного глотка',
  },
  {
    name: 'Шоколадный молочный коктейль',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF5BC2B2516586896007FCD6A14C23.avif',
    categoryId: 4,
    description: 'Очаровательная шоколадная нежность. Попробуйте молочный коктейль с какао и мороженым',
  },

  // Кофе
  {
    name: 'Капучино Яблочный пирог',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF1D95B2B8F766B6241C06601CB898.avif',
    categoryId: 5,
    description: 'Классический капучино с молочной пенкой и ярким сиропом — напоминает по вкусу домашнюю шарлотку',
  },
  {
    name: 'Кофе Кокосовый латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp',
    categoryId: 5,
    description: 'Горячий напиток на основе эспрессо с увеличенной порцией молока и кокосовым сиропом',
  },
  {
    name: 'Кофе Ореховый латте',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B12220AB911FF4FA42EF585D.avif',
    categoryId: 5,
    description: 'Много молока и фундука. Уютный латте на основе эспрессо и орехового сиропа',
  },
  {
    name: 'Айс Капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEFB6985E52B9FA2C985EBC42C7E64.avif',
    categoryId: 5,
    description: 'Освежающий напиток для любителей кофе. В составе эспрессо, пломбир, молоко и бодрость на весь день',
  },
  {
    name: 'Кофе Капучино',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AE1813B4AB42D8927D061035.avif',
    categoryId: 5,
    description: 'Король среди кофейных напитков — классический капучино. Для любителей сбалансированного кофейно-молочного вкуса',
  },
  {
    name: 'Кофе Латте',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp',
    categoryId: 5,
    description: 'Когда хочется нежную молочную пенку, на помощь приходит классический латте',
  },
  {
    name: 'Кофе Американо',
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp',
    categoryId: 5,
    description: 'Пара глотков горячего Американо, и вы будете готовы покорять этот день',
  },

  // Напитки
  {
    name: 'Какао',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE79702DC5EA0EBF92E2483DB89B11.avif',
    categoryId: 6,
    description: 'Отправляемся в сладкое плавание в хорошей компании — горячее какао с молоком',
  },
  {
    name: 'Лимонад Арбузный лайм',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE8F6B54E7D91994D7806BC60E29C9.avif',
    categoryId: 6,
    description: 'Cладость арбуза с освежающим лаймом и листьями мяты по фирменному рецепту',
  },
  {
    name: 'Добрый Кола Малина',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EECF75D8792640A28A2BEF37367897.avif',
    categoryId: 6,
  },
  {
    name: 'Добрый Кола',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61823BE0D3A35B4ABF658FD06B.avif',
    categoryId: 6,
  },
  {
    name: 'Добрый Кола без сахара',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D618298DE6D80D47869D156CC28.avif',
    categoryId: 6,
  },
  {
    name: 'Добрый Апельсин',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AAE50A4CB880D842915C82DC.avif',
    categoryId: 6,
  },
  {
    name: 'Добрый Лимон-Лайм',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61BAB86255A811FEEA677AD674.avif',
    categoryId: 6,
  },
  {
    name: 'Добрый Кола Ваниль',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE87A71B8F4645AB2A039D2840CE43.avif',
    categoryId: 6,
  },
  {
    name: 'Rich Tea Черный с лимоном',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AD5C2FCFBBBB6AA525E38A04.avif',
    categoryId: 6,
  },
  {
    name: 'Rich Tea Зеленый',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AB1F976991362A5A42A2613E.avif',
    categoryId: 6,
  },
  {
    name: 'Rich Tea Зеленый с манго',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61AB5E21EFBAD01AF3F44296C3.avif',
    categoryId: 6,
  },
  {
    name: 'Апельсиновый сок Rich',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B223E75EB71498BCAA0D4A0D.avif',
    categoryId: 6,
  },
  {
    name: 'Яблочный сок Rich',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B27F1652B9A918BDDD753D8D.avif',
    categoryId: 6,
  },
  {
    name: 'Вишневый нектар Rich',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B2E1A3F78B935F10D27FE406.avif',
    categoryId: 6,
  },
  {
    name: 'Вода BonaAqua негазированная',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEE20B3F64A6B8A0418FF967C69F72.avif',
    categoryId: 6,
  },
  {
    name: 'Морс Клюква',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EECF75072BD81390B9C29DD01666C3.avif',
    categoryId: 6,
    description: 'Эта ягода хитра! Наш фирменный морс для любителей сладкой кислинки. Дизайн товара может отличаться',
  },
  {
    name: 'Морс Черная смородина',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EECF750FD6B61AAC7BF1E2A8935DE2.avif',
    categoryId: 6,
    description: 'Для усиления ощущений от морса рекомендуем закрыть глаза и представить себя у бабушки в саду. Дизайн товара может отличаться',
  },
  {
    name: 'Морс Вишня',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EECF74FAE2444096FB156C2A13D05F.avif',
    categoryId: 6,
    description: 'Напиток со вкусом ностальгии — летние каникулы, теплые ночи и уютные дачные посиделки. А еще никаких косточек. Дизайн товара может отличаться',
  },
  {
    name: 'Таежный чай, 10 пакетиков',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797026C5FA9A8298F6EBED364569.avif',
    categoryId: 6,
    description: 'На случай приятных разговоров и чтобы побыть наедине с собой. Одного саше хватит не только на чашку, но и на целый чайник',
  },

  // Десерты
  {
    name: 'Слоеные палочки с ананасами и брусникой',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FFF9F5E6EB14E281FC5F491EC.avif',
    categoryId: 7,
    description: 'Здесь все сразу — брусника и ананас со сгущенкой на слоеном тесте',
  },
  {
    name: 'Чизкейк Нью-Йорк с кокосом',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8C979237269EAB65CCC8FDBD9755.avif',
    categoryId: 7,
    description: 'Это не классический творожный чизкейк, а похож! Это его нежный брат близнец с новым кокосовым вкусом',
  },
  {
    name: 'Чизкейк Нью-Йорк',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEE20B6B6EC471AB74AB8F8885775B.avif',
    categoryId: 7,
    description: 'Мы перепробовали тысячу десертов и наконец нашли любимца гостей — нежнейший творожный чизкейк',
  },
  {
    name: 'Макарон манго-маракуйя',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8C97600099AABE2EAB81A37C62D1.avif',
    categoryId: 7,
    description: 'Bon appétit! Знаменитый французский десерт со вкусом тропических фруктов',
  },
  {
    name: 'Чизкейк Банановый с шоколадным печеньем',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797014D8F94683D580455892ABA1.avif',
    categoryId: 7,
    description: 'Солнечный снаружи и яркий по вкусу внутри. Летняя новинка — нежный чизкейк с бананом и шоколадным печеньем',
  },
  {
    name: 'Эклеры-мини с заварным кремом',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8C972951D9A193B3F3901197B8DA.avif',
    categoryId: 7,
    description: 'Три эклера — это много или мало? Мы считаем, в самый раз. Десерт с нежной начинкой для кофе и компаний',
  },
  {
    name: 'Шоколадный кукис',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7970210A7A54AFF74B239EA3D66F.avif',
    categoryId: 7,
    description: 'На вид печенье как планета, а на вкус — шоколадная комета с глазурью',
  },
  {
    name: 'Фондан',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B85ADB349AAD5044EC2803AE.avif',
    categoryId: 7,
    description: 'Четверо из пяти гостей говорят «Oh la la!», когда едят этот французский десерт с хрустящей корочкой и топленой шоколадной начинкой',
  },
  {
    name: 'Маффин Соленая карамель',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE79700C2EA0539D556CCF3DA1FEB7.avif',
    categoryId: 7,
    description: 'Раз откусить — навсегда полюбить! Оцените яркое сочетание соленой карамели и арахиса',
  },
  {
    name: 'Маффин Три шоколада',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FB18AFBBEBF188C25EBD2E581.avif',
    categoryId: 7,
    description: 'Ну и кекс этот маффин! Он из натурального какао, а внутри — нежная начинка из кубиков белого и молочного шоколада',
  },
  {
    name: 'Бруслетики',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF4D99F27073FDBAEBF88D28A43F8A.avif',
    categoryId: 7,
    description: 'Это задорные сладкие рулетики, в которых закрутился микс из натуральной брусники и сгущенного молока',
  },
  {
    name: 'Рулетики с корицей',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D61B679E058AEC6DC063470AFB2.avif',
    categoryId: 7,
    description: 'Десерт, одобренный нашими бабушками. Горячие сладкие рулетики с пряной корицей и сахаром',
  },
  {
    name: 'Сорбет Лимонный фреш',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8C97B28E7D1388DC897E0198B75D.avif',
    categoryId: 7,
    description: 'Цитрусовая свежесть в стаканчике. Сладкий вкус с приятной кислинкой',
  },
  {
    name: 'Сорбет Клубничный гранат',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF8C97E3C283E19DF7E2407D837CA6.avif',
    categoryId: 7,
    description: 'Охлаждающий дуэт сочных ягод и спелых фруктов',
  },

  // Соусы
  {
    name: 'Медово-горчичный',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEF6672F76A11586BEB5B904E2BC44.avif',
    categoryId: 8,
    description: 'Фирменный медово-горчичный соус со жгучей сладостью для бортиков пиццы и горячих закусок, 25 г',
  },
  {
    name: 'Кетчуп',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797031797972814244D8CAEC44FE.avif',
    categoryId: 8,
    description: 'Фирменный кетчуп с насыщенным томатным вкусом для бортиков пиццы и горячих закусок, 25 г',
  },
  {
    name: 'Сырный',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796F96456CBC97E7E5001BFA66E8.avif',
    categoryId: 8,
    description: 'Фирменный соус со вкусом расплавленного сыра для бортиков пиццы и горячих закусок, 25 г',
  },
  {
    name: 'Чесночный',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE79700EBD09E7A7603B26879BC7B0.avif',
    categoryId: 8,
    description: 'Фирменный соус с чесночным вкусом для бортиков пиццы и горячих закусок, 25 г',
  },
  {
    name: 'Барбекю',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EEE205E4AFB158AFCB34392A1F6FC1.avif',
    categoryId: 8,
    description: 'Фирменный соус с дымным ароматом для бортиков пиццы и горячих закусок, 25 г',
  },
  {
    name: 'Малиновое варенье',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE796FD1F2D654BBD37B5B9183556D.avif',
    categoryId: 8,
    description: 'Идеально к сырникам, 25 г',
  },
  {
    name: 'Сгущёнка в стиках',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE797037779F45843F87C907FEA8C8.avif',
    categoryId: 8,
    description: 'Идеально к сырникам, 7 г',
  },
];
