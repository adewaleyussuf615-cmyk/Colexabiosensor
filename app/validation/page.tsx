'use client';

import Link from 'next/link';
import { useState } from 'react';

const reports = [
  {
    institution: 'University College Hospital (UCH), Ibadan',
    description: 'Department of Chemical Pathology validation of the OnPoint GH82 system.',
    file: 'UCH-Validation.pdf',
  },
  {
    institution: 'National Hospital, Abuja',
    description: 'Department of Chemical Pathology laboratory report for the OnPoint GH82 system.',
    file: 'validation.pdf',
  },
  {
    institution: 'Medical Laboratory Science Council of Nigeria (MLSCN)',
    description: 'Public Health In-Vitro Diagnostics Control Laboratory, IVD/23/04 test report.',
    file: 'MLSCN_Validation.pdf',
  },
];

export default function ValidationPage() {
  const [selectedReport, setSelectedReport] = useState<(typeof reports)[number] | null>(null);

  return (
    <main className="validation-page">
      <div className="container">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span className="crumb-current">Validation Reports</span>
        </nav>

        <header className="validation-header">
          <p className="eyebrow">Quality you can verify</p>
          <h1>Validation Reports</h1>
          <p>These are independent validation reports conducted by accredited institutions confirming the precision and accuracy of the OnPoint GH82 Blood Glucose Monitoring System.</p>
        </header>

        <section className="validation-list" aria-label="OnPoint GH82 validation reports">
          {reports.map((report, index) => (
            <article className="validation-card" key={report.file}>
              <div className="validation-number">0{index + 1}</div>
              <div className="validation-card-copy">
                <h2>{report.institution}</h2>
                <p>{report.description}</p>
              </div>
              <div className="validation-card-actions">
                <button type="button" className="primary-btn" onClick={() => setSelectedReport(report)}>Preview</button>
                <a className="secondary-btn" href={`/docs/validation/${report.file}`} download={report.file}>Download PDF</a>
              </div>
            </article>
          ))}
        </section>
      </div>

      {selectedReport ? (
        <div className="validation-modal" role="dialog" aria-modal="true" aria-labelledby="validation-preview-title">
          <div className="validation-modal-backdrop" onClick={() => setSelectedReport(null)} />
          <div className="validation-viewer">
            <div className="validation-viewer-header">
              <div>
                <p className="eyebrow">Report preview</p>
                <h2 id="validation-preview-title">{selectedReport.institution}</h2>
              </div>
              <button type="button" className="viewer-close" onClick={() => setSelectedReport(null)} aria-label="Close report preview">Close</button>
            </div>
            <iframe title={`${selectedReport.institution} validation report`} src={`/docs/validation/${selectedReport.file}`} />
            <div className="validation-viewer-footer">
              <span>Previewing {selectedReport.file}</span>
              <a className="primary-btn" href={`/docs/validation/${selectedReport.file}`} target="_blank" rel="noreferrer">Download</a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}