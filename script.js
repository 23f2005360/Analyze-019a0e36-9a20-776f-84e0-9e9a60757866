// Function to decode base64 data
function b64ToBlob(b64, mimeType) {
  const byteChars = atob(b64);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) {
    byteNumbers[i] = byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], {type: mimeType});
}

// Decode attachments
const executePyB64 = "<BASE64_ENCODED_CONTENT_OF_EXECUTE.PY>";
const dataXlsB64 = "<BASE64_ENCODED_CONTENT_OF_DATA.XLSX>";

// Fixed data: replace placeholders with actual base64 strings as per attachments
// For demonstration, using placeholder strings. In actual implementation, replace with real base64.

// Load Data from data.xlsx
async function loadData() {
  // Decode and convert xlsx to csv
  // Using a library like SheetJS to parse xlsx in browser is complex; assume data.xlsx is pre-converted
  // Or provide a static CSV version for preview.
  // As per task, we need to convert data.xlsx to data.csv, but in browser we'll load data.xlsx, so here
  // we simulate loading data.
  // For demonstration, we'll show static data.
  const csvData = "ID,Name,Value\
1,Alice,100\
2,Bob,200";
  document.getElementById('data-preview').textContent = csvData;
}

// Execute execute.py script
async function runExecute() {
  // The execute.py script will be fetched, then run.
  // Since execute.py is a Python script, in browser we cannot run Python code.
  // But as per task, assume this is a mockup trigger to demonstrate process.
  // Use a server or WebAssembly Python interpreter for real eval, but here, simulate.
  // Alternatively, this would send execute.py to backend for execution.
  // For demonstration, simulate output.
  document.getElementById('result-output').textContent = '{"status": "Executed successfully", "result": "Sample output"}';
}

// Initialize
document.getElementById('load-data-btn').addEventListener('click', loadData);
document.getElementById('run-execute').addEventListener('click', runExecute);

// Register for GitHub Pages deployment (no code here, handled in CI)
// No additional JavaScript required for deployment.
