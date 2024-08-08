import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (token == null)
		return res.status(401).json({
			message: "Token is null",
		});

	jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
		if (err)
			return res.status(403).json({
				message: "Looks like token or token secret is wrong",
			});

		req["user"] = user["email"];

		next();
	});
}

export async function fetchUserData(req: Request, res: Response, next: NextFunction) {
	let user;

	try {
		const email = req.user;
		user = await User.findOne({ email });

		if (!user) throw new Error("User not found: '" + email + "' with this email");
	} catch (e: any) {
		return res.status(500).json({
			error: e.message,
			code: e.code,
		});
	}

	req.userData = {
		firstName: user.firstName,
		lastName: user.lastName as string,
		isSeller: user.isSeller,
		id: user.id,
	};

	next();
}

export async function isSeller(req: Request, res: Response, next: NextFunction) {
	if (req.userData?.isSeller) {
		next();
	} else {
		return res.json({
			message: "Not a seller",
		});
	}
}
