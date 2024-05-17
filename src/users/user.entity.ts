import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	@ApiProperty({ example: 1, description: 'The ID of the User' })
	id: number;

	@Column()
	@ApiProperty({ example: 'Johny5', description: 'The Username of the User' })
	username: string;

	@Column()
	@ApiProperty({ example: 'password123', description: 'The password of the User' })
	password: string;
}
