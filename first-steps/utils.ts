/* eslint-disable @typescript-eslint/no-explicit-any */
export const isNotNumber = (argument: string):boolean => isNaN(Number(argument));
export const isArray = (argument: any):boolean => Array.isArray(argument);
export const someIsNotNumber = (argument: any[]) : boolean => argument.some((el: any )=> isNaN(Number(el)));
