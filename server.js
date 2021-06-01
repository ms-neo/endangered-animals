require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path =require('path')
const cors =require('cors')
const mongodbPassword = process.env.MONGODB_PASSWORD;
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const connectDB = async () => {
    try {
       await mongoose.connect(`mongodb://neo:${mongodbPassword}@endangeredanimals-shard-00-00.eznhk.mongodb.net:27017,endangeredanimals-shard-00-01.eznhk.mongodb.net:27017,endangeredanimals-shard-00-02.eznhk.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-pvwqse-shard-0&authSource=admin&retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true ,
                useFindAndModify:false
            }, () => 
            console.log('connected to mongodeb...'))
    } catch (err) {
        console.log(err)
    }
}

connectDB()

//set routes
app.use('/api/animals',require('./routes/api/animals')) 

if (process.env.NODE_ENV === 'production'){
// set static folder
app.use(express.static("client/build"));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
});
}

app.listen(PORT, () => {
    console.log(`the server is working now on port ${PORT}`)
})