import express, { request } from "express";
import bodyParser from "body-parser";
import { connect, getDB } from "./db.js";
import { ObjectId } from "mongodb";

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/products', (req, res) => {

    getDB()
    .collection('products')
    .find({})
    .sort("price")
    .toArray((err, result) => {
        if (err) {
            res.status(500).json({ err: err });
            return;
        }
        res.status(200).json(result);
    });
});

app.post('/product', (req, res) => {
    const {name, price} = req.body;

    getDB()
    .collection('products')
    .insertOne({'name': name, 'price': price}, (err) => {
        if (err) {
            res.status(500).json({ err: err });
            return;   
        }
        res.status(200).send();
    });
});


app.delete('/product/:id', (req, res) => {
    
    getDB()
    .collection('products')
    .deleteOne({ _id: new ObjectId(req.params.id) }, (err) => {
        if (err) {
            res.status(500).json({ err: err });
            return;   
        }
        res.status(200).send();
    });
});

app.listen(port, () => {
    console.log('Server started!');
});