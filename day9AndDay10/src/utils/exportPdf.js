import JsPDF from 'jspdf';
export const generatePDF = (id) => {
    const report = new JsPDF('portrait','pt','a4');
    report.html(document.querySelector(id)).then(() => {
        report.save('report.pdf');
    });
}