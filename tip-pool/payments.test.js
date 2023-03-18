describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      billAmtInput.value = "100";
      tipAmtInput.value = "20";
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      createCurPayment();
  
      expect(allPayments.length).toEqual(1);
      expect(paymentId).toEqual(1);
      expect(createCurPayment()).toEqual({
        billAmt: 100,
        tipAmt: 20,
        tipPercent: 20});
      expect(serverTbody.firstChild.textContent).toEqual('Alice$0.00');
    });
  
    
  
    afterEach(function() {
      // teardown logic
      allServers = {};
      serverId =0;
      updateServerTable();
    });
    afterAll(function(){console.log("done")});
  });