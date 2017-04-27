import { Basket } from "./Basket";

describe("Basket facts", function () {

  describe("constructor", function () {
    it("will return an empty basket with 0 total", function () {
      const basket = new Basket();

      expect(basket.getState()).toEqual({ items: {}, total: 0.00 })

    });
  });

  describe("add method", function () {
    it("will return a basket containing one apple with a total price of 25p", function () {
      const basket = new Basket();

      basket.add("Apple");

      expect(basket.getState()).toEqual({ items: { "Apple": { quantity: 1, unitPrice: 0.25 } }, total: 0.25 })

    });

    it("will return a basket containing two apple with a total price of 50p", function () {
      const basket = new Basket();

      basket.add("Apple");
      basket.add("Apple");

      expect(basket.getState()).toEqual({ items: { "Apple": { quantity: 2, unitPrice: 0.25 } }, total: 0.50 })

    });

    it("will return a basket containing ten apple with a total price of £2.5", function () {
      const basket = new Basket();

      for (var index = 0; index < 10; index++) {
        basket.add("Apple");
      }

      expect(basket.getState()).toEqual({ items: { "Apple": { quantity: 10, unitPrice: 0.25 } }, total: 2.5 })

    });

    it("will return a basket containing one apple & one Orange with a total price of 55p", function () {
      const basket = new Basket();

      basket.add("Apple");
      basket.add("Orange");

      expect(basket.getState()).toEqual({
        items: {
          "Apple": {
            quantity: 1,
            unitPrice: 0.25
          },
          "Orange": {
            quantity: 1,
            unitPrice: 0.3
          },
        }, total: 0.55
      })

    });

    it("will return a basket containing an Apple, Orange, Garlic and a Papayas with a total price of £1.20", function () {
      const basket = new Basket();

      basket.add("Apple");
      basket.add("Orange");
      basket.add("Garlic");
      basket.add("Papayas");

      expect(basket.getState()).toEqual({
        items: {
          "Apple": {
            quantity: 1,
            unitPrice: 0.25
          },
          "Orange": {
            quantity: 1,
            unitPrice: 0.3
          },
          "Garlic": {
            quantity: 1,
            unitPrice: 0.15
          },
          "Papayas": {
            quantity: 1,
            unitPrice: 0.5,
            discount: { applicableQuantity: 3, percentage: 1 }
          },
        }, total: 1.2
      })

    });

    it("will return a basket containing a Papayas with a total price of £0.50", function () {
      const basket = new Basket();

      basket.add("Papayas");

      expect(basket.getState()).toEqual({
        items: {
          "Papayas": {
            quantity: 1,
            unitPrice: 0.5,
            discount: { applicableQuantity: 3, percentage: 1 }
          },
        }, total: 0.5
      })

    });

    it("will return a basket containing two Papayas with a total price of £0.50", function () {
      const basket = new Basket();

      basket.add("Papayas");
      basket.add("Papayas");

      expect(basket.getState()).toEqual({
        items: {
          "Papayas": {
            quantity: 2,
            unitPrice: 0.5,
            discount: { applicableQuantity: 3, percentage: 1 }
          },
        }, total: 1
      });

    });

    it("will return a basket containing three Papayas with a discount & total price of £1", function () {
      const basket = new Basket();

      basket.add("Papayas");
      basket.add("Papayas");
      basket.add("Papayas");

      expect(basket.getState()).toEqual({
        items: {
          "Papayas": {
            quantity: 3,
            unitPrice: 0.5,
            discount: { applicableQuantity: 3, percentage: 1 }
          },
        }, total: 1
      });

    });


    it("will return a basket containing four Papayas with a discount & total price of £1", function () {
      const basket = new Basket();

      basket.add("Papayas");
      basket.add("Papayas");
      basket.add("Papayas");
      basket.add("Papayas");

      expect(basket.getState()).toEqual({
        items: {
          "Papayas": {
            quantity: 4,
            unitPrice: 0.5,
            discount: { applicableQuantity: 3, percentage: 1 }
          },
        }, total: 1.5
      });

    });
  });

});