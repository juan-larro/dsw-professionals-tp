import { pool } from "../shared/db/conn.mysql.js";
/*const professionals = [
    new Professional(
        '44021044',
        'Larroquette',
        'Juan Bautista',
        'Izarra 1244',
        '3400 5330080',
        'juan@gmail.com',
        '8/8/2002',
        'a02b91bc-3769-4221-beb1-d7a3aeba7dad'
    ),
]*/
export class ProfessionalRepository {
    async findAll() {
        const [professionals] = await pool.query('select * from professionals');
        return professionals;
    }
    async findONe(item) {
        const id = Number.parseInt(item.id);
        const [professionals] = await pool.query('select * from professionals where id = ?', [id]);
        if (professionals.length === 0) {
            return undefined;
        }
        const professional = professionals[0];
        return professional;
    }
    async add(professionalInput) {
        const { id, lastname, ...professionalRow } = professionalInput;
        const [result] = await pool.query('insert into professionals set ?', [professionalRow]);
        professionalInput.id = result.insertId;
        return professionalInput;
    }
    async update(id, professionalInput) {
        const professinalId = Number.parseInt(id);
        const { ...professionalRow } = professionalInput;
        await pool.query('update professionals set ? where id = ?', [professionalRow, professinalId]);
        return professionalInput;
    }
    async delete(item) {
        try {
            const professionalToDelete = await this.findONe(item);
            const professinalId = Number.parseInt(item.id);
            await pool.query('delete from professionals where id = ?', professinalId);
            return professionalToDelete;
        }
        catch (error) {
            throw new Error('Unable to delete professional');
        }
    }
}
//# sourceMappingURL=professional.repository.js.map