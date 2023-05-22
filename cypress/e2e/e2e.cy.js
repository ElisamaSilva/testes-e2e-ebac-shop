/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/3/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      // Escolhe os produtos
      cy.get('.post-3745 > .product-block').contains ('Celeste Sports Bra').click()
      cy.get('.button-variable-item-S').click()
      cy.get('.button-variable-item-Red').click()

      // Adiciona ao carrinho
      cy.get('.input-text').clear().type(4)
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message > .button').click()
      cy.get('.checkout-button').click()

      // Preenche as opções no checkout
      cy.get('.showlogin').click()
      cy.get('#username').type ('aluno_ebac@teste.com')
      cy.get('#password').type ('teste@teste.com')
      cy.get('.woocommerce-button').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()


      // Valida a compra
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');


  });


})

