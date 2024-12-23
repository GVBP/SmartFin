// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
import { addClerkCommands } from "@clerk/testing/cypress";

Cypress.on("uncaught:exception", (err) => {
  // Ignorar erros relacionados ao redirecionamento do Next.js
  if (err.message.includes("NEXT_REDIRECT")) {
    return false; // Evita que o teste falhe
  }

  // Permite que outros erros continuem falhando
  return true;
});

addClerkCommands({ Cypress, cy });

export {};
