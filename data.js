const region_data = []


const states_data = [
    {
      "name": "Abia",
      "capital": "Umuahia",
      "region": "South East",
      "population": 3178950,
      "description": "Abia is a state in southeastern Nigeria, known for its commercial and agricultural activities.",
      "no_of_lgas": 17,
      "local_gov_areas": ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma Ngwa", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"]
    },
    {
      "name": "Adamawa",
      "capital": "Yola",
      "region": "North East",
      "population": 4503310,
      "description": "Adamawa is a state in northeastern Nigeria, known for its diverse cultural heritage and natural attractions.",
      "no_of_lgas": 21,
      "local_gov_areas": ["Demsa", "Fufure", "Ganye", "Girei", "Gombi", "Guyuk", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo-Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"]
    },
    {
      "name": "Akwa Ibom",
      "capital": "Uyo",
      "region": "South South",
      "population": 5278100,
      "description": "Akwa Ibom is a state in southern Nigeria, known for its oil-rich resources and beautiful coastal scenery.",
      "no_of_lgas": 31,
      "local_gov_areas": ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"]
    },
    {
      "name": "Anambra",
      "capital": "Awka",
      "region": "South East",
      "population": 6113502,
      "description": "Anambra is a state in southeastern Nigeria, known for its rich cultural heritage and commercial activities.",
      "no_of_lgas": 21,
      "local_gov_areas": ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"]
    },
    {
        "name": "Bauchi",
        "capital": "Bauchi",
        "region": "North East",
        "population": 6175105,
        "description": "Bauchi is a state in northeastern Nigeria, known for its historic and cultural significance.",
        "no_of_lgas": 20,
        "local_gov_areas": ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"]
      },
      {
        "name": "Bayelsa",
        "capital": "Yenagoa",
        "region": "South South",
        "population": 2228000,
        "description": "Bayelsa is a state in southern Nigeria, known for its abundant oil reserves and beautiful creeks.",
        "no_of_lgas": 8,
        "local_gov_areas": ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"]
      },
      {
        "name": "Benue",
        "capital": "Makurdi",
        "region": "North Central",
        "population": 4253641,
        "description": "Benue is a state in central Nigeria, known as the 'Food Basket of the Nation' due to its agricultural productivity.",
        "no_of_lgas": 23,
        "local_gov_areas": ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"]
      },
      {
        "name": "Borno",
        "capital": "Maiduguri",
        "region": "North East",
        "population": 6700705,
        "description": "Borno is a state in northeastern Nigeria, known for its rich historical and cultural heritage.",
        "no_of_lgas": 27,
        "local_gov_areas": ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"]
      },
      {
        "name": "Cross River",
        "capital": "Calabar",
        "region": "South South",
        "population": 3967024,
        "description": "Cross River is a state in southern Nigeria, known for its lush rainforests, diverse wildlife, and beautiful beaches.",
        "no_of_lgas": 18,
        "local_gov_areas": ["Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"]
      },
      {
        "name": "Delta",
        "capital": "Asaba",
        "region": "South South",
        "population": 5320570,
        "description": "Delta is a state in southern Nigeria, known for its vast oil and gas reserves, agricultural production, and diverse culture.",
        "no_of_lgas": 25,
        "local_gov_areas": ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"]
      },
      {
        "name": "Ebonyi",
        "capital": "Abakaliki",
        "region": "South East",
        "population": 2940679,
        "description": "Ebonyi is a state in southeastern Nigeria, known for its rich agricultural resources, natural attractions, and cultural heritage.",
        "no_of_lgas": 13,
        "local_gov_areas": ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"]
      },
      {
        "name": "Edo",
        "capital": "Benin City",
        "region": "South South",
        "population": 5482308,
        "description": "Edo is a state in southern Nigeria, known for its rich cultural heritage, historic landmarks, and vibrant arts and festivals.",
        "no_of_lgas": 18,
        "local_gov_areas": ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba-Okha", "Oredo", "Orhionmwon", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"]
      },
      {
        "name": "Ekiti",
        "capital": "Ado-Ekiti",
        "region": "South West",
        "population": 2898954,
        "description": "Ekiti is a state in southwestern Nigeria, known for its peaceful environment, agricultural resources, and educational institutions.",
        "no_of_lgas": 16,
        "local_gov_areas": ["Ado-Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido-Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"]
      },
      {
        "name": "Enugu",
        "capital": "Enugu",
        "region": "South East",
        "population": 3267837,
        "description": "Enugu is a state in southeastern Nigeria, known for its coal mining history, scenic landscapes, and vibrant cultural festivals.",
        "no_of_lgas": 17,
        "local_gov_areas": ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo-Uwani"]
      },
      {
        "name": "Gombe",
        "capital": "Gombe",
        "region": "North East",
        "population": 2760967,
        "description": "Gombe is a state in northeastern Nigeria, known for its diverse ethnic groups, agricultural activities, and natural attractions.",
        "no_of_lgas": 11,
        "local_gov_areas": ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"]
      },
      {
        "name": "Imo",
        "capital": "Owerri",
        "region": "South East",
        "population": 5202140,
        "description": "Imo is a state in southeastern Nigeria, known for its rich cultural heritage, beautiful landscapes, and thriving commerce.",
        "no_of_lgas": 27,
        "local_gov_areas": ["Aboh-Mbaise", "Ahiazu-Mbaise", "Ehime-Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Unuimo"]
      },
      {
        "name": "Jigawa",
        "capital": "Dutse",
        "region": "North West",
        "population": 6184272,
        "description": "Jigawa is a state in northwestern Nigeria, known for its agricultural activities, cultural festivals, and historic sites.",
        "no_of_lgas": 27,
        "local_gov_areas": ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"]
      },
      {
        "name": "Kaduna",
        "capital": "Kaduna",
        "region": "North West",
        "population": 8240988,
        "description": "Kaduna is a state in northwestern Nigeria, known for its historical landmarks, diverse population, and vibrant economic activities.",
        "no_of_lgas": 23,
        "local_gov_areas": ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"]
      },
      {
        "name": "Kano",
        "capital": "Kano",
        "region": "North West",
        "population": 15075353,
        "description": "Kano is a state in northern Nigeria, known for its ancient city, rich cultural heritage, and bustling commercial activities.",
        "no_of_lgas": 44,
        "local_gov_areas": ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"]
      },
      {
        "name": "Katsina",
        "capital": "Katsina",
        "region": "North West",
        "population": 7987488,
        "description": "Katsina is a state in northern Nigeria, known for its historical significance, rich cultural heritage, and vibrant trade activities.",
        "no_of_lgas": 34,
        "local_gov_areas": ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin-Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"]
      },
      {
        "name": "Kebbi",
        "capital": "Birnin Kebbi",
        "region": "North West",
        "population": 4435254,
        "description": "Kebbi is a state in northwestern Nigeria, known for its agricultural resources, historic landmarks, and traditional festivals.",
        "no_of_lgas": 21,
        "local_gov_areas": ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"]
      },
      {
        "name": "Kogi",
        "capital": "Lokoja",
        "region": "North Central",
        "population": 3314043,
        "description": "Kogi is a state in central Nigeria, known for its diverse geography, natural resources, and cultural heritage.",
        "no_of_lgas": 21,
        "local_gov_areas": ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela-Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa-Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"]
      },
      {
        "name": "Kwara",
        "capital": "Ilorin",
        "region": "North Central",
        "population": 3145969,
        "description": "Kwara is a state in north-central Nigeria, known for its agricultural activities, historical sites, and educational institutions.",
        "no_of_lgas": 16,
        "local_gov_areas": ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"]
      },
      {
        "name": "Lagos",
        "capital": "Ikeja",
        "region": "South West",
        "population": 13992000,
        "description": "Lagos is a state in southwestern Nigeria, known for its bustling city life, economic opportunities, and vibrant cultural scene.",
        "no_of_lgas": 20,
        "local_gov_areas": ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti-Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"]
      },
      {
        "name": "Nasarawa",
        "capital": "Lafia",
        "region": "North Central",
        "population": 2462945,
        "description": "Nasarawa is a state in central Nigeria, known for its agricultural potential, mineral resources, and tourist attractions.",
        "no_of_lgas": 13,
        "local_gov_areas": ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"]
      },
      {
        "name": "Niger",
        "capital": "Minna",
        "region": "North Central",
        "population": 3954772,
        "description": "Niger is a state in central Nigeria, known for its diverse landscapes, agricultural activities, and historical sites.",
        "no_of_lgas": 25,
        "local_gov_areas": ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Munya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"]
      },
      {
        "name": "Ogun",
        "capital": "Abeokuta",
        "region": "South West",
        "population": 3751140,
        "description": "Ogun is a state in southwestern Nigeria, known for its industrial activities, historical sites, and cultural heritage.",
        "no_of_lgas": 20,
        "local_gov_areas": ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu", "Yewa North", "Yewa South"]
      },
      {
        "name": "Ondo",
        "capital": "Akure",
        "region": "South West",
        "population": 3722750,
        "description": "Ondo is a state in southwestern Nigeria, known for its rich cultural heritage, natural resources, and tourist attractions.",
        "no_of_lgas": 18,
        "local_gov_areas": ["Akoko North East", "Akoko North West", "Akoko South Akure East", "Akoko South West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"]
      },
      {
        "name": "Osun",
        "capital": "Osogbo",
        "region": "South West",
        "population": 4155119,
        "description": "Osun is a state in southwestern Nigeria, known for its rich history, cultural festivals, and natural landmarks.",
        "no_of_lgas": 30,
        "local_gov_areas": ["Atakunmosa East", "Atakunmosa West", "Aiyedaade", "Aiyedire", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Ife Central", "Ife East", "Ife North", "Ife South", "Egbedore", "Ejigbo", "Ifedayo", "Ifelodun", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"]
      },
      {
        "name": "Oyo",
        "capital": "Ibadan",
        "region": "South West",
        "population": 5580894,
        "description": "Oyo is a state in southwestern Nigeria, known for its historical sites, educational institutions, and vibrant culture.",
        "no_of_lgas": 33,
        "local_gov_areas": ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North East", "Ibadan North West", "Ibadan South East", "Ibadan South West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"]
      },
      {
        "name": "Plateau",
        "capital": "Jos",
        "region": "North Central",
        "population": 3767120,
        "description": "Plateau is a state in central Nigeria, known for its picturesque landscapes, temperate climate, and cultural diversity.",
        "no_of_lgas": 17,
        "local_gov_areas": ["Barkin Ladi", "Bassa", "Bokkos", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"]
      },
      {
        "name": "Rivers",
        "capital": "Port Harcourt",
        "region": "South South",
        "population": 5947442,
        "description": "Rivers is a state in southern Nigeria, known for its rich oil and gas resources, diverse culture, and scenic beauty.",
        "no_of_lgas": 23,
        "local_gov_areas": ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emohua", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"]
      },
      {
        "name": "Sokoto",
        "capital": "Sokoto",
        "region": "North West",
        "population": 4878335,
        "description": "Sokoto is a state in northwestern Nigeria, known for its historic architecture, cultural festivals, and traditional craftsmanship.",
        "no_of_lgas": 23,
        "local_gov_areas": ["Binji", "Bodinga", "Dange-Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"]
      },
      {
        "name": "Taraba",
        "capital": "Jalingo",
        "region": "North East",
        "population": 3139576,
        "description": "Taraba is a state in northeastern Nigeria, known for its diverse ethnic groups, agricultural activities, and natural attractions.",
        "no_of_lgas": 16,
        "local_gov_areas": ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"]
      },
      {
        "name": "Yobe",
        "capital": "Damaturu",
        "region": "North East",
        "population": 2719048,
        "description": "Yobe is a state in northeastern Nigeria, known for its agricultural activities, historical sites, and traditional culture.",
        "no_of_lgas": 17,
        "local_gov_areas": ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"]
      },
      {
        "name": "Zamfara",
        "capital": "Gusau",
        "region": "North West",
        "population": 4394800,
        "description": "Zamfara is a state in northwestern Nigeria, known for its abundant mineral resources, traditional art, and cultural heritage.",
        "no_of_lgas": 14,
        "local_gov_areas": ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"]
      },
      {
        "name": "FCT",
        "capital": "Abuja",
        "region": "North Central",
        "population": 214773,
        "description": "The Federal Capital Territory (FCT) is the capital territory of Nigeria, housing the country's capital city, Abuja.",
        "no_of_lgas": 6,
        "local_gov_areas": ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council"]
      }
  ]

  

  module.exports = {
    states_data,
    region_data
};
  