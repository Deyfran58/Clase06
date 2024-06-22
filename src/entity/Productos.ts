import { IsNotEmpty, IsPositive, MaxLength, max, maxLength } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Productos{
 
    @PrimaryColumn()
    id:number;
    @Column({length:50,nullable:false})
    @MaxLength(50,{message:'Debe de contene un máximo de 50 caracteres'})
    @IsNotEmpty({message:'Debe indicar el nombre del producto'})

    nombre: string;
    @Column()
    @IsNotEmpty({message:'Debe indicar el precio'})

    precio: number;
    @Column()
    @IsPositive({message:'Debe indicar un valor positivo'})
    @IsNotEmpty({message:'Debe indicar el stock'})

    stock:number;
    @Column()
    @IsNotEmpty({message:'Debe la categoria'})
    categoria: number;

    @Column({default:1})
    estado: boolean;
    






    
}