import type { v4 as uuid } from 'uuid'

export interface ToDo {
    title: string;
    timestamp: string;
    color: string;
    completed: boolean;
    priority: string;
    id?: uuid;
}