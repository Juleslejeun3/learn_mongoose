let mongoose = require('mongoose')
require('dotenv').config()

class Database {
    constructor() {
      this._connect()
    }
  _connect() {
    mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser : true, useUnifiedTopology :true })
         .then(() => {
          //Schema
         const personSchema = new mongoose.Schema({
          name: string,
          age: number,
          favoriteFoofds: [string]
        })
        const personModel = mongoose.model('person',personSchema);
        //creating model
         let createModel = personModel.create({ name: "Luis",
          age: 29,
          favoriteFoofds: ["thiep","lakh"] }, { name: "Mor",
            age: 20,
            favoriteFoofds: ["yassa","domoda"] });
          //console.log(createModel)
          createModel.find();
          createModel.findOne({favoriteFoofds: ["lakh"]});
          
          })
         .catch(err => {
           console.error('Database connection error')
         })
    }
  }

  module.exports = new Database()