const fs=require("fs");

fs.mkdir('myFolder',(err)=>{
    if(err) throw err;
    console.log("diectopry creayed");

    fs.writeFile("myFolder/text.txt","Hello this is imside folder\n",(err)=>{
        if(err) throw err;
        console.log("file created");

        fs.appendFile("myFolder/text.txt","Padhlo test hai\n",(err)=>{
            if(err) throw err;
            console.log("append succesfull");

            fs.rename("myFolder/text.txt","myFolder/test.txt",(err)=>{
                if(err) throw err;
                console.log("rename succesfully")

                fs.unlink("M")
            });


        })
    })
})