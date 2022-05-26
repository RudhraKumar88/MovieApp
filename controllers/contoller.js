const  firebase = require ('../db.js');
const firestore = firebase.firestore();

//Get Request Function
 

const getData = async (req,res) => {
    try{
        const dataRef = firestore.collection("MovieData");
        const dataObj = await dataRef.get();
        const dataArray = [];
        //condition
        if(!dataObj.empty){
            dataObj.forEach(doc => {
                const movieData = (
                   { Id:doc.id,
                    MovieName:doc.data().MovieName,
                    Rating:doc.data().Rating}
                );
                dataArray.push(movieData);
            });
            res.send(dataArray);
        }else{
            res.status(404).send("No Movie Data record Found");
        }
    } catch(error) {
        res.status(400).send(error.message);
    }
}


//Post functoion
const postData = async (req,res) => {
    try{
        const reqData = req.body;
        await firestore.collection("MovieData").doc().set(reqData);
        return res.send("Record saved Successfully");
    } catch (error){
        res.status(400).send(err.message);
    }
}

module.exports = {
    getData,
    postData
}
