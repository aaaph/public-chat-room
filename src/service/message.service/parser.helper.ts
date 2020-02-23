import { BadRequest } from "http-errors";

export const parseInteger = (x: string): number => {
   const number = Number.parseInt(x, 10);
   if (Number.isNaN(number)) {
      const err = new BadRequest("input number type must be number");
      throw err;
   } else return number;
};
