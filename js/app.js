(function() {
    angular.module("ShoppingList", [])
    .service("ShoppingListService", ShoppingListService)
    .controller("ToBuyController", ToBuyController)
    .controller("BoughtController", BoughtController);


    function ShoppingListService() {
        var service = this;
        
        var listToBuy = [
            { name: "cookies", quantity : 10 },
            { name: "chips", quantity : 5 },
            { name: "salads", quantity : 5 },
            { name: "bread sticks", quantity : 20 },
            { name: "beers", quantity : 20 },
            { name: "coca colas", quantity : 20 },
            { name: "sprite", quantity : 20 },
        ];
        
        var listBought = [];
        
        service.toBuyList = function () {
            return listToBuy;
        };
        
        service.boughtList = function () {
            return listBought;
        }
        
        service.buyItem = function (index) {
            item = listToBuy.splice(index,1);
            listBought.push(item[0]);
        }
        
    };
    
    function ToBuyController(ShoppingListService) {
        var tobuy = this;
        
        tobuy.items = ShoppingListService.toBuyList();
        tobuy.buyItem = function (idx) {
           ShoppingListService.buyItem(idx);
        };

    };
    ToBuyController.$inject = ["ShoppingListService"];
    
    function BoughtController(ShoppingListService) {
        var bought = this;
        bought.items = ShoppingListService.boughtList();
    };
    BoughtController.$inject = ["ShoppingListService"];
    
})();