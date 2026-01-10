import 'reflect-metadata'
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { Category } from "./modules/category/category.entities.js";
import { CategoryResolver } from "./modules/category/category.resolver.js";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "hilalahmad",
    database: "node_graphql_ts",
    synchronize: true,
    logging: true,
    entities: [
        Category
    ]
})
async function main() {
    try {
        await AppDataSource.initialize()
        console.log('Database connected successfully');

        const schema = await buildSchema({
            resolvers: [
                CategoryResolver,
            ],
            validate: true
        })
        const server = new ApolloServer({ schema })

        const { url } = await startStandaloneServer(server, {
            listen: {
                port: 4000
            }
        })

        console.log(`🚀  Server ready at: ${url}`)
    } catch (error) {
        const err = error as Error
        console.log(err.message)
    }
}

main();