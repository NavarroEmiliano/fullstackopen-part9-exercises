import patientData from '../data/patients';
import {v1 as uuid} from 'uuid';

import { Patient,NonSensitivePatientData ,NewPatientEntry } from '../types';

const patients: Patient[] = patientData;

const getPatients = ():Patient[] => {
  return patients;
};

const getNonSensitivePatiens = ():NonSensitivePatientData[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation})=> ( {
        id,
        name,
        dateOfBirth,
        gender,
        occupation
      }
  ));
};

const addPatient = (object:NewPatientEntry):Patient => {
  console.log(object);
  const newPatientEntry:Patient = {
    id: uuid(),
    name: object.name,
    dateOfBirth: object.dateOfBirth,
    ssn:object.ssn,
    gender:object.gender,
    occupation:object.occupation
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitivePatiens,
  addPatient
};