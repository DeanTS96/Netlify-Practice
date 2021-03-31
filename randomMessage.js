const randomMessage = () => {
    let i = Math.floor(Math.random()*3)
    switch (i) {
        case 2 : console.log ('Sun');
        break;
        case 1: console.log('Moon');
        break;
        default : console.log('Earth');
    }
};

randomMessage();



