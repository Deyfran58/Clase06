import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { IsNotEmpty, MaxLength } from "class-validator";
import { CabeceraFactura } from "./CabeceraFactura";

@Entity()
export class Vendedor {
    @PrimaryGeneratedColumn()
    @IsNotEmpty({ message: 'Debe indicar el ID del vendedor.' })
    ID_Vendedor: number;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar el nombre del vendedor.' })
    Nombre: string;

    @Column({ length: 100, nullable: false })
    @MaxLength(100, { message: 'Debe contener un máximo de 100 caracteres.' })
    @IsNotEmpty({ message: 'Debe indicar los apellidos del vendedor.' })
    Apellidos: string;

    @Column({ length: 200, nullable: true })
    @MaxLength(200, { message: 'Debe contener un máximo de 200 caracteres.' })
    Dirección: string;

    @Column({ length: 20, nullable: true })
    @MaxLength(20, { message: 'Debe contener un máximo de 20 caracteres.' })
    Teléfono: string;

    @OneToMany(() => CabeceraFactura, cabeceraFactura => cabeceraFactura.vendedor)
    @JoinColumn()
    CabecerasFactura: CabeceraFactura[];
}
