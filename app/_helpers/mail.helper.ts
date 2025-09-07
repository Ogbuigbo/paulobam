import * as nodemailer from "nodemailer";

type TMailOptions = {
	subject: string;
	html: string;
	to?: string;
};

const transporter = nodemailer.createTransport({
	host: process.env["YAHOO_HOST"] || "smtp.mail.yahoo.com",
	port: parseInt(process.env["YAHOO_PORT"] || "587"),
	secure: false,
	auth: {
		user: process.env["YAHOO_USER"],
		pass: process.env["YAHOO_PASSWORD"],
	},
});

const sendMail = async ({ to, ...options }: TMailOptions) => {
	try {
		const info = await transporter.sendMail({
			from: "Paul Bam <paulotam@ymail.com>",
			to: [to || "paulotam@ymail.com"],
			...options,
		});
		console.log("Mail sent:", info);
	} catch (error) {
		console.error("Error sending mail:", error);
	}
};

export { sendMail };
