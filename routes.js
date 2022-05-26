const express = require ("express");

//consting All Operation To Specific Path

const {
  getData,
  postData
} = require ("./controllers/contoller.js"); // consting User Controller

const router = express.Router();





router.post('/postData', postData);
router.get('/getData', getData);





module.exports = {
  routes: router
}