import React from 'react';
import {
  CvView,
  DossierPage,
  ToolbarContainer,
  ToolbarGlass,
  ToolbarBadge,
  BadgeDot,
  ToolbarActions,
  ActionLabel,
  CvActionLink,
  CvActionButton,
  CvDocument,
  CvPageCard,
  CvPageImg,
  CvHotspotsLayer,
  CvHotspotLink
} from '../styles/cv.styles';

export default function CvSection(): React.JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <CvView id="view-cv" aria-label="Curriculum Vitae / Dossier">
      <DossierPage>

        {/* Floating Action Toolbar */}
        <ToolbarContainer className="no-print">
          <ToolbarGlass>
            <ToolbarBadge>
              <BadgeDot />
              <span>CURRICULUM VITAE // OFFICIAL DOSSIER</span>
            </ToolbarBadge>

            <ToolbarActions>
              {/* Open in New Tab */}
              <CvActionLink
                href="/Farjana_Akter_Laila_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-open-pdf"
                title="Open Full PDF in New Tab"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <ActionLabel>
                  <span className="full-text">Open in Tab</span>
                  <span className="short-text">Open</span>
                </ActionLabel>
              </CvActionLink>

              {/* Download PDF */}
              <CvActionLink
                href="/Farjana_Akter_Laila_CV.pdf"
                download="Farjana_Akter_Laila_CV.pdf"
                id="btn-download-pdf"
                $primary
                title="Download Official PDF"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <ActionLabel>
                  <span className="full-text">Download PDF</span>
                  <span className="short-text">Download</span>
                </ActionLabel>
              </CvActionLink>

              {/* Print Button */}
              <CvActionButton
                type="button"
                onClick={handlePrint}
                id="btn-print-cv"
                title="Print / Save as PDF"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                <ActionLabel>
                  <span className="full-text">Print CV</span>
                  <span className="short-text">Print</span>
                </ActionLabel>
              </CvActionButton>
            </ToolbarActions>
          </ToolbarGlass>
        </ToolbarContainer>

        {/* Authentically Formatted 3-Page White Mode Resume Document */}
        <CvDocument id="cv-print-area">

          {/* PAGE 1 */}
          <CvPageCard id="cv-page-1">
            <CvPageImg src="/cv_page_1.png" alt="Farjana Akter Laila CV Page 1" loading="eager" />
            <CvHotspotsLayer aria-label="Interactive links">
              <CvHotspotLink href="mailto:farjanaakter7275@gmail.com" target="_blank" rel="noopener noreferrer" style={{ left: '43.78%', top: '11.8%', width: '23.62%', height: '1.93%' }} title="mailto:farjanaakter7275@gmail.com" />
              <CvHotspotLink href="https://portfolio-farjana.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ left: '33.14%', top: '13.73%', width: '7.5%', height: '1.93%' }} title="Portfolio" />
              <CvHotspotLink href="https://github.com/FarjanaAkterLaila" target="_blank" rel="noopener noreferrer" style={{ left: '41.49%', top: '13.73%', width: '6.15%', height: '1.93%' }} title="https://github.com/FarjanaAkterLaila" />
              <CvHotspotLink href="https://www.linkedin.com/in/farjana-akter-laila-a92674278/" target="_blank" rel="noopener noreferrer" style={{ left: '48.49%', top: '13.73%', width: '7.6%', height: '1.93%' }} title="https://www.linkedin.com/in/farjana-akter-laila-a92674278/" />
              <CvHotspotLink href="https://codeforces.com/profile/L26" target="_blank" rel="noopener noreferrer" style={{ left: '56.95%', top: '13.73%', width: '10.27%', height: '1.93%' }} title="https://codeforces.com/profile/L26" />
              <CvHotspotLink href="https://uhunt.onlinejudge.org/id/1191728" target="_blank" rel="noopener noreferrer" style={{ left: '67.68%', top: '13.73%', width: '4.5%', height: '1.93%' }} title="https://uhunt.onlinejudge.org/id/1191728" />
            </CvHotspotsLayer>
          </CvPageCard>

          {/* PAGE 2 */}
          <CvPageCard id="cv-page-2">
            <CvPageImg src="/cv_page_2.png" alt="Farjana Akter Laila CV Page 2" loading="eager" />
            <CvHotspotsLayer aria-label="Interactive links">
              <CvHotspotLink href="https://xiia.dk/" target="_blank" rel="noopener noreferrer" style={{ left: '5.62%', top: '9.43%', width: '4.05%', height: '1.63%' }} title="https://xiia.dk/" />
              <CvHotspotLink href="https://xiia.dk/" target="_blank" rel="noopener noreferrer" style={{ left: '5.62%', top: '29.12%', width: '4.05%', height: '1.63%' }} title="https://xiia.dk/" />
              <CvHotspotLink href="https://onlinelibrary.wiley.com/doi/10.1155/acis/8761185" target="_blank" rel="noopener noreferrer" style={{ left: '22.35%', top: '80.09%', width: '42.34%', height: '3.4%' }} title="https://onlinelibrary.wiley.com/doi/10.1155/acis/8761185" />
            </CvHotspotsLayer>
          </CvPageCard>

          {/* PAGE 3 */}
          <CvPageCard id="cv-page-3">
            <CvPageImg src="/cv_page_3.png" alt="Farjana Akter Laila CV Page 3" loading="eager" />
            <CvHotspotsLayer aria-label="Interactive links">
              <CvHotspotLink href="https://drive.google.com/file/d/1jgG2vyUzDTdD3PrTRXY6jkuhOe4cFEoL/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ left: '36.65%', top: '14.13%', width: '3.83%', height: '1.63%' }} title="Drive Certificate Link 1" />
              <CvHotspotLink href="https://drive.google.com/file/d/1eqPYb1cdtFW3nh0KmHuzU-EV_mfqfbp7/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ left: '41.04%', top: '25.53%', width: '3.83%', height: '1.63%' }} title="Drive Certificate Link 2" />
            </CvHotspotsLayer>
          </CvPageCard>

        </CvDocument>
      </DossierPage>
    </CvView>
  );
}
