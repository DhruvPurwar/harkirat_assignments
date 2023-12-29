var count=0;
setInterval(function() {
    console.log('This message will appear every 1 seconds');
    console.log(++count);
   }, 1000);