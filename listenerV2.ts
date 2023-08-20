
const ethers = require("ethers")
const router =  0xe592427a0aece92de3edee1f18e0157c05861564; // Uniswap V3: Router | Address

async function mempoolListener() {
    const WsProvider = new ethers.providers.WebSocketProvider("ADD_YOUR_ETHEREUM_NODE_WSS_URL");
    WsProvider.on("pending", async (tx) => {
    const  txInfo = await WsProvider.getTransaction(tx);
    if(txInfo){
        if(txInfo.to == router){
            console.log(txInfo);
        }
    }
    
    });

   
}

mempoolListener();
