const fs = require('fs');
// fs.mkdir ('tutorial', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         fs.writeFile('./tutorial/ex.txt','123', (err)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log('successfully created file');
//             }
//         });
//     }
// })

fs.unlink('./tutorial/ex.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('deleted folder');
            }
        });
    }
});
