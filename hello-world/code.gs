/**
 * Runs when the add-on is installed.
 * This is required for Docs Add-ons.
 */
function onInstall(e) {
  onOpen(e);
}

/**
 * Runs when the document is opened, adding a custom menu item.
 */
function onOpen(e) {
  DocumentApp.getUi()
    .createAddonMenu()
    .addItem("Write Hello World", "writeHelloWorld")
    .addToUi();
}

/**
 * Appends "Hello World!" to the end of the document.
 */
function writeHelloWorld() {
  const doc = DocumentApp.getActiveDocument();
  doc.getBody().appendParagraph("Hello World!");
}
