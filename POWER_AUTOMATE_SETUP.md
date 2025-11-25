# Power Automate Integration - Complete Setup Guide

## ✅ Website Implementation (Already Complete)

The website sends a simple JSON POST with `formType` + all form fields at root level:

```javascript
const payload = {
    formType: "Certification Application",
    ...formData  // All form fields spread directly
};
```

**Example JSON sent:**
```json
{
  "formType": "Certification Application",
  "cert-company": "ABC Fuel Services",
  "cert-contact": "John Doe",
  "cert-email": "john@example.com",
  "cert-insurance": "XYZ Policy 123",
  "message": "Example notes here",
  "extra-field-1": "anything",
  "extra-field-2": "anything else"
}
```

**HTTP Request:**
- Method: `POST`
- Content-Type: `application/json`
- Body: Any JSON object (all fields at root level)

---

## Power Automate Flow Setup

### 1. HTTP Request Trigger

**Schema (Maximum Flexibility):**
```json
{
  "type": "object",
  "additionalProperties": true
}
```

This allows **all fields**, including future ones, without needing to maintain a schema.

---

### 2. Initialize HTML Container Variable

**Variable Name:** `html`

**Value:**
```html
<h2>NZIFDA Form Submission</h2>
<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;">
  <tr style="background-color:#f0f0f0;">
    <th style="border:1px solid #ddd;padding:8px;text-align:left;width:30%;">Field</th>
    <th style="border:1px solid #ddd;padding:8px;text-align:left;">Value</th>
  </tr>
```

---

### 3. Extract All Keys

**Action:** Compose

**Expression:**
```
@keys(triggerBody())
```

This gets all field names from the JSON payload.

---

### 4. Loop Through Each Field

**Action:** Apply to each (keys from step 3)

**Inside the loop - Append to variable `html`:**

```html
<tr>
  <td style="border:1px solid #ddd;padding:8px;font-weight:bold;">
    @{items('Apply_to_each')}
  </td>
  <td style="border:1px solid #ddd;padding:8px;">
    @{coalesce(triggerBody()?[items('Apply_to_each')],'')}
  </td>
</tr>
```

This creates a row for each field with:
- **Field name** in the first column (bold)
- **Field value** in the second column

---

### 5. Close the Table

**Action:** Append to variable `html`

**Value:**
```html
</table>
```

---

### 6. Send Email

**Action:** Send an Email (V2)

**Settings:**
- **To:** Your NZIFDA inbox email
- **Subject:** 
  ```
  NZIFDA submission - @{utcNow()}
  ```
- **Body:** 
  ```
  @{variables('html')}
  ```
- **Is HTML:** Yes ✅

**Important:** The body should contain ONLY `@{variables('html')}` - no other content, no `<p>` tags, no extra formatting. This inserts the dynamically generated table.

---

### 7. Response (Optional but Recommended)

**Action:** Response

**Body:**
```json
{
  "status": "success",
  "received": true
}
```

---

## Final Behavior

✅ Any form on the website  
✅ Any field names  
✅ Any number of fields  
✅ Automatically appear in email as a clean 2-column table  
✅ Zero maintenance when forms change  

The flow dynamically builds a table from whatever fields are sent, exactly like the Eek Dispatch System emails.

---

## Testing

1. Submit a test form from the website
2. Check your email - you should see a clean 2-column table with all fields
3. Verify the subject line includes the timestamp
4. Test with different forms to ensure all field types work

---

## Troubleshooting

**If fields are missing:**
- Check that the HTTP trigger schema allows `additionalProperties: true`
- Verify the loop is iterating through all keys

**If table doesn't render:**
- Ensure "Is HTML" is checked in the email action
- Verify the HTML variable contains the complete table structure

**If response fails:**
- Check the Power Automate endpoint URL is correct
- Verify CORS is enabled if testing from localhost
- Check browser console for fetch errors
