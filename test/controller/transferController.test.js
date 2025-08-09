//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');

//Testes
describe('Transfer Controller', () => {
    describe('POST /transfer', () => {
        it('Quando informo remetente e destinatario inexsistente recebo 400', async() => {
            const resposta = await request(app)
                .post('/transfer')
                .send({ 
                    from: "Julio",
                    to: "Priscila",
                    amount: 100
              
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');
        });
    });

    describe('GET /transfer', () => {
        //Its ficam aqui
    });
});    