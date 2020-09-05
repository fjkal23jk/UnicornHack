
function handelJoin(){
    let roomNumber = document.getElementById('inputRoom').value;
    if(roomNumber === '') {
        $('#myDialog').modal('show');
    } else {
        window.location.href = "https://unicornhack-289c8.web.app/watch.html?bv="+roomNumber;
    }
    
}


function handelCreate(){
    let bvNumber = document.getElementById('inputBV').value;
    if(bvNumber === '') {
        $('#myDialog').modal('show');
    } else {
        window.location.href = "https://unicornhack-289c8.web.app/watch.html?bvid=BV1Ev41117fW&aid=244466002&cid=232117405";

    }
}


document.getElementById('create').addEventListener('click', handelCreate);
document.getElementById('join').addEventListener('click', handelJoin);