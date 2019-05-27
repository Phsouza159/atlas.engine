var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

let dir = path.resolve(__dirname , './../src/');

let files = {
    projetos : [
        {
            name : 'prj-php' , 
            pathConfig : `${dir}/prjPhp.config.json`
        }
    ]
}


/* GET home page. */
router.get('/getConfig/:name', async function(req, res, next) {
  
    let name =  req.params.name;
    let args = files.projetos.filter(e => e.name == name)
  
    let arg = args[0];

    if(arg != null){
        let data = await readJson(arg.pathConfig);

       return res.end(data);

    }else{
        res.end( {
            error: "Erro interno"
        })
    }
});

var readJson = async function(path) {
    let r = '{erro:\"Não foi possivel ler arquivo \"}';

    r = await fs.readFileSync( path , function(err , data){
        
        if(err){
            console.log('erro na leitura')
        }
        var json = JSON.stringify(data);
        
        console.log(json);
       
       r = json;
    });

    console.log(r)

    return r;
}


module.exports = router;