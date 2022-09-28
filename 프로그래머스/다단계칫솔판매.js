// function solution(enroll, referral, seller, amount) {
//     const dict = {};
//     for(let i = 0; i < referral.length; i++){
//         const parrent = referral[i];
//         const children = enroll[i];
//         if(dict.hasOwnProperty(parrent)){
//             dict[parrent].push(children)
//         }
//         else{
//             dict[parrent] = [children];
//         }
//     }

//     const sellerDict = {}
//     for(let i of enroll){
//         sellerDict[i] = [];
//     }
//     for(let i = 0; i < seller.length; i++){
//         const s = seller[i];
//         const a = amount[i];
//         sellerDict[s].push(a*100);
//     }
    
//     const change = (sellList) =>{
//         const referralList = [];
//         for(let i = 0 ; i < sellList.length; i++){
//             const sell = sellList[i];
//             const temp = Math.floor(sell*0.1);
//             sellList[i] -= temp;
//             if(temp !== 0){
//                 referralList.push(temp);
//             }
//         }
//         return referralList; 
//     }
    
//     const dfs = (v) => {
//         if(dict[v] === undefined){
//             if(sellerDict.hasOwnProperty(v)){
//                 return change(sellerDict[v])              
//             }
//             return [];
//         }
//         else{
//             let lst = [];
//             if(sellerDict.hasOwnProperty(v)){
//                 lst.push(...sellerDict[v]);
//             }
//             for(let i of dict[v]){
//                 lst.push(...dfs(i));
//             }          
//             if(v === '-'){
//                 return;
//             }
//             const temp = change(lst);
//             sellerDict[v] = lst;
//             return temp;
//         }
//     }
//     dfs('-');
//     return Object.values(sellerDict).map(v=>v.reduce((a,b)=>a+b,0))
// }

function solution(enroll, referral, seller, amount) {
    const dict = {};
    for(let i = 0; i < referral.length; i++){
        const parrent = referral[i];
        const children = enroll[i];
        dict[children] = parrent;
    }
    
    const sellerDict = {}
    for(let i of enroll){
        sellerDict[i] = 0;
    }
    
    for(let i = 0; i < seller.length; i++){
        let sell = seller[i];
        let am = amount[i] * 100;
        while(sell !== '-'){
            sellerDict[sell] += am;
            const sub = am * 0.1 >> 0;
            if(sub === 0) break;
            sellerDict[sell] -= sub;
            am = sub;
            sell = dict[sell];
        }    
    }
    return Object.values(sellerDict);
}