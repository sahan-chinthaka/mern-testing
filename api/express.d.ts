import { JwtPayload } from "jsonwebtoken";

export interface UserData {
	firstName: string;
	lastName?: string;
	isSeller: boolean;
	id: string;
}

declare global {
	namespace Express {
		interface Request {
			user?: string | JwtPayload;
			userData?: UserData;
		}
	}
}