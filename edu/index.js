// function test() {
//     let textToSpeak = "șapte sute și șaptesprezece";
//
//     let speakData = new SpeechSynthesisUtterance();
//     speakData.volume = 1; // From 0 to 1
//     speakData.rate = 0.6; // From 0.1 to 10
//     speakData.pitch = 1; // From 0 to 2
//     speakData.text = textToSpeak;
//     speakData.lang = 'ro';
//     speakData.voice = speechSynthesis.getVoices()[12]; // Default will be taken
//
//     speechSynthesis.speak(speakData);
// }
//
// document.addEventListener('click', function () {
//     // test();
// })

    // Replace 'your-pdf-file.pdf' with the path to your PDF file
    const pdfUrl = 'file:///Users/yousefabuanzeh/Desktop/university/I_W_LRS_A1_A2%20(3)%20(1).pdf';

    // PDF.js code to load and extract text

function loadPdfText() {
    const pdfContainer = document.getElementById('pdf-text-container');

    // Loading document
    window.pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
        // Loop through each page
        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            // Get the text content for each page
            pdf.getPage(pageNum).then((page) => {
                page.getTextContent().then((textContent) => {
                    // Extracted text for the current page
                    const pageText = textContent.items.map((text) => text.str).join(' ');

                    // Display the text in the container
                    const pageContainer = document.createElement('div');
                    pageContainer.textContent = pageText;
                    pdfContainer.appendChild(pageContainer);
                });
            });
        }
    });
}

    // Call the function to load PDF text
    loadPdfText();
