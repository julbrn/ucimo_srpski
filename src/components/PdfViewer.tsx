import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface Props {
    pdfPath: string;
    numPages: number;
    onLoad: ({ numPages }: { numPages: number }) => void;
}

const PdfViewer: React.FC<Props> = ({ pdfPath, onLoad, numPages }) => {
    return (
        <div
            className="flex-[7] overflow-y-scroll border-r border-gray-300 h-screen px-4"
        >
            <Document file={pdfPath} onLoadSuccess={onLoad} loading={<div className="text-center">Загрузка страницы...</div>}>
                {Array.from({ length: numPages }, (_, index) => (
                    <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        renderMode="canvas"
                        loading={<div className="text-center">Загрузка страницы...</div>}
                        error={<div className="text-red-600">Не удалось загрузить страницу</div>}
                        width={500}
                        className="my-4"
                        id={`page_${index + 1}`}
                    />
                ))}
            </Document>
        </div>
    );
};

export default PdfViewer;
