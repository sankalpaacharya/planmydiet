import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'esp32airquality@gmail.com',
    pass: 'adyu bmul iwkv eckv',
  }
});

export default transporter