import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getData = async (req, res) => {

    if (req.method === 'GET') {
        const userData = await prisma.todos.findMany();
        res.json(userData);
    }

}

export default getData;