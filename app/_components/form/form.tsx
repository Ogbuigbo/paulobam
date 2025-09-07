"use client"
import React, { useRef } from "react"
import { handleSubmit } from "./action"
import { toast } from "react-toastify"
import { Button } from "../ui/button"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Send, ChevronDown } from "lucide-react"

function Form() {
	const ref = useRef<HTMLFormElement>(null)

	const _handleSuccess = () => {
		toast.dark(
			"Your message has been received. We will get back to you shortly"
		)
		ref.current?.reset()
	}
	const _handleError = () => {
		toast.dark(
			"An error occurred while sending your message. Please try again later."
		)
	}

	const _handleSubmit = async (formData: FormData) => {
		const resp = await handleSubmit(formData)
		if (resp) {
			_handleSuccess()
		} else {
			_handleError()
		}
	}

	const services = [
		"Fashion & Food Distribution",
		"Import & Export Services",
		"Civil Engineering & Construction",
		"Manufacturing & Representation",
		"Real Estate & Property",
		"Equipment & Marine Leasing",
		"Road Construction",
		"Petroleum Products",
		"General Contracts",
		"Other Services"
	]

	return (
		<section className="py-16">
			<Card className="border border-gray-100 shadow-lg overflow-hidden max-w-4xl mx-auto">
				<div className="bg-gradient-to-r from-navy to-blue-900 p-6 text-white">
					<CardTitle className="text-2xl">Send us a Message</CardTitle>
					<p className="text-white/90">
						Fill out the form below and we'll get back to you within 24 hours.
					</p>
				</div>
				<CardContent className="p-8">
					<form
						action={_handleSubmit}
						className="space-y-6"
						ref={ref}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="name" className="text-gray-700">Full Name *</Label>
								<Input
									id="name"
									name="name"
									placeholder="Your full name"
									required
									className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email" className="text-gray-700">Email Address *</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="your.email@example.com"
									required
									className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
								/>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-2">
								<Label htmlFor="company" className="text-gray-700">Company/Organization</Label>
								<Input
									id="company"
									name="company"
									placeholder="Your company name (optional)"
									className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="service" className="text-gray-700">Service of Interest</Label>
								<div className="relative">
									<select
										id="service"
										name="service"
										className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:ring-2 focus:ring-gold focus:border-transparent appearance-none"
									>
										<option value="">Select a service</option>
										{services.map((service, index) => (
											<option key={index} value={service}>{service}</option>
										))}
									</select>
									<ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="message" className="text-gray-700">Message *</Label>
							<Textarea
								id="message"
								name="message"
								placeholder="Tell us about your project, requirements, or any questions you have..."
								rows={6}
								required
								className="border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
							/>
						</div>

						<Button 
							type="submit" 
							variant="navy"
							size="lg" 
							className="w-full hover:bg-blue-800 transition-all shadow-md"
						>
							Send Message
							<Send className="w-5 h-5 ml-2" />
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	)
}

export default Form