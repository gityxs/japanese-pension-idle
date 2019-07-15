﻿window.kongregateFunctions = {

    getUsername:function() {
        // You can now access the Kongregate API with:
        // kongregate.services.getUsername(), etc
        // Proceed with loading your game...
        
        if (window.kongregate.services.isGuest()) {
            return "You are a guest.";
        } else {
            return window.kongregate.services.getUsername();
        }
    },
    updateTotalLevelScore: function (totalLevel) {
        window.kongregate.stats.submit("Total Level", totalLevel);
    },
    updatePensionTotal: function (pensionTotal) {
        window.kongregate.stats.submit("Total Pension", pensionTotal);
        return pensionTotal;
    },
    createSortableList: function (listElement) {
        Sortable.create(listElement, {});
    },
    getToken: function () {
        if (window.kongregate.services.isGuest()) {
            return "";
        }
        else {
            return window.kongregate.services.getGameAuthToken();
        }
    },
    LoginWithKongregateID:function(){
        PlayFab.settings.titleId = "1A3BB";
        var username = this.getUsername();
        var token = this.getToken();
        var loginRequest = {
        // Currently, you need to look up the correct format for this object in the API-docs:
        // https://api.playfab.com/documentation/Client/method/LoginWithCustomID
            TitleId: PlayFab.settings.titleId,
            KongregateId: username,
            CreateAccount: true,
            AuthTicket:token
    };
        PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
        
    }


};