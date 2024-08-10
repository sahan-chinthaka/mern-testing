const BASE_URL = "http://localhost:5000";

describe("E Commerce application", () => {
	let userId;
	let token;

	it("Create a seller user", async () => {
		const resp = await fetch(BASE_URL + "/user/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: "Jest",
				lastName: "Testing",
				email: "jest@gmail.com",
				password: "123",
				isSeller: true,
			}),
		});
		const result = await resp.json();

		expect(result.created).toBe(true);
		userId = result.id;
	});

	it("Login user", async () => {
		const resp = await fetch(BASE_URL + "/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: "jest@gmail.com",
				password: "123",
			}),
		});

		const result = await resp.json();
		token = result.token;
	});

	it("Delete the user", async () => {
		const resp = await fetch(BASE_URL + "/user", {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
	});
});
