import { Task, TaskRepository, taskRepository } from "./TaskRepository";

export class Tasks {

    constructor(private taskRepository: TaskRepository) {

    }

    public getTasks(): Record<string, any>[] {
        return this.taskRepository.getTasks();
    }

    updateTask(id: string, diff: Partial<Task>): void {
        const task = {
            ...this.taskRepository.getTaskById(id),
            ...diff,
        };
        this.taskRepository.updateTask(task);

    }

    createTask(task:Task = {}): void {
        this.taskRepository.createTask(task);
    }

    deleteTask(id: string): void {
        this.taskRepository.deleteTask(id);
    }
}

export const tasks = new Tasks(taskRepository);