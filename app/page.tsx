import Link from 'next/link';
import Image from 'next/image';
import { getPublishedPosts } from '@/lib/posts';

export default async function HomePage() {
  const posts = (await getPublishedPosts()).slice(0, 3);

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="brand" aria-label="Colexa Biosensor home">
            <img src="https://colexabiosensor.com/wp-content/uploads/2023/08/Colexa-Biosensor-LOGO.png" alt="Colexa Biosensor" />
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="#products">Products</Link>
            <Link href="#about">About Colexa</Link>
            <Link href="#quality">Research &amp; Quality</Link>
            <Link href="/resources" target="_blank" rel="noreferrer">Resources</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <Link href="#contact" className="primary-btn">Partner With Us</Link>
        </div>
      </header>

      <main>
        <section className="container hero">
          <div className="hero-copy">
            <p className="eyebrow">Medical devices, made in Nigeria</p>
            <h1>Building healthcare solutions, here in Nigeria.</h1>
            <p>Discover Colexa’s medical devices and diagnostics, and the people and expertise behind them.</p>
            <div className="hero-actions">
              <Link href="#products" className="primary-btn">Explore Our Products</Link>
              <Link href="#contact" className="secondary-btn">Partner With Us</Link>
            </div>
          </div>

          <div className="hero-visual" aria-label="Colexa product and facility imagery">
            <div className="hero-image-main">
              <img src="https://colexabiosensor.com/wp-content/uploads/2025/03/OnPoint-Strip-image-2.png" alt="OnPoint blood glucose test strips" />
            </div>
            <div className="hero-image-small">
              <img src="https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-7.jpg" alt="Colexa team member at work" />
            </div>
            <div className="hero-badge"><strong>2023</strong><span>Founded with a vision for Africa</span></div>
          </div>
        </section>

        <div className="mini-bar">
          <div className="container mini-bar-inner">
            <span>For people</span>
            <span aria-hidden="true" />
            <span>For providers</span>
            <span aria-hidden="true" />
            <span>For a healthier Nigeria</span>
          </div>
        </div>

        <section id="products" className="container page-shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Our products</p>
              <h2>Practical tools for everyday care.</h2>
            </div>
            <p>From personal glucose monitoring to professional diagnostics, our portfolio is designed around the realities of healthcare in Africa.</p>
          </div>

          <div className="products-grid">
            <article className="product-card">
              <div className="product-media">
                <img src="https://colexabiosensor.com/wp-content/uploads/2025/03/OnPoint-Strip-image-e1742123798188.png" alt="OnPoint GH82 monitoring system" />
              </div>
              <div className="product-body">
                <span className="product-meta">Home use</span>
                <h3>OnPoint GH82 Monitoring System</h3>
                <p>A blood glucose monitoring system designed for everyday use in home health routines and clinical settings.</p>
                <Link href="/resources/onpoint-gh82-monitoring-system" target="_blank" rel="noreferrer" className="link-row">View Product <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="product-card">
              <div className="product-media">
                <img src="https://colexabiosensor.com/wp-content/uploads/2025/03/OnPoint-Strip-image-2.png" alt="OnPoint GH82 test strip" />
              </div>
              <div className="product-body">
                <span className="product-meta">Home use</span>
                <h3>OnPoint GH82 Test Strip</h3>
                <p>For quantitative measurement of glucose in fresh capillary whole blood using the OnPoint GH82 system.</p>
                <Link href="/resources/onpoint-gh82-test-strip" target="_blank" rel="noreferrer" className="link-row">View Product <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="product-card">
              <div className="product-media">
                <img src="https://colexabiosensor.com/wp-content/uploads/2025/03/HIV-1-2-3-2.png" alt="STANDARD Q HIV test" />
              </div>
              <div className="product-body">
                <span className="product-meta">Professional use</span>
                <h3>STANDARD™ Q HIV 1/2 Ab 3-Line Test</h3>
                <p>A rapid chromatographic immunoassay for the qualitative detection of HIV antibodies.</p>
                <Link href="/resources/standard-q-hiv-1-2-ab-3-line-test" target="_blank" rel="noreferrer" className="link-row">View Product <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section id="quality" className="quality-band">
          <div className="container quality-grid">
            <div>
              <p className="eyebrow">Quality you can verify</p>
              <h2>Evidence matters. So does access.</h2>
            </div>
            <div>
              <p>Colexa is building a quality-led manufacturing practice for medical devices and in-vitro diagnostics. We make the supporting information easier to find, understand and use.</p>
              <div className="quality-list">
                <a href="https://colexabiosensor.com/?page_id=8234" className="quality-item" target="_blank" rel="noreferrer">
                  <strong>01</strong>
                  <span>Validation reports</span>
                  <span aria-hidden="true">↗</span>
                </a>
                <a href="https://colexabiosensor.com/?page_id=8070" className="quality-item" target="_blank" rel="noreferrer">
                  <strong>02</strong>
                  <span>Quality policy</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="container story-grid">
          <div className="story-photo">
            <img src="https://colexabiosensor.com/wp-content/uploads/2025/10/Colexa-2_Copy.jpg" alt="Colexa Biosensor manufacturing facility" />
          </div>
          <div className="story-copy">
            <p className="eyebrow">Made here</p>
            <h2>More than a facility. People, knowledge and possibility.</h2>
            <p>Established in 2023, Colexa Biosensor was founded to help localize healthcare manufacturing and support a more self-reliant health system in Nigeria and beyond.</p>
            <Link href="/our-story" className="primary-btn">Discover Our Story</Link>
          </div>
        </section>

        <section className="partner-band">
          <div className="container partner-inner">
            <div>
              <p className="eyebrow">Partner with Colexa</p>
              <h2>Let’s make more possible together.</h2>
            </div>
            <div>
              <p>For healthcare providers, distributors and institutional partners looking to strengthen access to diagnostics in Nigeria and beyond.</p>
              <Link href="#contact" className="primary-btn">Discuss a Partnership</Link>
            </div>
          </div>
        </section>

        <section id="resources" className="container page-shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Resources</p>
              <h2>Keep learning. Stay informed.</h2>
            </div>
            <Link href="/resources" target="_blank" rel="noreferrer" className="link-row">View all resources <span aria-hidden="true">→</span></Link>
          </div>

          <div className="resources-grid">
            {posts.map((post) => (
              <Link key={post.id} href={`/resources/${post.slug}`} target="_blank" rel="noreferrer" className="resource-card">
                <div>
                  <div className="resource-date">{post.category.toUpperCase()}</div>
                  <h3>{post.title}</h3>
                </div>
                <span>Read article ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="container contact-panel page-shell">
          <div className="contact-info">
            <p className="eyebrow">Start a conversation</p>
            <h2>Have a question? We’re here to help.</h2>
            <p>Whether you’re looking for product information, distribution opportunities or a partnership conversation, send us a note.</p>
            <div className="contact-details">
              <div>
                <span>Visit</span>
                <p>31/33 Industrial Avenue, Ilupeju, Lagos, Nigeria.</p>
              </div>
              <div>
                <span>Call</span>
                <a href="tel:+2347043750517">+234 704 375 0517</a>
              </div>
              <div>
                <span>Hours</span>
                <p>Monday – Friday<br />8:00am – 5:00pm</p>
              </div>
            </div>
          </div>

          <form className="contact-form" aria-label="Contact form">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Organisation (optional)
              <input type="text" name="organisation" />
            </label>
            <label>
              Enquiry type
              <select name="type" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Product information</option>
                <option>Distribution</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" required />
            </label>
            <button type="submit" className="primary-btn">Send enquiry</button>
            <p className="form-status">Demo only: connect this form to your configured inbox.</p>
          </form>
        </section>
      </main>

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
              <Link href="#products">Products</Link>
              <Link href="#about">About Colexa</Link>
              <Link href="#quality">Research &amp; Quality</Link>
            </div>
            <div>
              <strong>Connect</strong>
              <Link href="/resources" target="_blank" rel="noreferrer">Resources</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#contact">Partner With Us</Link>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Colexa Biosensor. All rights reserved.</span>
          <span><a href="https://colexabiosensor.com/" target="_blank" rel="noreferrer">Official website</a> · Privacy information</span>
        </div>
      </footer>
    </>
  );
}
