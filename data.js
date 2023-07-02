const states = [
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
  ]

  module.exports = states;

//   require('dotenv').config();
//   const mongoClient = require('mongodb').MongoClient;
//   const DB_URL = process.env.DB_URL;

//   mongoClient.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: false}, (err, client)=>{
//     if(err){
//         console.log("Error connecting to DB: ", err);
//         return
//     }
//     console.log("Testing log.")
//     const db  = client.db("locale");
//     console.log("Connected to mongoDB");

//     db.collection("states").insertMany(states, (err, result)=>{
//         if(err){
//             console.log("error", err)
//         }
//         else{ console.log("Inserted count: ", result.insertedCount) }
//         // db.collection
//         db.close();
//     })


// }); // everything goes within client connection.

  