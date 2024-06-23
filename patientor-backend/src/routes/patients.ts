import express from 'express';
import patientService from '../services/patientService';
const router = express.Router();

router.get('/', ( _req, res ) => {
  res.send(patientService.getNonSensitivePatiens());
});

router.post('/', (req, res) => {
  const {body} = req;
  const patientAdded = patientService.addPatient(body);
  res.json(patientAdded);
});

export default router;