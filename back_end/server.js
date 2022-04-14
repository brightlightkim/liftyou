const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://k2289:1234@cluster.krjfa.mongodb.net/lift', {
  useNewUrlParser: true
});

const multer = require('multer');
const { apply } = require('body-parser');
const { stringify } = require('querystring');
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  path: String,
  like: Number,
  commentBox: {
    comments: [{type: String}],
    commentLike: Number,
    share: Number
  }
});

const Item = mongoose.model('Item', itemSchema);

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    description: req.body.description,
    path: req.body.path,
    like: req.body.like,
    commentBox: {
      comments: req.body.comments,
      commentLike: req.body.commentLike,
      share: req.body.share
    }
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try{
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try{
    var item = await Item.findOne({ 
      _id: req.params.id
    });
    item.title = req.body.title;
    item.description = req.body.description;
    item.save();
    res.sendStatus(200);
  } catch (error){
    console.log(error);
    res.sendStatus(500);
  }
})

app.listen(4000, () => console.log('Server listening on port 4000!'));