import { UUID } from "crypto";

export interface Tasks{
    task: string,
    status: string,
    date: Date,
    id: UUID
}