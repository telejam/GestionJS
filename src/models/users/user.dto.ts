import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
	@ApiProperty({ example: 'Johny5', description: 'The Username of the User' })
    username: string;

	@ApiProperty({ example: 'password123', description: 'The password of the User' })
    password: string;
}
