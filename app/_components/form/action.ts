"use server"

import { sendMail } from "../../_helpers/mail.helper"

export async function handleSubmit(formData: FormData): Promise<boolean> {
	try {
		const name = formData.get("name")?.toString()
		const email = formData.get("email")?.toString()
		const company = formData.get("company")?.toString()
		const service = formData.get("service")?.toString()
		const message = formData.get("message")?.toString()

		if (!name || !email || !message) {
			return false
		}

		// Send notification email to admin
		await sendMail({
			subject: "New Message from Paul Bam Website",
			html: `
			<div style="font-family: Arial, sans-serif; max-width: 100%; width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);">
				
				<!-- Header Section -->
				<div style="background-color: #1a365d; padding: 20px; text-align: center;">
					<h2 style="color: white; margin: 0; font-size: 24px;">Paul Bam - New Contact Message</h2>
				</div>

				<!-- Body Section -->
				<div style="padding: 20px 30px; background-color: #ffffff;">
					<p style="font-size: 16px; color: #333; margin-bottom: 20px; line-height: 1.6;">
						You have received a new message through the Paul Bam website contact form:
					</p>

					<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
						<tr>
							<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Name</td>
							<td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
						</tr>
						<tr>
							<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Email</td>
							<td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
						</tr>
						${company ? `
						<tr>
							<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Company</td>
							<td style="border: 1px solid #ddd; padding: 10px;">${company}</td>
						</tr>
						` : ''}
						${service ? `
						<tr>
							<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Service of Interest</td>
							<td style="border: 1px solid #ddd; padding: 10px;">${service}</td>
						</tr>
						` : ''}
						<tr>
							<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Message</td>
							<td style="border: 1px solid #ddd; padding: 10px;">${message}</td>
						</tr>
					</table>

					<p style="color: #555; font-size: 14px; line-height: 1.5; text-align: center;">
						This message was sent from the contact form on the Paul Bam website.
					</p>
				</div>

				<!-- Footer Section -->
				<div style="background-color: #f4f4f4; padding: 15px 20px; text-align: center;">
					<p style="font-size: 12px; color: #1a365d; margin: 0;">&copy; 2024 Paul Bam. All rights reserved.</p>
				</div>
			</div>
			`,
		})
		
		// Send confirmation email to user
		await sendMail({
			subject: "Thank you for reaching out to Paul Bam",
			html: `
		<div style="font-family: Arial, sans-serif; max-width: 100%; width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);">
				<!-- Header Section -->
				<div style="background-color: #1a365d; padding: 20px; text-align: center;">
					<h2 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us</h2>
				</div>
				
				<!-- Body Section -->
				<div style="padding: 20px 30px; background-color: #ffffff; ">
					<p style="font-size: 16px; color: #333; margin-bottom: 20px; line-height: 1.6;">
						Hello ${name},
					</p>
					<p style="font-size: 14px; color: #555; line-height: 1.6;">
						Thank you for reaching out to us at Paul Bam. We have received your message, and our team is reviewing it. We will get back to you as soon as possible.
					</p>
					<p style="font-size: 14px; color: #555; line-height: 1.6;">
						We appreciate your interest in our services.
					</p>
				</div>
		
				<!-- Footer Section -->
				<div style="background-color: #f4f4f4; padding: 15px 20px; text-align: center;">
					<p style="font-size: 12px; color: #1a365d; margin: 0;">&copy; 2024 Paul Bam. All rights reserved.</p>
				</div>
			</div>
			`,
			to: email,
		});

		return true
	} catch (error) {
		console.error("Error in handleSubmit:", error)
		return false
	}
}
