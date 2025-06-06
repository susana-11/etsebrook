import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
<footer className="footer">
<div className="footer-icons">
<a href="https://linkedin.com" target="_blank" rel="noopenernoreferrer"><FaLinkedin /></a>
<a href="https://github.com" target="_blank" rel="noopenernoreferrer"><FaGithub /></a>
<a href="https://t.me" target="_blank" rel="noopenernoreferrer"><FaTelegram /></a>
<a href="https://twitter.com" target="_blank" rel="noopenernoreferrer"><FaTwitter /></a>
</div>
<p className="footer-text">© 2025 Etsebruk Amanuel | All rights reserved</p>
</footer>
  );
};

export default Footer;
