describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = "100";
      tipAmtInput.value = "20";
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
        expect(createCurPayment()).toEqual({
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20});
      submitPaymentInfo();
  
      expect(allPayments['payment1']).toEqual({
        billAmt: '100',
        tipAmt: '20',
        tipPercent: 20});
      expect(paymentId).toEqual(1);
    });
  
    
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = "";
      tipAmtInput.value = "";
      paymentId = 0;
      allPayments={};
    });
    afterAll(function(){console.log("done")});
  });