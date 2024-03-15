# Syntax Validator for Pet Input

This code provides a simple JavaScript function to validate the syntax of a pet input. It checks if the input follows a specific pattern and updates the result accordingly on an HTML page.

## Functionality
The `validateSyntax()` function retrieves the value of an input field with the id `petInput`. It then applies a regular expression pattern to validate if the input matches the expected syntax. The pattern expects the input to start with "pet_" followed by alphanumeric characters.

If the input matches the pattern, it displays "Valid Syntax" with a green indicator. Otherwise, it displays "Invalid Syntax" with a red indicator.

## Usage
1. Include this JavaScript code in your HTML file or link it as an external script.
2. Ensure you have an input field with the id `petInput` where users can input the pet identifier.
3. Provide an empty element with the id `result` where the validation result will be displayed.

```html
<input type="text" id="petInput" />
<div id="result"></div>
