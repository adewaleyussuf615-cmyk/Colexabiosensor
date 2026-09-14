import Image from 'next/image';

const storyImages = [
  {
    src: '/images/brand-story/colexa-1.jpg',
    alt: 'Colexa Biosensor team and manufacturing environment',
  },
  {
    src: '/images/brand-story/img-5056.jpg',
    alt: 'Colexa Biosensor manufacturing floor',
  },
  {
    src: '/images/brand-story/img-5041.jpg',
    alt: 'Colexa Biosensor staff working in the facility',
  },
  {
    src: '/images/brand-story/img-4652.jpg',
    alt: 'Colexa Biosensor team member in the production area',
  },
  {
    src: '/images/brand-story/img-4653.jpg',
    alt: 'Colexa Biosensor diagnostics manufacturing equipment',
  },
  {
    src: '/images/brand-story/img-4665.jpg',
    alt: 'Colexa Biosensor production and quality team',
  },
  {
    src: '/images/brand-story/img-4679.jpg',
    alt: 'Colexa Biosensor staff in the manufacturing facility',
  },
  {
    src: '/images/brand-story/home-page-slider-4.jpg',
    alt: 'Colexa Biosensor facility and healthcare manufacturing work',
  },
];

export default function OurStoryPage() {
  return (
    <main className="story-page" aria-labelledby="story-title">
      <div className="container story-page-inner">
        <div className="story-page-header">
          <p className="eyebrow">Our brand story</p>
          <h1 id="story-title">Our Brand Story</h1>
          <div className="story-page-intro">
            <p>Colexa Biosensor Ltd began with a technology transfer aimed at localizing and building backward integration for blood glucose meters and strips - a first for Sub-Saharan Africa. The company grew out of Codix Pharma Limited, which had already supplied over 75 million glucose monitoring and rapid diagnostic kits to Nigeria since 2010.</p>
            <p>The company was co-founded by Samson Ogunjimi and Pharm. Lekan Asuni, both veterans of multinational pharmaceutical companies, with a shared goal of building Africa&apos;s diagnostic device manufacturing capacity from the ground up.</p>
            <p>Using GDH-FAD sensor technology, Colexa manufactures two core product lines: blood glucose monitoring strips and the meters that pair with them, giving people with diabetes a reliable way to track their condition day to day.</p>
            <p>The factory runs at an installed capacity of 3.6 million strip packs a year, with room to scale further as demand grows - first across Nigeria, then the wider continent. Colexa holds ISO 9001:2015 and ISO 13485:2016 certification, and the operation has created over 1,000 jobs, with 20+ years of combined leadership experience across government, private sector, and international partnerships.</p>
          </div>
        </div>

        <div className="story-gallery" aria-label="Colexa Biosensor brand story gallery">
          {storyImages.map((image, index) => (
            <figure className={`story-gallery-item story-gallery-item-${index + 1}`} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" />
            </figure>
          ))}
        </div>

        <section className="quality-policy" aria-labelledby="quality-policy-title">
          <div className="quality-policy-header">
            <p className="eyebrow">Our commitment to quality</p>
            <h2 id="quality-policy-title">Quality Policy Statement - QR-01-02</h2>
            <p>Colexa Biosensor Ltd is an in-vitro diagnostic medical device manufacturer. Our vision is to become the leading manufacturer of medical devices and IVD devices in Sub-Saharan Africa. Our mission is to be the manufacturer of choice in Nigeria and across Africa by 2030.</p>
          </div>

          <div className="policy-grid">
            <article className="policy-card">
              <h3>Shareholders</h3>
              <ul>
                <li>Managing our organization along with established quality objectives and defined responsibilities for their fulfilment.</li>
                <li>Establishing, applying, implementing, and continual improvement of our processes based on the requirements of ISO 9001:2015 Quality Management System, and ISO 13485:2016 Medical Devices Quality Management System.</li>
              </ul>
            </article>

            <article className="policy-card">
              <h3>Customers</h3>
              <ul>
                <li>Considering economic realities and affordability of our products to enable</li>
                <li>Consistently enhance customer satisfaction by engaging the right people, acting with integrity, being dynamic, maintaining high ethical standards, ensuring timely delivery of our products and timely after sales</li>
              </ul>
            </article>

            <article className="policy-card">
              <h3>Interested Parties</h3>
              <ul>
                <li>Satisfying the requirements of our regulators and statutory</li>
                <li>Continuous engagement with other stakeholder groups [shareholders, employees, customers] on our corporate activities in line with achieving our vision and mission.</li>
              </ul>
            </article>

            <article className="policy-card">
              <h3>Employees</h3>
              <ul>
                <li>Creating and promoting an exciting and rewarding work environment that motivates members of staff and fosters</li>
                <li>Equipping them with adequate tools and technical</li>
              </ul>
            </article>
          </div>

          <div className="policy-signoff">
            <div>
              <p>The management of Colexa is committed to ensuring continual improvement to the quality management system and will review this policy periodically for continued applicability.</p>
            </div>
            <div className="policy-signature">
              <Image src="/images/brand-story/quality-policy-signature.png" alt="Colexa Biosensor Chief Executive Officer signature and official stamp" width={162} height={77} />
              <p>Signed 14-12-2023</p>
              <strong>Chief Executive Officer</strong>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
