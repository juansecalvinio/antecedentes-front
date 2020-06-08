import Axios from 'axios';
import faker from 'faker';

export class PersonServices {
    
    getPersons() {
        return Axios.get('/persons');
    }
    getPersonsFake() {
        const dni = faker.random.number(10000000);
        const person = {
            id: faker.random.uuid(),
            name: `${faker.name.firstName()}, ${faker.name.lastName()}`,
            birthday: '01-01-1992',
            gender: 'Masculino',
            doc_number: dni,
            doc_type: 'DNI',
            cuil: `20-${dni}-2`,
            mail: faker.internet.email().toLocaleLowerCase(),
        };
        return person;
    }
    getPersonByCuit(cuit) {
        return Axios.get(`/persons/${cuit}`);
    }

}