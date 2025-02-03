import { IsNumber, IsString } from "class-validator";

export class DogDto {
    @IsString()
    name: string;
    
    @IsNumber()
    age: number;

    @IsString()
    color: string
}