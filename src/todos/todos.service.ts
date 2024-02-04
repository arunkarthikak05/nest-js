import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./todo.entity";
import {  CreateTodoDto } from "./dtos/create-todo.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosService{
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}

    async create(dto:CreateTodoDto){
        const todo = this.todoRepository.create(dto)

        return await this.todoRepository.save(todo)
    }

    findMany(){
        return this.todoRepository.find({ })
    }

    findOne(id:number){
        return this.todoRepository.findOne({where:{id}})
    }

    async update(id:number, dto:CreateTodoDto){
        const todo = await this.todoRepository.findOne({where:{id}})

        //check if it exists
        Object.assign(todo,dto);
        return await this.todoRepository.save(todo);

    }

    async delete(id:number){
        const todo = await this.todoRepository.findOne({where:{id}})

         await this.todoRepository.remove(todo)
         return this.todoRepository.find({});
    }
    
}