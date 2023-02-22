import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
export function MyApp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div style={{ overflowY: 'scroll', height: '100vh' }}>
            <Document
                file={"./s2_4.pdf"}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {[...Array(numPages)].map((_, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </div>
    );
}