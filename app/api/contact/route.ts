import { sendMail } from "../../_helpers/mail.helper"

export async function POST(request: Request) {
	const formData = await request.formData()
	const name = formData.get("name")
	const email = formData.get("email")
	// const phone = formData.get("phone")
	const message = formData.get("message")

	sendMail({
		subject: "New Message from Quema Consulting Website",
		html: `
		<div style="font-family: Arial, sans-serif; max-width: 100%; width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);">
			
			<!-- Header Section -->
			<div style="background-color: #712323; padding: 0px 20px; text-align: center;">
				<img src='https://tinypic.host/images/2024/10/14/quema-2-fotor-202410142237.png' alt='Quema Consulting Logo' style="max-width: 100px; width: 100%; height: auto;" />
			</div>

			<!-- Body Section -->
			<div style="padding: 20px 30px; background-color: #ffffff;">
				<p style="font-size: 16px; color: #333; margin-bottom: 20px; line-height: 1.6;">
					You have received a new message through the Quema Consulting website contact form:
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
					<tr>
						<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Phone</td>
						
					</tr>
					<tr>
						<td style="border: 1px solid #ddd; padding: 10px; background-color: #f9f9f9; font-weight: bold;">Message</td>
						<td style="border: 1px solid #ddd; padding: 10px;">${message}</td>
					</tr>
				</table>

				<p style="color: #555; font-size: 14px; line-height: 1.5; text-align: center;">
					This message was sent from the contact form on the Quema Consulting website.
				</p>
			</div>

			<!-- Footer Section -->
			<div style="background-color: #f4f4f4; padding: 15px 20px; text-align: center;">
				<p style="font-size: 12px; color: #712323; margin: 0;">&copy; 2024 Quema Consulting Limited. All rights reserved.</p>
			</div>
		</div>
		`,
	})
	
	sendMail({
		subject: "Thank you for reaching out to Quema Consulting",
		html: `
	<div style="font-family: Arial, sans-serif; max-width: 100%; width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);">
			<!-- Body Section -->
			<div style="padding: 20px 30px; background-color: #ffffff; ">
				<p style="font-size: 16px; color: #333; margin-bottom: 20px; line-height: 1.6;">
					Hello,
				</p>
				<p style="font-size: 14px; color: #555; line-height: 1.6;">
					Thank you for reaching out to us at Quema Consulting. We have received your message, and our team is reviewing it. We will get back to you as soon as possible.
				</p>
				<p style="font-size: 14px; color: #555; line-height: 1.6;">
					We appreciate your interest in our services.
				</p>
			</div>
	
			<!-- Footer Section -->
    <div style="display:flex; align-items: center; justify-content: space-between; padding-left: 20px; padding-right: 20px;">
			<div>
				 <img src="https://tinypic.host/images/2024/10/28/quema-2-fotor-202410142237.png" alt="Quema Consulting Logo" style="max-width: 180px; height: auto;" />
			</div>
			<div style="background-color: #ffffff; padding: 20px; text-align: right; border-left: 1px solid #e0e0e0;">
				<p style="font-size: 14px; color: #333; margin-bottom: 10px; line-height: 1.6;">
					
					Human Resource Manager<br />
					PLOT 268, Trans Amadi Industrial Layout Rd,<br />
					Ordinance, Port Harcourt, 500211<br />
					Rivers State.<br />
					M: 08121901685<br />
					<a href="https://quemaconsulting.com/" style="color: #712323; text-decoration: none;">https://quemaconsulting.com/</a>
				</p>
				<div style="margin-top: 10px;">
					<a href="https://tinypic.host/images/2024/10/28/facebook.png" style="margin: 0 5px;">
						<img src="https://tinypic.host/images/2024/10/28/facebook.png" alt="Facebook" style="width: 24px; height: 24px;" />
					</a>
					<a href="" style="margin: 0 5px;">
						<img src="https://tinypic.host/images/2024/10/28/instagram.png" alt="Instagram" style="width: 24px; height: 24px;" />
					</a>
					<a href="https://tinypic.host/images/2024/10/28/whatsapp.png" style="margin: 0 5px;">
						<img src="https://tinypic.host/images/2024/10/28/whatsapp.png" alt="WhatsApp" style="width: 24px; height: 24px;" />
					</a>
				</div>
        </div>
			</div>
		</div>
		`,
		to: email?.toString(),
	});
	
	

	return new Response("success", {
		status: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "POST",
			"Access-Control-Allow-Headers": "Content-Type, Authorization",
		},
	})
}


