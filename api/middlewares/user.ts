import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null)
		return res.status(401).json({
			message: "Token is null",
		});

	jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
		if (err) return res.sendStatus(403);

		req["user"] = user["email"];

		next();
	});
}
