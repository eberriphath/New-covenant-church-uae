import "./Footer.css";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/",
  },
];

const whatsappNumber = ""; // Add the church number with country code, digits only.

function Footer() {
  const whatsappLink = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : null;

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Church Name</h2>
          <p className="footer-tagline">
            Making Disciples of All Nations
          </p>
          <p className="footer-established">Established in 2015</p>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>

          <div className="social-links">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
              >
                {social.name}
              </a>
            ))}
          </div>

          {whatsappLink ? (
            <a
              className="footer-whatsapp"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          ) : (
            <p className="footer-contact-note">
              WhatsApp contact details coming soon.
            </p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Church Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
