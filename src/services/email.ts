import nodemailer, {TestAccount, Transporter} from 'nodemailer'

export interface EmailAddress {
  name: string
  email: string
}

export interface MailProvider {
  account: TestAccount
  transporter: Transporter
  contactList: EmailAddress[]
  addEmailList: (userContact: EmailAddress) => void
  send: (subject: string, message: string) => Promise<void>
}

export class Email implements MailProvider {
  account!: TestAccount
  transporter!: Transporter
  contactList!: EmailAddress[]

  constructor() {
    this.init()
    this.contactList = []
  }

  async init() {
    this.account = await nodemailer.createTestAccount()
    this.transporter = await nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: this.account.user,
        pass: this.account.pass
      }
    })
  }

  addEmailList(userContact: EmailAddress) {
    this.contactList.push(userContact)
  }

  async send(subject: string, message: string) {
    const messageSendInfo = await this.transporter.sendMail({
      from: 'fred@example.com',
      to: [
        ...this.contactList.map(contact => `${contact.name} <${contact.email}>`)
      ],
      subject: subject,
      text: message,
      html: `<h1>${message}</h1>`
    })

    console.log('message sent', messageSendInfo.messageId)
    console.log('Preview', nodemailer.getTestMessageUrl(messageSendInfo))
  }
}
