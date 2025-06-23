# 🧪 Related Best Seller Products – Playwright QA Automation

## 📘 Project Overview

This project automates test cases for the **Related Best Seller Products** section on an e-commerce product page (e.g., eBay).  
It verifies product matching logic by **category**, **title**, **price range**, **badge display**, and **click navigation** using **Playwright**.  
It follows the **Page Object Model (POM)** design pattern to structure test logic, enhance reusability, and maintain a scalable, modular test framework.

---

## 📂 Project Structure

```
tests/
├── common/
│   ├── commonfunction.mjs          # Reusable utility for navigation
│   └── test.spec.mjs               # Base test runner for all scenarios
│
├── Testcases/
│   ├── verifyThatExcludeBasedOnUnmatchedCategory.mjs
│   ├── verifyThatMatchBasedOnTwoWordsInTitle.mjs
│   └── verifyThatShowValidRelatedProducts.mjs
│
└── config.mjs                      # Base URL and environment configuration
```

### 🔹 Descriptions

- **commonfunction.mjs**  
  Contains the `product` function – a reusable method that navigates to the base product URL defined in the config file.

- **test.spec.mjs**  
  Acts as the test runner where individual test cases can be imported and executed.

- **Testcases Folder**  
  Contains modular test scripts for specific features and logic:
  - `verifyThatExcludeBasedOnUnmatchedCategory.mjs`: Validates exclusion of unrelated category products.
  - `verifyThatMatchBasedOnTwoWordsInTitle.mjs`: Verifies matching based on two shared title words.
  - `verifyThatShowValidRelatedProducts.mjs`: Confirms valid related products by price, category, and best seller badge.

- **config.mjs**  
  Holds test configuration like base URL and environment setup.

---

## ⚙️ Setup Instructions

### 🔁 Clone the Repository

```bash
git clone https://github.com/pasinduvim12/qa-playwright-automation-test.git
cd related-products-playwright
```

### 📦 Install Dependencies

```bash
npm install
```

### 🌐 Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Run the Tests

```bash
npx playwright test --headed
```

> 💡 You can comment/uncomment specific test cases inside `test.spec.mjs` to run them individually.

---

## ✅ Key Test Scenarios Covered

- **verifyThatExcludeBasedOnUnmatchedCategory.mjs**  
  Ensures unrelated category products are not shown as related items.

- **verifyThatMatchBasedOnTwoWordsInTitle.mjs**  
  Validates that products with at least two matching title words are shown as related.

- **verifyThatShowValidRelatedProducts.mjs**  
  Confirms that related products are valid based on:
  - Category match
 

---


