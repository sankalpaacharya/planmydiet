import transporter from "../utils/mail";

const mailOptions = {
	from: 'esp32airquality@gmail.com',
	to: 'sankalp.ace22@sot.pdpu.ac.in',
	subject: 'Here are your Monthly Reports',
	text: 'Hello\n This is auto-mated report \n Plz do not reply to this email!'
};

import { Request, Response } from 'express';

export default async function sendMailController(_: Request, res: Response) {
	try {
		const info = await transporter.sendMail(mailOptions);
		console.log('Email sent: ' + info.response);
	} catch (error) {
		console.log("Error :" + error);
	}
	res.send({data:"sent the mail",error:null})
}