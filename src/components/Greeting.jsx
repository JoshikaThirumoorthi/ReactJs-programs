export default function Greeting(){
    

    if (hour <12){
        setGreeting("Good Morning 🌅");
    }
    else if(hour <18){
        setGreeting("Good Afternoon 🌞");
    }
    else{
        setGreeting("Good Evening 🌙");
    }
    setTimeout('hour.toSring()',1000);          
    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h2 className="text-2xl font-bold text-center">{greeting}</h2>
        </div>

    )
    
}


