import { IMailProvider, IMessage } from "../IMailProvider";

import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {

  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'ef9e000e19bf2f',
        pass: '62338546fba194',
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
      this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body,
      })
  }
}