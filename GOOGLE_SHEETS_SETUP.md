# Google Sheets Contact Form Setup

1. Create a Google Sheet and add this header row in the first sheet:

```text
Timestamp | First Name | Email | Phone Number | Jewelry Type | Budget Range | Vision | Source Page
```

2. In the sheet, open `Extensions` -> `Apps Script`.

3. Replace the default script with this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = JSON.parse(e.postData.contents || '{}');

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.firstName || '',
    data.email || '',
    data.phoneNumber || '',
    data.jewelryType || '',
    data.budgetRange || '',
    data.vision || '',
    data.sourcePage || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click `Deploy` -> `New deployment`.

5. Choose `Web app` and use these settings:

- Execute as: `Me`
- Who has access: `Anyone`

6. Deploy it, then copy the `Web app URL`.

7. Open [js/data.js](/home/rohan/jewellery-store/js/data.js) and replace:

```javascript
CONTACT_FORM_ENDPOINT: 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
```

with your real web app URL.

8. Reload the site and test the contact form. Each submission should create a new row in the sheet.

If you redeploy a new Apps Script version later, update the URL in [js/data.js](/home/rohan/jewellery-store/js/data.js) again.
