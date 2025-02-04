import { Body, Controller, ForbiddenException, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Query, Req, Res, UseFilters, UseGuards } from '@nestjs/common';
import { DogDto } from './dto/create-dog.dto';
import { Observable, of } from 'rxjs';
import { Response } from 'express';
import { DogsService } from './dogs.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ValidationPipe } from 'src/validation.pipe';
import { Version } from './interfaces/dog.interface';
//! -> Demo
@Version('1.0-quindarts')
@Controller('dogs')
@UseGuards(AuthGuard)
export class DogsController {
    constructor(private dogSv: DogsService) { }
    @Get()
    findAll(): string {
        return 'getAll'
    }
    //TODO: by query
    @Get('filter')
    filter(@Query('key') key: string, @Query('field') field: string): string {
        return `req query key: ${key} -- field: ${field}`
    }
    //TODO: by params
    @Get(":id")
    findById(@Param() params: any): string {
        return `req by id: ${params.id}`
    }

    //TODO : create
    @Post()
    @HttpCode(201)
    // @UseFilters(new HttpExceptionFilter())
    create(@Body(new ValidationPipe()) createDog: DogDto): string {
        // try {
        return `dog created success, dog info: ${createDog.age} -- ${createDog.color} -- ${createDog.name}`
        // } catch (error) {
        //     throw new ForbiddenException();
        // }
    }

    //TODO Observable use for query database
    @Get('async')
    findAllAsync(): Observable<any[]> {
        return of([]);
    }
    //TODO response JSON
    @Get('json')
    findJSON(@Res() res: Response) {
        return res.status(HttpStatus.OK).json({
            success: true,
            message: "test JSON success",
            data: [1, 2, 4, 5]
        })
    }
    @Get()
    findPass(@Res({ passthrough: true }) res: Response) {
        // res.status(HttpStatus.OK);
        return {
            success: true,
            message: "test Find Pass success",
            data: [3, 3, 3]
        }
    }
    //TODO Use provider
    @Post('list')
    addList(@Body() addList: { name: string }) {
        this.dogSv.addToList(addList.name)
    }
    @Post('list')
    removeList(@Body() rm: { name: string }) {
        this.dogSv.removeList(rm.name)
    }

    // //TODO: Demo modules
    // @Get()
    // getModuleValue(): string {
    //     // return `${ConfigModule.}`
    // }

}
