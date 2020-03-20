import faker from 'faker';

const baseUrl = ''; // Poner la URL correspondiente

const fetchParams = (method, data = '') => {
    const body = data ? { body: JSON.stringify(data) } : {};

    return {
        method: method,
        headers: apiHeaders,
        credentials: 'same-origin',
        ...body,
    }
};

const apiHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: ''
};

// Create API methods
const api = {

    addPerson: async data => {
        const addResponse = await fetch(baseUrl + '/person', fetchParams('POST', data));
        const addInfo = await addResponse.json();
        return addInfo;
    },

    getUser: async () => {
        const userResponse = await fetch(baseUrl + '/user', fetchParams('GET'));
        const userInfo = await userResponse.json();
        return userInfo;
    },

    getUserFake: () => {
        return {
            username: 'admin',
            password: '123',
        }
    },

    getPerson: async data => {
        const personResponse = await fetch(baseUrl + '/person', fetchParams('GET', data));
        const personInfo = await personResponse.json();
        return personInfo;
    },

    getPersonFake: () => {
        const dni = faker.random.number(10000000);
        const person = {
            id: faker.random.uuid(),
            name: `${faker.name.firstName()}, ${faker.name.lastName()}`,
            birthday: '04-04-1992',
            gender: 'Masculino',
            doc_number: dni,
            doc_type: 'DNI',
            cuil: `20-${dni}-2`,
            mail: faker.internet.email().toLocaleLowerCase(),
        };
        return person;
    },
    
    login: async user => {
        const loginResponse = await fetch(baseUrl + '/login', fetchParams('POST', user));
        const loginInfo = await loginResponse.json();
        return loginInfo;
    },

    logout: async user => {
        const logoutResponse = await fetch(baseUrl + '/logout', fetchParams('POST', user));
        const logoutInfo = await logoutResponse.json();
        return logoutInfo;
    },

    register: async data => {
        const registerResponse = await fetch(baseUrl + '/register', fetchParams('POST', data));
        const registerInfo = await registerResponse.json();
        return registerInfo; 
    },

};

export default api;
