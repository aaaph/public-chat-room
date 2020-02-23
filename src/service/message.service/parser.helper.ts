import { BadRequest } from "http-errors";

/**
 * Will return list number for getting 10 messages with pagination
 * @param x input string from url query
 */
const parseListNumber = (x: string): number => {
   // parse input string to integer
   const number = Number.parseInt(x, 10);
   if (Number.isNaN(number)) {
      // check parsed number
      const err = new BadRequest("input number type must be number");
      throw err;
   } else if (number < 1) {
      // number can not be less then 1 (1 list number)
      const err = new BadRequest("input number can not be less then 1");
      throw err;
   } else return number - 1; // sub 1 cause query start select from 0
};
export { parseListNumber };
