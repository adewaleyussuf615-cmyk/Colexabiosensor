import Link from 'next/link';

export function Header() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand" aria-label="Colexa Biosensor home">
          <img src="https://colexabiosensor.com/wp-content/uploads/2023/08/Colexa-Biosensor-LOGO.png" alt="Colexa Biosensor" />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/#products">Products</Link>
          <Link href="/#about">About Colexa</Link>
          <Link href="/#quality">Research &amp; Quality</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link href="/#contact" className="primary-btn">Partner With Us</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-meta">
          <Link href="/" className="brand" aria-label="Colexa Biosensor home">
            <img src="https://colexabiosensor.com/wp-content/uploads/2023/08/Colexa-Biosensor-LOGO.png" alt="Colexa Biosensor" />
          </Link>
          <p>Medical devices and in-vitro diagnostics, made in Nigeria.</p>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <Link href="/#products">Products</Link>
            <Link href="/#about">About Colexa</Link>
            <Link href="/#quality">Research &amp; Quality</Link>
          </div>
          <div>
            <strong>Connect</strong>
            <Link href="/resources">Resources</Link>
            <Link href="/#contact">Contact</Link>
            <Link href="/#contact">Partner With Us</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Colexa Biosensor. All rights reserved.</span>
        <span><a href="https://colexabiosensor.com/" target="_blank" rel="noreferrer">Official website</a> · Privacy information</span>
      </div>
    </footer>
  );
}