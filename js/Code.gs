/**
 * Bappa Phool Bazaar — order receiver
 *
 * Appends every order submitted from the website as a new row in the
 * "Orders" sheet of the spreadsheet this script is bound to.
 *
 * SETUP: see README.md in the project folder for full step-by-step
 * instructions. Summary:
 *   1. Create a Google Sheet, rename the first tab to "Orders".
 *   2. Extensions > Apps Script, delete the placeholder code, paste this file.
 *   3. Deploy > New deployment > Web app.
 *        Execute as: Me
 *        Who has access: Anyone
 *   4. Copy the Web app URL into js/config.js as ordersEndpoint.
 */

const SHEET_NAME = "Orders";

const HEADERS = [
  "Order ID",
  "Order Date",
  "Customer Name",
  "Phone",
  "Address",
  "Pincode",
  "Preferred Delivery Date",
  "Items",
  "Subtotal",
  "Delivery Charge",
  "Total",
  "Payment Method",
  "Notes",
];

function doPost(e) {
  try {
    const sheet = getOrdersSheet_();
    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.orderId || "",
      data.orderDate ? new Date(data.orderDate) : new Date(),
      data.customerName || "",
      data.phone || "",
      data.address || "",
      data.pincode || "",
      data.deliveryDate || "",
      data.itemsSummary || "",
      data.subtotal || 0,
      data.deliveryCharge || 0,
      data.total || 0,
      data.paymentMethod || "Cash on Delivery",
      data.notes || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok", orderId: data.orderId }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Lets you open the Web App URL directly in a browser to confirm it's alive.
function doGet(e) {
  return ContentService.createTextOutput(
    "Bappa Phool Bazaar order endpoint is running.",
  ).setMimeType(ContentService.MimeType.TEXT);
}

function getOrdersSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}
