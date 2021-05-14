var container = new Vue({
    el : "#container",
    data : {
        activePage : "",
        listMenu : [
            {
                caption : "A",
                items : [
                    {caption : "A-1", url : "menuA-1.html"},
                    {caption : "A-2", url : "menuA-2.html"},
                    {caption : "A-3", url : "menuA-3.html"}
                ]
            },
            {
                caption : "B",
                items : [
                    {caption : "B-1", url : "menuB-1.html"},
                    {caption : "B-2", url : "menuB-2.html"},
                ]
            }
        ]
    },
    methods : {
        showHtml : function(url){
            this.activePage = url
        }
    },
    mounted : function() {
        let defaultUrl = this.listMenu[0].items[0].url
        this.showHtml(defaultUrl)
    }
})