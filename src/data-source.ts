import { DataSource } from 'typeorm';
import { Productos } from './entity/Productos';
import { Categoria } from './entity/Categoria';
import { Proveedor } from './entity/Proveedor';
import { Vendedor } from './entity/Vendedor';
import { Cliente } from './entity/Cliente';
import { CabeceraFactura } from './entity/CabeceraFactura';
import { DetalleFactura } from './entity/DetalleFactura';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Utn123**",
    database: "deyfranbd",
    synchronize: true,
    logging: false,
    entities: [Productos, Categoria, Proveedor, Vendedor, Cliente, CabeceraFactura, DetalleFactura], 
    migrations: [],
    subscribers: [],
})  