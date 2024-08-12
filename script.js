function generatePDF() {
    const { jsPDF } = window.jspdf;

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;

    // Create a new PDF document
    const doc = new jsPDF();

    // Add content to the PDF
    doc.setFontSize(20);
    doc.text('Resume', 14, 20);

    doc.setFontSize(14);
    doc.text(`Name: ${name}`, 14, 40);
    doc.text(`Email: ${email}`, 14, 50);
    doc.text(`Phone: ${phone}`, 14, 60);

    doc.setFontSize(12);
    doc.text('Experience:', 14, 80);
    doc.text(experience, 14, 90);

    doc.text('Education:', 14, 110);
    doc.text(education, 14, 130);

    // Save the PDF
    doc.save('resume.pdf');
}
