

document.getElementById('book-btn1').addEventListener('click',function () {
    location.replace("index1.html")
});

document.getElementById('book-btn2').addEventListener('click', function() {
    location.replace('index2.html')
});

// selecting a seat

var seatselected = document.querySelectorAll('.seat')
    seatselected.addEventListener('click', (e) => {
        console.log(e.target);
    })


