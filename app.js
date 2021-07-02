import express from 'express';
import redis from 'redis';
import axios from 'axios';
import { promisify } from 'util';
import responseTime from 'response-time';


const app = express();


const client = redis.createClient(
    {
        host: '127.0.0.1',
        port: 6379,
    }
)

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);


app.get('/api/payload',async(req,res,next)=>{
    try{
        const cachedData = await GET_ASYNC('payload');
        if(cachedData){
            console.log('using cached data');
            res.send(JSON.parse(cachedData));
            return
        }
        const response = await axios.get('https://api.spacexdata.com/v3/payloads');
        const saveResult = await SET_ASYNC('payload',JSON.stringify(response.data),'EX',10);
        console.log('New data cached');
        res.send(response.data);
    }catch(error){
        res.send(error);
    }
})



app.get('/api/payload/:payloadid',async(req,res,next)=>{
    try{
        const {payloadid} = req.params;
        const cachedData = await GET_ASYNC(`payload-${payloadid}`);
        if(cachedData){
            console.log('using cached data');
            console.log(responseTime);
            res.send(JSON.parse(cachedData));
            return
        }
        const response = await axios.get(`https://api.spacexdata.com/v3/payloads/${payloadid}`);
        const saveResult = await SET_ASYNC(`payload-${payloadid}`,JSON.stringify(response.data),'EX',10);

        console.log('New data cached');
        res.send(response.data);
    }catch(error){
        res.send(error);
    }
})



app.listen(process.env.port||5000, () => {
    console.log("server started");
  });