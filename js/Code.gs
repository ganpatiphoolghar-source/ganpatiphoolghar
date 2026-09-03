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
const PRODUCTS_SHEET_NAME = "Products";
const CUSTOMERS_SHEET_NAME = "Customers";

// The admin password is NOT stored here — it lives in this script's
// "Script Properties" instead, so it never ends up in your public
// GitHub repo. To set it: in the Apps Script editor, click the gear
// icon (Project Settings) > Script Properties > Add script property.
// Key: ADMIN_PASSWORD   Value: choose a password.
const ADMIN_PASSWORD_KEY = "ADMIN_PASSWORD";
const IMAGES_FOLDER_NAME = "images";

function jsonOutput_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function checkAdminPassword_(password) {
  const stored =
    PropertiesService.getScriptProperties().getProperty(ADMIN_PASSWORD_KEY);
  return !!stored && !!password && stored === password;
}

function slugify_(text) {
  return (
    String(text)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "product"
  );
}

const CUSTOMER_HEADERS = [
  "Phone",
  "Name",
  "Address",
  "Pincode",
  "Total Orders",
  "Total Spent",
  "First Order Date",
  "Last Order Date",
];

const PRODUCT_HEADERS = [
  "ID",
  "Name",
  "Category",
  "Category Label",
  "Price",
  "Unit",
  "Image",
  "Icon",
  "Description",
  "In Stock",
  "Featured",
];

// Seeds the Products tab the first time it's created, so it's never
// empty. Edit rows directly in the Sheet after that — this array is
// not read again once the tab exists.
const SEED_PRODUCTS = [
  [
    "marigold-haar",
    "Marigold Garland",
    "garlands",
    "Garlands",
    120,
    "per garland (5 ft)",
    "images/marigold-garland.jpg",
    "marigold",
    "Fresh genda phool haar, hand-strung the same morning.",
    true,
    true,
  ],
  [
    "rose-haar",
    "Rose Garland",
    "garlands",
    "Garlands",
    180,
    "per garland (5 ft)",
    "images/rose-garland.jpg",
    "rose",
    "Red rose garland for the mandap or main idol.",
    true,
    false,
  ],
  [
    "mixed-haar",
    "Marigold & Rose Mix",
    "garlands",
    "Garlands",
    150,
    "per garland (5 ft)",
    "images/marigold-rose-mix-garland.jpg",
    "mala",
    "Alternating marigold and rose, strung with tulsi leaves.",
    true,
    true,
  ],
  [
    "loose-marigold",
    "Loose Marigold",
    "loose",
    "Loose Flowers",
    80,
    "per kg",
    "images/loose-marigold.jpg",
    "marigold",
    "Petals for rangoli, thali decoration, and scattering.",
    true,
    false,
  ],
  [
    "loose-rose",
    "Loose Rose Petals",
    "loose",
    "Loose Flowers",
    100,
    "per kg",
    "images/loose-rose-petals.jpg",
    "rose",
    "Deep red petals, good for rangoli and welcome trails.",
    true,
    false,
  ],
  [
    "lotus",
    "Lotus Flowers",
    "puja",
    "Puja Essentials",
    40,
    "per piece",
    "images/lotus-flowers.jpg",
    "lotus",
    "Fresh lotus for the main aarti, sold individually.",
    true,
    true,
  ],
  [
    "durva",
    "Durva Grass Bunch",
    "puja",
    "Puja Essentials",
    20,
    "per bunch (21 blades)",
    "images/durva-grass.jpg",
    "durva",
    "Durvankur bunches, an essential offering for Ganpati.",
    true,
    false,
  ],
  [
    "belpatra",
    "Bel Patra",
    "puja",
    "Puja Essentials",
    15,
    "per bundle",
    "images/bel-patra.jpg",
    "belpatra",
    "Trifoliate bel leaves for the puja thali.",
    true,
    false,
  ],
  [
    "rangoli-flowers",
    "Flower Rangoli Kit",
    "decor",
    "Decoration",
    250,
    "per kit (serves 2x2 ft)",
    "images/flower-rangoli-kit.jpg",
    "rangoli",
    "Sorted petals in five colours, ready to lay out.",
    true,
    false,
  ],
  [
    "mandap-toran",
    "Marigold Toran",
    "decor",
    "Decoration",
    90,
    "per toran (door hanging)",
    "images/marigold-toran.jpg",
    "leaf",
    "Marigold and mango-leaf toran for the entrance.",
    true,
    false,
  ],
  [
    "paper-flower-backdrop",
    "Paper Flower Mandap Backdrop",
    "handmade",
    "Handmade Decor",
    450,
    "per backdrop (4x6 ft)",
    "images/paper-flower-backdrop.jpg",
    "backdrop",
    "Handmade crepe-paper flower backdrop for the mandap wall.",
    true,
    true,
  ],
  [
    "coconut-diya-stand",
    "Coconut Shell Diya Stand",
    "handmade",
    "Handmade Decor",
    150,
    "per pair",
    "images/coconut-diya-stand.jpg",
    "diya",
    "Hand-painted coconut shell diyas, ready to light.",
    true,
    false,
  ],
  [
    "jute-paper-toran",
    "Jute & Paper Toran",
    "handmade",
    "Handmade Decor",
    120,
    "per toran (door hanging)",
    "images/jute-paper-toran.jpg",
    "jute",
    "Handwoven jute toran with paper flower accents.",
    true,
    false,
  ],
  [
    "paper-kandil-lantern",
    "Paper Kandil Lantern",
    "handmade",
    "Handmade Decor",
    90,
    "per piece",
    "images/paper-kandil-lantern.jpg",
    "lantern",
    "Folded paper kandil, hand-assembled and ready to hang.",
    true,
    true,
  ],
  [
    "thermocol-mandap-set",
    "Thermocol Mandap Decor Set",
    "handmade",
    "Handmade Decor",
    600,
    "per set (backdrop + pillars)",
    "images/thermocol-mandap-set.jpg",
    "backdrop",
    "Complete eco-friendly thermocol decor set for a home mandap.",
    true,
    false,
  ],
];

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
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOutput_({ status: "error", message: "Invalid request." });
  }

  const type = data.type || "order";
  if (type === "adminLogin") {
    return handleAdminLogin_(data);
  }
  if (type === "addProduct") {
    return handleAddProduct_(data);
  }
  if (type === "updateProduct") {
    return handleUpdateProduct_(data);
  }
  if (type === "uploadImage") {
    return handleUploadImage_(data);
  }
  return handleOrder_(data);
}

function handleOrder_(data) {
  try {
    const sheet = getOrdersSheet_();

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

    upsertCustomer_(data);

    return jsonOutput_({ status: "ok", orderId: data.orderId });
  } catch (err) {
    return jsonOutput_({ status: "error", message: err.message });
  }
}

function handleAdminLogin_(data) {
  const authorized = checkAdminPassword_(data.password);
  return jsonOutput_({ status: "ok", authorized: authorized });
}

function handleAddProduct_(data) {
  if (!checkAdminPassword_(data.password)) {
    return jsonOutput_({
      status: "error",
      message: "Incorrect admin password.",
    });
  }

  const p = data.product || {};
  const name = String(p.name || "").trim();
  const category = String(p.category || "").trim();
  const price = Number(p.price) || 0;

  if (!name || !category || price <= 0) {
    return jsonOutput_({
      status: "error",
      message: "Name, category, and a price above 0 are required.",
    });
  }

  try {
    const sheet = getProductsSheet_();
    const existingIds = sheet
      .getDataRange()
      .getValues()
      .slice(1)
      .map(function (row) {
        return String(row[0]).trim();
      });

    let id = slugify_(name);
    let uniqueId = id;
    let suffix = 2;
    while (existingIds.indexOf(uniqueId) !== -1) {
      uniqueId = id + "-" + suffix;
      suffix++;
    }

    sheet.appendRow([
      uniqueId,
      name,
      category,
      String(p.categoryLabel || category).trim(),
      price,
      String(p.unit || "").trim(),
      String(p.image || "").trim(),
      String(p.icon || "leaf").trim(),
      String(p.description || "").trim(),
      p.inStock !== false,
      !!p.featured,
    ]);

    const newRow = sheet.getLastRow();
    sheet.getRange(newRow, 10, 1, 1).insertCheckboxes();
    sheet.getRange(newRow, 11, 1, 1).insertCheckboxes();

    return jsonOutput_({ status: "ok", id: uniqueId });
  } catch (err) {
    return jsonOutput_({ status: "error", message: err.message });
  }
}

function handleUpdateProduct_(data) {
  if (!checkAdminPassword_(data.password)) {
    return jsonOutput_({
      status: "error",
      message: "Incorrect admin password.",
    });
  }

  const id = String(data.id || "").trim();
  const p = data.product || {};
  const name = String(p.name || "").trim();
  const category = String(p.category || "").trim();
  const price = Number(p.price) || 0;

  if (!id) {
    return jsonOutput_({ status: "error", message: "Missing product ID." });
  }
  if (!name || !category || price <= 0) {
    return jsonOutput_({
      status: "error",
      message: "Name, category, and a price above 0 are required.",
    });
  }

  try {
    const sheet = getProductsSheet_();
    const values = sheet.getDataRange().getValues();

    for (let i = 1; i < values.length; i++) {
      if (String(values[i][0]).trim() === id) {
        const rowNum = i + 1;
        sheet
          .getRange(rowNum, 1, 1, PRODUCT_HEADERS.length)
          .setValues([
            [
              id,
              name,
              category,
              String(p.categoryLabel || category).trim(),
              price,
              String(p.unit || "").trim(),
              String(p.image || "").trim(),
              String(p.icon || "leaf").trim(),
              String(p.description || "").trim(),
              p.inStock !== false,
              !!p.featured,
            ],
          ]);
        return jsonOutput_({ status: "ok", id: id });
      }
    }

    return jsonOutput_({
      status: "error",
      message:
        "That product couldn't be found — it may have been removed from the Sheet.",
    });
  } catch (err) {
    return jsonOutput_({ status: "error", message: err.message });
  }
}

function handleUploadImage_(data) {
  if (!checkAdminPassword_(data.password)) {
    return jsonOutput_({
      status: "error",
      message: "Incorrect admin password.",
    });
  }

  const base64 = data.data;
  const mimeType = data.mimeType || "image/jpeg";
  const filenameRaw = data.filename || "product-photo";

  if (!base64) {
    return jsonOutput_({ status: "error", message: "No image data received." });
  }

  try {
    const bytes = Utilities.base64Decode(base64);
    const baseName = slugify_(filenameRaw.replace(/\.[a-zA-Z0-9]+$/, ""));
    const uniqueName =
      Utilities.getUuid().slice(0, 8) +
      "-" +
      baseName +
      "." +
      extensionForMime_(mimeType);
    const blob = Utilities.newBlob(bytes, mimeType, uniqueName);

    const folder = getImagesFolder_();
    const file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    const url =
      "https://drive.google.com/thumbnail?id=" + file.getId() + "&sz=w1000";
    return jsonOutput_({ status: "ok", url: url, fileId: file.getId() });
  } catch (err) {
    return jsonOutput_({ status: "error", message: err.message });
  }
}

function extensionForMime_(mimeType) {
  const map = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
  };
  return map[mimeType] || "jpg";
}

// Finds (or creates) an "images" folder in Google Drive, right next to
// the spreadsheet this script is bound to, so uploaded product photos
// stay organised alongside your orders/products data.
// TEMPORARY — run this once from the editor (function dropdown at the
// top > select debugImagesFolder_ > Run), then check View > Logs (or
// the "Execution log" panel) for a clickable Drive folder link. Safe
// to delete this function afterward, it doesn't affect the site.
// TEMPORARY — this one has no trailing underscore so it actually shows
// up in the Run dropdown (Apps Script hides functions ending in "_").
// Select "runDebugImagesFolder" from the dropdown, click Run, then
// check Executions (left sidebar) for the logged folder link.
function runDebugImagesFolder() {
  debugImagesFolder_();
}

function debugImagesFolder_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Spreadsheet name: " + ss.getName());
  Logger.log("Spreadsheet URL: " + ss.getUrl());

  const folder = getImagesFolder_();
  Logger.log("Images folder name: " + folder.getName());
  Logger.log("Images folder URL: " + folder.getUrl());
}

function getImagesFolder_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ssFile = DriveApp.getFileById(ss.getId());
  const parents = ssFile.getParents();
  const parentFolder = parents.hasNext()
    ? parents.next()
    : DriveApp.getRootFolder();

  const existing = parentFolder.getFoldersByName(IMAGES_FOLDER_NAME);
  if (existing.hasNext()) return existing.next();
  return parentFolder.createFolder(IMAGES_FOLDER_NAME);
}

// Adds a new row in the Customers tab the first time we see a phone
// number, or updates their name/address/pincode and order totals if
// we've seen them before. Keyed on phone number since there's no login.
function upsertCustomer_(data) {
  const sheet = getCustomersSheet_();
  const phone = String(data.phone || "").trim();
  if (!phone) return;

  const values = sheet.getDataRange().getValues();
  const now = new Date();
  const total = Number(data.total) || 0;

  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]).trim() === phone) {
      const rowNum = i + 1;
      const prevOrders = Number(values[i][4]) || 0;
      const prevSpent = Number(values[i][5]) || 0;
      sheet
        .getRange(rowNum, 1, 1, CUSTOMER_HEADERS.length)
        .setValues([
          [
            phone,
            data.customerName || values[i][1],
            data.address || values[i][2],
            data.pincode || values[i][3],
            prevOrders + 1,
            prevSpent + total,
            values[i][6],
            now,
          ],
        ]);
      return;
    }
  }

  // Not found — add a new customer row.
  sheet.appendRow([
    phone,
    data.customerName || "",
    data.address || "",
    data.pincode || "",
    1,
    total,
    now,
    now,
  ]);
}

// GET requests. Add ?action=products to fetch the product catalog as
// JSON, or ?action=customer&phone=NNNNNNNNNN to look up a returning
// customer's saved details (used to auto-fill the checkout form).
// With no action, it just confirms the endpoint is alive.
function doGet(e) {
  const action = e && e.parameter && e.parameter.action;
  if (action === "products") {
    return getProductsJson_();
  }
  if (action === "customer") {
    return getCustomerJson_(e.parameter.phone);
  }
  return ContentService.createTextOutput(
    "Bappa Phool Bazaar order endpoint is running.",
  ).setMimeType(ContentService.MimeType.TEXT);
}

function getCustomerJson_(phone) {
  const cleanPhone = String(phone || "").trim();
  let result = { status: "ok", customer: null };
  try {
    if (cleanPhone) {
      const sheet = getCustomersSheet_();
      const values = sheet.getDataRange().getValues();
      for (let i = 1; i < values.length; i++) {
        if (String(values[i][0]).trim() === cleanPhone) {
          result.customer = {
            name: values[i][1] || "",
            address: values[i][2] || "",
            pincode: values[i][3] || "",
            totalOrders: values[i][4] || 0,
          };
          break;
        }
      }
    }
  } catch (err) {
    result = { status: "error", message: err.message, customer: null };
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function getCustomersSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CUSTOMERS_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CUSTOMERS_SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CUSTOMER_HEADERS);
    sheet.getRange(1, 1, 1, CUSTOMER_HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getProductsJson_() {
  try {
    const sheet = getProductsSheet_();
    const values = sheet.getDataRange().getValues();
    const headers = values.shift();

    const products = values
      .filter(function (row) {
        return String(row[0]).trim() !== "";
      })
      .map(function (row) {
        const obj = {};
        headers.forEach(function (h, i) {
          obj[h] = row[i];
        });
        return {
          id: String(obj["ID"] || "").trim(),
          name: String(obj["Name"] || "").trim(),
          category: String(obj["Category"] || "").trim(),
          categoryLabel: String(obj["Category Label"] || "").trim(),
          price: Number(obj["Price"]) || 0,
          unit: String(obj["Unit"] || "").trim(),
          image: String(obj["Image"] || "").trim(),
          icon: String(obj["Icon"] || "leaf").trim(),
          description: String(obj["Description"] || "").trim(),
          inStock:
            obj["In Stock"] === true ||
            String(obj["In Stock"]).toUpperCase() === "TRUE",
          featured:
            obj["Featured"] === true ||
            String(obj["Featured"]).toUpperCase() === "TRUE",
        };
      });

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok", products: products }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message, products: [] }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getProductsSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(PRODUCTS_SHEET_NAME);
  const isNew = !sheet;
  if (isNew) {
    sheet = ss.insertSheet(PRODUCTS_SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(PRODUCT_HEADERS);
    sheet.getRange(1, 1, 1, PRODUCT_HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
    SEED_PRODUCTS.forEach(function (row) {
      sheet.appendRow(row);
    });
    // "In Stock" is column 10, "Featured" is column 11 — turn them into
    // tickable checkboxes for the next 200 rows so new products are easy
    // to add without typing TRUE/FALSE by hand.
    sheet.getRange(2, 10, 200, 1).insertCheckboxes();
    sheet.getRange(2, 11, 200, 1).insertCheckboxes();
  }
  return sheet;
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
