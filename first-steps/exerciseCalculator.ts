import { isNotNumber } from "./utils";
interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface DaysAndTarget {
  dailyHours: number[],
  target: number
}


export const parseArgument = (args: string[]): DaysAndTarget => {
  if(args.length < 4) throw new Error('Not enough arguments');
  const someIsNotNumber = args.slice(2).some(el => isNotNumber(el));

  if (!someIsNotNumber) {
    return {
      dailyHours: args.slice(3).map(d=> Number(d)),
      target: Number(args[2])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};



export const calculateExercises = (dailyHours: number[],target: number): Result => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter(d => d > 0).length;
  const average = dailyHours.reduce((prev,curr)=> prev + curr, 0) / dailyHours.length;
  const success =  average >= target;


  let rating: number;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = "Excellent job, you met your target!";
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = "Not too bad, but could be better.";
  } else {
    rating = 1;
    ratingDescription = "You need to work harder to meet your target.";
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

try {
  const { dailyHours, target} = parseArgument(process.argv);
  console.log(calculateExercises(dailyHours,target));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
