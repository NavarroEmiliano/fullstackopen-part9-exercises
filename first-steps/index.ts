import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';
import { isArray,isNotNumber, someIsNotNumber } from './utils';
const app = express();
const PORT = 3002;

app.use(express.json());

app.get('/hello',(_req,res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi',(req, res) => {
  const {height,weight} = req.query;
  const heightToNumber = Number(height);
  const weightToNumber = Number(weight);
  const result = calculateBmi(heightToNumber, weightToNumber);
  res.status(200).json({
    weight:weightToNumber,
    height:heightToNumber,
    bmi:result
  });
});

app.post('/exercises', (req, res ) => {
  const {daily_exercises:dailyHours, target} = req.body;

  if(!dailyHours || !target) {
    return res.status(400).send({error:'parameters missing'});
  }

  if(!isArray(dailyHours) || someIsNotNumber(dailyHours) || isNotNumber(target)) {
    return res.status(400).send({error:'malformatted parameters'});
  }
  
  const response  = calculateExercises(dailyHours,target);
  return res.json(response);
});

app.listen(PORT,()=>{
  console.log(`Server running in port ${PORT}`);
});