import { PrismaClient } from '@prisma/client';
var prisma = new PrismaClient();
// export function connectDb(): void {
//   prisma = new PrismaClient();
// }
export default prisma;
// export async function disconnectDB(): Promise<void> {
//   await prisma.$disconnect();
// }
