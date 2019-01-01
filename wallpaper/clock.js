 // var for insertion 
 var clock = document.getElementById('time');
 var msg = document.getElementById('Welcome');

 //clock function
 function timeClck() {
     let timx = new Date();
     let hour = timx.getHours();
     let minute = timx.getMinutes();
     let second = timx.getSeconds()
    //output time to html 
    clock.innerHTML = `${hour} : ${minute} : ${second}`;

     //welcome function
 
     if (hour <= 11 ) {
        msg.innerHTML ='Good Morning Demola!'
    }

    else if (hour <= 17) {
        msg.innerHTML = 'Good Afternoon Demola!'
    }

    else  {
        msg.innerHTML = 'Good Evening Demola!'
    }
 }
 timeClck();

 //updating time per sec(1000) interval
 setInterval(timeClck, 1000);
 

