const keepAlive = () => {
    setTimeout(() => {
        keepAlive();
    }, 100000);
};

console.log("Hi there, I'll keep running until you close me, try ctrl+c or kill the proccess");
keepAlive();
