
document.getElementById('slider').onmouseup = stop;
document.getElementById('circle').onmousedown = move;


// Function of move scroll
    function move(event) {

        document.getElementById('slider').onmousemove = function(event) {

            var x = event.screenX - 325;//Относительно родителя
            // border elem left and right
            if (event.screenX < 306) x = -19;
            if (event.screenX > 1123) x = 802;
            
            var y =  -47 + x;

// circle and color line move
            document.getElementById('circle').style.marginLeft = x + 'px';
            document.getElementById('color-line').style.marginLeft = 2 + x + 'px';
            document.getElementById('color-line').style.width = 825 - x + 'px';

// scroll elem frrom 0 to 138px
            if (y == 138) document.getElementById('cost').innerHTML = '$30,000';
            if (y < 138) {
                var cost = (y + 66) * 147.05813;
                cost = parseInt(cost);
                document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
                document.getElementById('price').style.marginLeft = y + 'px';
            }

// scroll elem frrom 138 to 343px
            if (y == 343)  document.getElementById('cost').innerHTML = '$200,000';
            if (y < 343 && y > 138) {
                var cost = (y - 138) * 829 + 30000;
                cost = parseInt(cost);
                document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
                document.getElementById('price').style.marginLeft = y + 'px';
            }

// scroll elem from 343 to 548
            if (y == 548)  document.getElementById('cost').innerHTML = '$1 million';
            if (y < 548 && y > 343) {
                var cost = (y - 343) * 3902.43 + 200000;
                cost = parseInt(cost);
                document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
                document.getElementById('price').style.marginLeft = y + 'px';
            }

// scroll elem & up
            if (y == 755)  document.getElementById('cost').innerHTML = 'Up 1 million';
            if (y > 548) {
                document.getElementById('cost').innerHTML = 'Up 1 million';
                document.getElementById('price').style.marginLeft = y + 'px';
            }
        }

    };

// Fucntion of stop move scroll && static move
    function stop(event) {

        var x = event.screenX - 325;//Относительно родителя
        //Stop "onmousemove"
        document.getElementById('slider').onmousemove = function(){};
        // border elem left and right
        if (event.screenX < 306) x = -19;
        if (event.screenX > 1123) x = 802;

        var y =  -47 + x;

        document.getElementById('color-line').style.marginLeft = 2 + x + 'px';
        document.getElementById('color-line').style.width = 825 - x + 'px';
        document.getElementById('circle').style.marginLeft =  x + 'px';

        // scroll elem frrom 0 to 138px
        if (y == 138) document.getElementById('cost').innerHTML = '$30,000';
        if (y < 138) {
            var cost = (y + 66) * 147.05813;
            cost = parseInt(cost);
            document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
            document.getElementById('price').style.marginLeft = y + 'px';
        }

// scroll elem frrom 138 to 343px
        if (y == 343)  document.getElementById('cost').innerHTML = '$200,000';
        if (y < 343 && y > 138) {
            var cost = (y - 138) * 829 + 30000;
            cost = parseInt(cost);
            document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
            document.getElementById('price').style.marginLeft = y + 'px';
        }

// scroll elem from 343 to 548
        if (y == 548)  document.getElementById('cost').innerHTML = '$1 million';
        if (y < 548 && y > 343) {
            var cost = (y - 343) * 3902.43 + 200000;
            cost = parseInt(cost);
            document.getElementById('cost').innerHTML = '$' + parseInt(cost/1000) + ',' + cost % 1000;
            document.getElementById('price').style.marginLeft = y + 'px';
        }

// scroll elem & up
        if (y == 755)  document.getElementById('cost').innerHTML = 'Up 1 million';
        if (y > 548) {
            document.getElementById('cost').innerHTML = 'Up 1 million';
            document.getElementById('price').style.marginLeft = y + 'px';
        }

    }
