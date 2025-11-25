# Power Automate Setup Guide

## JSON Payload Structure

The forms send a simple JSON payload with `formType` and all form fields at the root level:

```json
{
  "formType": "General Contact" | "Certification Application" | "Compliance Report",
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "general",
  "message": "My message here...",
  // ... all other form fields as-is
}
```

## Example Payloads

### General Contact Form
```json
{
  "formType": "General Contact",
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "general",
  "message": "I have a question about..."
}
```

### Certification Application
```json
{
  "formType": "Certification Application",
  "cert-type": "compliant-operator",
  "cert-company": "ABC Fuel Services",
  "cert-contact": "Jane Smith",
  "cert-email": "jane@abc.com",
  "cert-insurance": "XYZ Insurance - Policy #12345",
  "cert-management": "We have...",
  // ... other fields
}
```

### Compliance Report
```json
{
  "formType": "Compliance Report",
  "comp-reporter": "John Doe",
  "comp-email": "john@example.com",
  "comp-company": "XYZ Services",
  "comp-location": "Auckland",
  "comp-violation": "certification",
  "comp-details": "Details here...",
  "comp-date": "2024-01-15"
}
```

## Power Automate Flow Setup

### 1. HTTP Request Trigger
- Method: POST
- Body: JSON (automatic parsing)

### 2. Create HTML Email Body (Two Columns)

Use a "Compose" action or "Create HTML table" with this structure:

**Option A: Using Compose Action**
```
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 30%;">Field</th>
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Form Type</td>
    <td style="border: 1px solid #ddd; padding: 8px;">@{triggerBody()?['formType']}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Name</td>
    <td style="border: 1px solid #ddd; padding: 8px;">@{triggerBody()?['name']}</td>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">Email</td>
    <td style="border: 1px solid #ddd; padding: 8px;">@{triggerBody()?['email']}</td>
  </tr>
  <!-- Add more rows for each field -->
</table>
```

**Option B: Dynamic Table (Recommended)**

Use a loop to build the table dynamically:

1. **Initialize variable**: `htmlTable` = 
```
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left; width: 30%;">Field</th>
    <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
  </tr>
```

2. **Apply to each** (loop through `triggerBody()`):
   - Skip `formType` if you want it first
   - For each key-value pair, add:
   ```
   <tr>
     <td style="border: 1px solid #ddd; padding: 8px; font-weight: bold;">@{items('Apply_to_each')?['key']}</td>
     <td style="border: 1px solid #ddd; padding: 8px;">@{items('Apply_to_each')?['value']}</td>
   </tr>
   ```

3. **Append to variable**: Add closing `</table>`

### 3. Generate Subject Line

Use a "Compose" action:

```
NZIFDA Form Submission: @{triggerBody()?['formType']} - @{if(equals(triggerBody()?['formType'], 'General Contact'), concat(triggerBody()?['subject'], ' from ', triggerBody()?['name']), if(equals(triggerBody()?['formType'], 'Certification Application'), concat(triggerBody()?['cert-type'], ' - ', triggerBody()?['cert-company']), concat(triggerBody()?['comp-violation'], ' - ', triggerBody()?['comp-company']))}
```

Or simpler:
```
NZIFDA @{triggerBody()?['formType']} - @{utcNow()}
```

### 4. Send Email Action

- **To**: Your email address
- **Subject**: Use the subject from step 3
- **Body**: HTML format, use the HTML table from step 2
- **Is HTML**: Yes

### 5. Response Action

Return a simple JSON response:
```json
{
  "status": "success",
  "message": "Form submitted successfully"
}
```

## Accessing Fields in Power Automate

All form fields are at the root level of the JSON payload. Access them using:

- `triggerBody()?['formType']` - Form type
- `triggerBody()?['name']` - Name field (if exists)
- `triggerBody()?['email']` - Email field (if exists)
- `triggerBody()?['cert-company']` - Certification company (if exists)
- `triggerBody()?['comp-violation']` - Compliance violation (if exists)
- etc.

Use `?` to handle missing fields gracefully.

## Testing

1. Test the flow with a sample JSON payload
2. Check that all fields appear in the email
3. Verify the subject line is descriptive
4. Ensure the HTML table renders correctly

