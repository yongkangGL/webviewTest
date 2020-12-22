cc.Class({
    extends: cc.Component,

    properties: {
        webNode:{
            default: null,
            type: cc.Node,
        },
        yesNo:{
            default: true,
            type: cc.Boolean,
        },
    },

    //this function is called everytime the node this script is attached to
    // is set back to active again
    onLoad() {
        this.webNode.on('loaded', this.initWV, this);
    },

    initWV(){
        //console.log("loaded" + event);
        if(this.yesNo)
        {
            this.setYes();
        }
        else
        {
            this.setNo();
        }
    },

    button1() {
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage("button1", "*");
    },

    button2() {
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage("button2", "*");
    },

    button3() {
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage("button3", "*");
    },

    button4() {
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage("button4", "*");
    },

    setNo() {
        this.yesNo = false;
        document.getElementsByTagName("iframe")[0].contentWindow.postMessage("toNo", "*");
    },

    hdieWebview() {
        console.log("hide webview");
        this.webNode.active = false;
    },

    showWebview() {
        console.log("show webview");
        this.webNode.active = true;
    },

    start () {
        var self = this;
        window.addEventListener('message', function(e){
            var data = e.data;       
            //console.log(document);   //fyi, document is referring to the html code of the site
            //console.log("data is");
            //console.log(data);
            
            if(cc.sys.isBrowser)
            {
                console.log("cc.sys.isBrowser is");
                console.log(cc.sys.isBrowser);
            }
            else if (cc.sys.isNative)
            {
                console.log("cc.sys.isNative is");
                console.log(cc.sys.isNative);
            }
            if(data == "1")
            {
                self.webNode.active = false;
                console.log("received 1");
            }
            else if (data == "2")
            {
                console.log("received 2");
            }
        });
    },
});