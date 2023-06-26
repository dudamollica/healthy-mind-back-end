import supertest from 'supertest';
import server from '../../src/app';
import prisma from '../../src/config/database';

const api = supertest(server)

// beforeEach(async()=>{
// await prisma.users.deleteMany() 
// await prisma.daily_records.deleteMany() 
// })

describe(`POST /auth/sign-in`, () => {
    describe('when credentials are valid', () => {
        it('should respond with status 200', async () => {
            //   const body = generateValidBody();
            //   await createUser(body);

            //   const response = await server.post('/auth/sign-in').send(body);

            //   expect(response.status).toBe(httpStatus.OK);
        });
    })
})