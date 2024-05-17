import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
	@ApiProperty({ example: 'Notebook', description: 'The Name of the Product' })
    name: string;

	@ApiProperty({ example: 'The Best Notebook', description: 'The Description of the Product' })
	description: string;
}
