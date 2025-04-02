import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient() // can add {log: ["query"]} inside parenthases of PrismaClient to see queries executed

//data:
async function main() {
    const user = await prisma.user.create({
        data: {
            name: "Jasper",
            email: "jasper@test.com",
            age: 10,
            id: "",
        },
    })
    // orderBy: {
    //   {age: "desc"},



    // distinct: [""]
    // take: 2, (how many results you want to return)
    // skip 1, (skipping first)

    main()
        .catch(e => {
            console.error(e.message)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })



}