import { ProfessionalRepository } from "./professional.repository.js";
import { Professional } from "./professionals.entity.js";
const repository = new ProfessionalRepository();
function sanitizeProfessionalInput(req, res, next) {
    req.body.sanitizedInput = {
        dni: req.body.dni,
        lastname: req.body.lastname,
        name: req.body.name,
        adress: req.body.adress,
        phone_number: req.body.phone_number,
        mail: req.body.mail,
        birth_date: req.body.birth_date,
        id: req.body.id
    };
    //more checks here
    Object.keys(req.body.sanitizedInput).forEach(key => {
        if (req.body.sanitizedInput[key] === undefined)
            delete req.body.sanitizedInput[key];
    });
    next();
}
async function findAll(req, res) {
    res.json({ data: await repository.findAll() });
}
async function findOne(req, res) {
    const id = req.params.id;
    const professional = await repository.findONe({ id });
    if (!professional) {
        return res.status(404).send({ message: 'Professional not found' });
    }
    res.json({ data: professional });
}
async function add(req, res) {
    const input = req.body.sanitizedInput;
    const professionalInput = new Professional(input.dni, input.lastname, input.name, input.adress, input.phone_number, input.mail, input.birth_date, input.id);
    const professionals = await repository.add(professionalInput);
    return res.status(201).json({ message: 'Professional created', data: professionals });
}
async function update(req, res) {
    req.body.sanitizedInput.id = req.params.id;
    const professional = await repository.update(req.params.id, req.body.sanitizedInput);
    if (!professional) {
        return res.status(404).send({ message: 'Professional not found' });
    }
    return res.status(200).send({ message: 'Professional updated successfully', data: professional });
}
async function remove(req, res) {
    const id = req.params.id;
    const professional = await repository.delete({ id });
    if (!professional) {
        res.status(404).send({ message: 'Professional not found' });
    }
    else {
        res.status(200).send({ message: 'Professional deleted succesfully' });
    }
}
export { sanitizeProfessionalInput, findAll, findOne, add, update, remove };
//# sourceMappingURL=professional.controler.js.map