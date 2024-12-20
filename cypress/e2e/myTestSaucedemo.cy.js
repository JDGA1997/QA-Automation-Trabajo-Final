describe('SauceDemo - Pruebas de Compra', () => {
  const url = 'https://www.saucedemo.com/';
  const standardUser = { username: 'standard_user', password: 'secret_sauce' };
  const problemUser = { username: 'problem_user', password: 'secret_sauce' };
  const userCheckout = { firstName: 'Juan', lastName: 'Antoniazzi', postalCode: '12345' };

  beforeEach(() => {
    cy.visit(url);
  });

  const login = (user) => {
    cy.get('[data-test="username"]').type(user.username);
    cy.get('[data-test="password"]').type(user.password);
    cy.get('[data-test="login-button"]').click();
  };

  const addProductsToCart = () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  };

/**
 * Realiza el proceso de checkout en la aplicación.
 *
 * @param {Object} userCheckout - Objeto que contiene la información del usuario para el checkout.
 * @param {string} userCheckout.firstName - Nombre del usuario.
 * @param {string} userCheckout.lastName - Apellido del usuario.
 * @param {string} userCheckout.postalCode - Código postal del usuario.
 */
  const checkout = (userCheckout) => {
    cy.get('[data-test="firstName"]').type(userCheckout.firstName);
    cy.get('[data-test="lastName"]').type(userCheckout.lastName);
    cy.get('[data-test="postalCode"]').type(userCheckout.postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
  };

  const logout = () => {
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
  };

  it('Compra con standard_user', () => {
    login(standardUser);
    addProductsToCart();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    checkout(userCheckout);
    cy.get("h2").contains("Thank you for your order!").should("be.visible");
    logout();
  });

  it('Compra con problem_user', () => {
    login(problemUser);
    addProductsToCart();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="checkout"]').click();
    checkout(userCheckout);
    cy.get("h2").contains("Thank you for your order!").should("be.visible");
    logout();
  });
});
