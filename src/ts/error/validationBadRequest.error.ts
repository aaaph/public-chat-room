import { BadRequest } from "http-errors";
import { ValidationError } from "class-validator";

interface IValidationBadRequest {
   property: string;
   constraints: { [type: string]: string };
}

class BadValidationRequest extends BadRequest {
   message: string;
   validationArray: IValidationBadRequest[];
   constructor(errors: ValidationError[]) {
      super();
      this.validationArray = errors.map(error => {
         const { property, constraints } = error;
         return { property, constraints };
      });
      this.message = JSON.stringify(this.validationArray);
   }
}
export { BadValidationRequest };
