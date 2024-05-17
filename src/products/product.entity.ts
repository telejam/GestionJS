import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	@ApiProperty({ example: 1, description: 'The ID of the Product' })
	id: number;

	@Column()
	@ApiProperty({ example: 'Notebook', description: 'The Name of the Product' })
	name: string;

	@Column()
	@ApiProperty({ example: 'The Best Notebook', description: 'The Description of the Product' })
	description: string;
}
