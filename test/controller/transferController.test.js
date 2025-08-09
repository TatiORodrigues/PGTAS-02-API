//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicação
const app = require('../../app');

//Mock
const transferService = require('../../service/transferService')

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

    it('Usando Mocks: Quando informo remetente e destinatario inexsistente recebo 400', async() => {
        //Mocar apenas a função transfer do Service
        const transferServiceMock = sinon.stub(transferService, 'transfer')
        transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'));

        const resposta = await request(app)
            .post('/transfer')
            .send({ 
                from: "Julio",
                to: "Priscila",
                amount: 100
            });

        expect(resposta.status).to.equal(400);
        expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

        //Reset o Mock
        sinon.restore();
    });

     it('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 CREATED', async() => {
        //Mocar a função createTransfer do Service
        const transferServiceMock = sinon.stub(transferService, 'createTransfer')
        transferServiceMock.returns({ 
            transfer: {
                from: "Julio", 
                to: "Priscila", 
                amount: 100,
                date: new Date().toISOString()
            }
        });

        const resposta = await request(app)
            .post('/transfer')
            .send({ 
                from: "Julio",
                to: "Priscila",
                amount: 100
            });

        expect(resposta.status).to.equal(201);
        expect(resposta.body).to.have.property('from', 'Julio');
        expect(resposta.body).to.have.property('to', 'Priscila');
        expect(resposta.body).to.have.property('amount', 100);
        expect(resposta.body).to.have.property('date');

        //Reset o Mock
        sinon.restore();
    });

    describe('GET /transfer', () => {
        //Its ficam aqui
    });
});