import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsDate, IsNotEmpty, Length, IsEmail } from "class-validator";

@Entity()
export class Message {
   // uuid identificator
   @PrimaryGeneratedColumn("uuid")
   id: string;

   // auth can not be emty....
   @IsNotEmpty()
   @Column()
   author: string;

   // validate email property
   @IsEmail()
   @Column()
   email: string;

   // can not be empty & length must be less then 100
   @Length(1, 99)
   @Column()
   text: string;

   // create date
   @IsDate()
   @Column("timestamptz")
   created_at: Date;

   // update date
   @IsDate()
   @Column("timestamptz")
   updated_at: Date;
}
