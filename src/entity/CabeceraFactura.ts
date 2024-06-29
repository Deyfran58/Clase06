// src/entity/CabeceraFactura.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { IsNotEmpty, IsDate } from "class-validator";
import { Cliente } from "./Cliente";
import { Vendedor } from "./Vendedor";
import { DetalleFactura } from "./DetalleFactura";

@Entity()
export class CabeceraFactura {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el número de la factura.' })
    Numero: number;

    @Column()
    @IsDate()
    @IsNotEmpty({ message: 'Debe indicar la fecha de la factura.' })
    Fecha: Date;

    @ManyToOne(() => Cliente, (cliente) => cliente.CabecerasFactura)
    @IsNotEmpty({ message: 'Debe indicar el cliente.' })
    Cliente: Cliente;

    @ManyToOne(() => Vendedor, (vendedor) => vendedor.CabecerasFactura)
    @IsNotEmpty({ message: 'Debe indicar el vendedor.' })
    Vendedor: Vendedor;

    @OneToMany(() => DetalleFactura, (detalleFactura) => detalleFactura.CabeceraFactura)
    DetallesFactura: DetalleFactura[];
}
