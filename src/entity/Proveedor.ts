import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";
import { Productos } from "./Productos";

@Entity()
export class Proveedor {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el ID del proveedor.' })
    ID_Proveedor: number;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el nombre del proveedor.' })
    Nombre: string;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los apellidos del proveedor.' })
    Apellidos: string;

    @Column({ length: 200, nullable: true })
    @MaxLength(200, { message: 'Debe contener un máximo de 200 caracteres.' })
    Dirección: string;

    @Column({ length: 100, nullable: true })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    Provincia: string;

    @Column({ length: 20, nullable: true })
    @MaxLength(20, { message: 'Debe contener un máximo de 20 caracteres.' })
    Teléfono: string;

    @OneToMany(() => Productos, (producto) => producto.proveedor)
    Productos: Productos[];
}
