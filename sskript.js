const circle = document.getElementById('playerone');
const circle2 = document.getElementById('playertwo');
const info = document.getElementById('infoplayerone');
const info2 = document.getElementById('infoplayertwo');
const conter = document.getElementById('conter');
const pasekup = document.getElementById('pasekup');
console.log(circle);
console.log(circle2);
console.log(info);
console.log(info2);
const move = (e) => {
   
    var circleRect = circle.getBoundingClientRect();
    var circle2Rect = circle2.getBoundingClientRect();

    //console.log(e.keyCode);
    console.log(circleRect.top, circleRect.right, circleRect.bottom, circleRect.left);
    console.log('......');
    console.log(circle2Rect.top, circle2Rect.right, circle2Rect.bottom, circle2Rect.left);

    function checkCollision(entity1, entity2) {
        return !(entity1.x + entity1.width < entity2.x ||
            entity2.x + entity2.width < entity1.x ||
            entity1.y + entity1.height < entity2.y ||
            entity2.y + entity2.height < entity1.y);
    }
    if (checkCollision(circleRect, circle2Rect)) {//kolizja
        console.log("KOLIZJA");
        circle.style.width = '55px';
        circle.style.height = '55px';
        pasekup.style.backgroundColor = 'darkgrey';
        pasekup.innerHTML = ':D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D:D';
    }

    info.textContent = `ZIELONY x:${circle.offsetLeft}, y:${circle.offsetTop}`;
    info2.textContent = `CZERWONY x:${circle2.offsetLeft}, y:${circle2.offsetTop}`;
 
    switch (e.keyCode) {
        //zielony
        case 37:
            circle.style.left = circle.offsetLeft - 25 + "px";         //ofset.. poycja 
            break;
        case 38:
            circle.style.top = circle.offsetTop - 25 + "px";
            break;
        case 39:
            circle.style.left = circle.offsetLeft + 25 + "px";         //ofset.. poycja 
            break;
        case 40:
            circle.style.top = circle.offsetTop + 25 + "px";
            break;
        case 32:
            const red = Math.floor(Math.random() * 256)
            const green = Math.floor(Math.random() * 256)
            const blue = Math.floor(Math.random() * 256)
            conter.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
            //czerwony
            break;
        case 87:
            circle2.style.top = circle2.offsetTop - 25 + "px";
            break;
        case 83:
            circle2.style.top = circle2.offsetTop + 25 + "px";
            break;
        case 65:
            circle2.style.left = circle2.offsetLeft - 25 + "px";        
            break;
        case 68:
            circle2.style.left = circle2.offsetLeft + 25 + "px";         
            break;
        default:
            info.textContent = "UZYJ STRZALEK";
            info2.textContent = "UZYJ W A S D";
    }
   


}

window.addEventListener("keydown", move);
