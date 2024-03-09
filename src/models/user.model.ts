export interface User {
    id?: number | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    // phone: string;
}

export type UserKey = keyof User