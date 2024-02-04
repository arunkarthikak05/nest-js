import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { todosController } from "./todos.controller";
import { TodosService } from "./todos.service";

@Module({
    imports:[TypeOrmModule.forFeature([Todo]),],
    controllers:[todosController],
    providers:[TodosService],
})
export class TodosModule{

}