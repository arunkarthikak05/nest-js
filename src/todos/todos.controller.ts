import { Body, Controller, Post ,Get,Put,Param, Delete} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todo')
export class todosController{
    constructor( private readonly todosService:TodosService){}

    @Post()
    create(@Body() dto:CreateTodoDto){
        return this.todosService.create(dto);
    }

    @Get()
    findMany(){
        return this.todosService.findMany();
    }

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.todosService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() dto:CreateTodoDto){
        return this.todosService.update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.todosService.delete(id);
    }
}