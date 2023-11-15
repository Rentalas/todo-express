import {nanoid} from 'nanoid';

export type Task = Record<string, any>;
export class TaskRepository{
    private tasks: Record<string, any>[] = [];

    constructor(private generateId: (length?: number) => string) {}

    getTasks(): Record<string, any>[] {
        return this.tasks;
    }

    updateTask(task: Task): void {
        const index = this.tasks.findIndex(el => el.id === task.id);
        this.tasks[index] = task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(el => el.id === id);
    }

    createTask(task): void {
        const id = nanoid(5);
        task.id = id;
        this.tasks.push(task);
    }

    deleteTask(id: string): void {
        const index = this.tasks.findIndex(el => el.id === id);
        this.tasks.splice(index, 1);
    }
}

export const taskRepository = new TaskRepository(nanoid);