import express from 'express';
import patientService from '../services/patientService';
import toNewPatientEntry from '../utils/toNewPatientEntry';
const router = express.Router();

router.get('/', ( _req, res ) => {
  res.send(patientService.getNonSensitivePatiens());
});

router.post('/', (req, res) => {
  try {
  const newPatientEntry = toNewPatientEntry(req.body);
  const addedPatient = patientService.addPatient(newPatientEntry);
  res.json(addedPatient);
} catch (error) {
  let errorMessage = 'Something went wrong.';
  if(error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  res.status(400).send(errorMessage);
}
});

export default router;