const { sendMail, transporter } = require("../helpers/mailers");

class EmailController {
    static async send(req, res, next) {
        try {
            const {from, message} = req.body

            await transporter.sendMail({
                from: `"gelodoc" <${process.env.EMAIL_USER}>`,
                to: process.env.EMAIL_DOCTOR,
                subject: 'Pertanyaan',
                text:`Email Pasien: ${from}\n\nPertanyaan:\n${message}`,
                html:   `<p>Email Pasien: ${from}</p>
                         <p>Pertanyaan:</p>
                         <p>${message}</p>`
        })
            res.send(`<h3>Email terkirim ke dokter!</h3>
                    <p>Dokter akan membalas ke: ${from}</p>`)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = EmailController