const express = require('express')
const app = express()
const cors = require('cors')
const path =require('path')
const bcrypt = require("bcryptjs");
require("dotenv").config(); 
const {MongoClient} = require('mongodb')
const { MongoURI } = process.env;
const client = new MongoClient(MongoURI,{ useNewUrlParser:true, useUnifiedTopology: true})


const {PORT} = process.env
app.use(express.json())
app.use(cors())
app.use(express.static(path.resolve(`${__dirname}/../build`))) 

app.get('/test',(req,res)=>{
    res.send('test')
})


app.post('/qrcode',(req,res)=>{
    const qr = require('qrcode')
    let data = {
    "URL": 'https://ac-quick-quotes.herokuapp.com/',
    "id": 100
    }
     strData = JSON.stringify(data)
    qr.toString('url here',function(err,code){
    (err ? console.log('error'):console.log(code))
    })
// qr.toDataURL(strData,function(err,code){
//     (err ? console.log('error'):console.log(code))
//    })

})

app.post('/registerVendor', async(req,res)=>{
    let { newVendor} = req.body;
    console.log(req.body.newVendor)
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newVendor.password, salt);
    newVendor.password = hash
    try {
        await client.connect()
        const prevVendor = await client.db('quick-quotes').collection('vendors').findOne( {email:newVendor.email} )
        console.log(prevVendor)
        if(prevVendor!==null){
          return res.status(409).send('email already registered')
        }else{
        await client.db('quick-quotes').collection('vendors').insertOne(newVendor)
        const registeredVendor = await client.db('quick-quotes').collection('members').findOne( {email:newVendor.email} )
        
        return res.send(newVendor.email)
        }
      } catch (e){
          console.error(e)
      } finally {
          await client.close()
      }
})

app.post('/registerMember', async(req,res)=>{
  let { newMember} = req.body;
  console.log(req.body.newMember)
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(newMember.password, salt);
  newMember.password = hash
  try {
      await client.connect()
      const prevMember = await client.db('quick-quotes').collection('members').findOne( {email:newMember.email} )
      console.log(prevMember)
      if(prevMember!==null){
        return res.status(409).send('email already registered')
      }else{
     await client.db('quick-quotes').collection('members').insertOne(newMember)
      const registeredMember = await client.db('quick-quotes').collection('members').findOne( {email:newMember.email} )
    
      return res.send(newMember.email)
      }
    } catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
})

app.post('/login', async(req,res)=>{
    let { email, password } = req.body;
 
    try {
      await client.connect()

    //   const user = await client.db('quick-quotes').collection('users').findOne() 
      const user = await client.db('quick-quotes').collection('members').findOne( {email:email} )
    //   const user = await cursor.toArray()
    //   user = user[0]
        if(!user){
          return res.status(401).send('User not found')
        }
        let isAuth = bcrypt.compareSync(password, user.password);
        if (!isAuth) {
          return res.status(401).send("incorrect password");
        }
        return res.status(200).send({email:user.email,id:user._id});
      }
      catch (e){
        console.error(e)
    } finally {
        await client.close()
    }
})


app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`))