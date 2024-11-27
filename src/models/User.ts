import { UserRegister } from "./UserRegister";

export type User = Omit<UserRegister, 'password'> & {
    id: string
};