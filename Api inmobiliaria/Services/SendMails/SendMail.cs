using System.Net.Mail;
using System.Net;

namespace Api_inmobiliaria.Services.SendMails
{
    public class SendMail(IConfiguration _configuration)
    {
        private readonly IConfiguration configuration = _configuration;

        public async Task SendAsync(string to, string subject, string body, bool isHtml = true)
        {
            var mailSettings = configuration.GetSection("MailSettings");
            string? smtpServer = mailSettings!.GetValue<string>("SmtpServer");
            int smtpPort = mailSettings!.GetValue<int>("SmtpPort");
            string? smtpUser = mailSettings!.GetValue<string>("SmtpUser");
            string smtpPass = mailSettings!.GetValue<string>("SmtpPass");
            bool enableSsl = mailSettings!.GetValue<bool>("EnableSsl");

            using var client = new SmtpClient(smtpServer, smtpPort)
            {
                Credentials = new NetworkCredential(smtpUser, smtpPass),
                EnableSsl = enableSsl
            };

            var mail = new MailMessage(smtpUser, to, subject, body)
            {
                IsBodyHtml = isHtml
            };

            await client.SendMailAsync(mail);
        }
    }
}
