const express = require('express');
const app = express();
const mehsullar = [
    {id:1, mehsulunAdi:"notebook",mehsulunQiymeti:"1700",mehsulunMiqdari:"1" },
    {id:2,mehsulunAdi:"mouse",mehsulunQiymeti:"500",mehsulunMiqdari:"7" },
    {id:3,mehsulunAdi:"telefon",mehsulunQiymeti:"9000",mehsulunMiqdari:"9"  },
    {id:4,mehsulunAdi:"qulaqciq",mehsulunQiymeti:"2500",mehsulunMiqdari:"3"  },
    {id:5,mehsulunAdi:"klaviatura",mehsulunQiymeti:"170",mehsulunMiqdari:"1"  },
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/mehsullar', (req,res)=>{
   
    res.send(mehsullar)
})
app.get('/mehsullar/:id', (req,res)=>{
    const mehsulID = req.params.id;
    const selectedMehsul = mehsullar.find(mehsul=>mehsul.id == mehsulID)
    if(selectedMehsul){

        res.send(selectedMehsul)
    }else{
        res.status(404).send('mehsul yoxdur')
    }
})

app.listen(4000, ()=>{
    console.log("server quruldu");
})