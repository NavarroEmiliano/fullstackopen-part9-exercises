import diagnoseData from '../data/diagnoses';

import { Diagnose } from '../type';

const getDiagnoses = ():Diagnose[] => {
  return diagnoseData;
};

export default {
  getDiagnoses
};