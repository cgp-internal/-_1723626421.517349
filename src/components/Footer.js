const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      &copy; {currentYear} All rights reserved.
    </footer>
  );
}

export default Footer;