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

const addPatient = (entry:NewPatientEntry):Patient => {
  const newPatientEntry:Patient = {
    id: uuid(),
    ...entry
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getNonSensitivePatiens,
  addPatient
};