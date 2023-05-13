import path from "path";
import fs from "fs";

function buildPath() {
	return path.join(process.cwd(), "data", "data.json")
}

function extractData(filePath) {
	const jsonData = fs.readFileSync(filePath)
	const data = JSON.parse(jsonData)
	return data
}



export default function handler(req, res) {
	const { method } = req

	//Access data 
	//Extract data
	// res 404 if !allEvents
	// ALl Events - loop through and identify the event ID
	// add email to emails registered on the right event
	// add email only of the email does not exist on that event
	// Check the format to make sure it is okay
	const filePath = buildPath();
	const { events_categories, all_events } = extractData(filePath);
	console.log()
	

	if (!all_events || !events_categories) {
		res.status(404).json({
			status: 404,
			message: "Events data not found"
		})
	}

	if (method === "POST") {
		const { email, eventId } = req.body

		const newAllEvents = all_events.map((event) => {
			if (event.id === eventId) {
				if (event.emails_registered.includes(email)) {
					res.status(409).json({ status: 409, message: "This email has already been registered" })
				} else if (email) {
					return {
						...event, emails_registered: [...event.emails_registered, email]
					}
				} else if (!email || !email.includes('@')) {
					res.status(422).json({ status: 422, message: "This is not a valid email" })
				}
			}

			return event
		})

		fs.writeFileSync(filePath, JSON.stringify({ events_categories, all_events: newAllEvents }))

		res.status(200).json({ message: `the email ${email} has been registered for this event successfully` })
	}
}