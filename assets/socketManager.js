cc.Class({
    extends: cc.Component,

    properties: {
        socket : null,
        //destination
        url : "http://192.168.0.7:9000",

    },

    onLoad() {
        this.connectSocket();
    },

    connectSocket() {
        if (this.socket == null) {
            //window.io = SocketIO;
            this.socket = io.connect(this.url);
            this.listenEvent();
        }
    },

    listenEvent()
    {
        var self = this;
        //connection states
        this.socket.on("connect", function(){
            console.log("socket connected");
            console.log(self.socket);
        });

        this.socket.on("reconnecting", function(){
            console.log("socket reconnecting");
        });

        this.socket.on("reconnect", function(){
            console.log("socket reconnected");
        });

        this.socket.on("disconnect", function(){
            console.log("socket disconnected");
        });

        //listener function for emitter data2 from server side
        this.socket.on('data2', function (data) {
            console.log(data);
        });

    },

    button1Pressed()
    {
        var dataToSend = {
            whichButton: "button1",
        }
        this.socket.emit("data1", dataToSend);
    },

    button2Pressed()
    {
        var dataToSend = {
            whichButton: "button2",
        }
        this.socket.emit("data1", dataToSend);
    },

    button3Pressed()
    {
        var dataToSend = {
            whichButton: "button3",
        }
        this.socket.emit("data1", dataToSend);
    },

    button4Pressed()
    {
        var dataToSend = {
            whichButton: "button4",
        }
        this.socket.emit("data1", dataToSend);
    },

    // emitData () {
    //     var dataToSend = {
    //         whichButton: "button1",
    //     }


    //     //sends data(objek) to server, the emitter's string parameter will be received on server side 
    //     this.socket.emit("data1", dataToSend);
    // },

    // update (dt) {},
});
