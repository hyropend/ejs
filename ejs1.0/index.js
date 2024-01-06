import  express  from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    const d = new Date();
    let day = d.getDay();

    let type = "a weekday";
    let adv="its time to work hard.";

    if(day===0 || day===6){
        type = "a weekend";
        adv="its time to have some fun.)";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv
    });
})

app.listen(port, ()=> {
    `Server running at port ${port}`;
});