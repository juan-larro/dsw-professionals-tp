import { Router } from "express";
import { findAll, sanitizeProfessionalInput, findOne, add, update, remove } from "./professional.controler.js";
export const professionalRouter = Router();
professionalRouter.get('/', findAll);
professionalRouter.get('/:id', findOne);
professionalRouter.post('/', sanitizeProfessionalInput, add);
professionalRouter.put('/:id', sanitizeProfessionalInput, update);
professionalRouter.patch('/:id', sanitizeProfessionalInput, update);
professionalRouter.delete('/:id', remove);
//# sourceMappingURL=professional.routes.js.map