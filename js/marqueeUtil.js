function moveText($obj)
{
    var move = $obj.attr("move");
    var val = Number($obj.attr("val"));
    var add = Number($obj.attr("add"));
    if ($obj.get(0).scrollWidth - $obj.get(0).offsetWidth <= 0)
    {
        stop($obj);
        return;
    }
    var w = $obj.get(0).scrollWidth - $obj.get(0).offsetWidth + 10;
    //console.log("move:" + move);
    //console.log("val:" + val);
    //console.log("add:" + add);
    //console.log("w:" + w);

    if (move == "1")
    {
        val = val + add;
        if (val > w)
        {
            add = 0 - Math.abs(add);
            $obj.attr("add", add);
        } else if (val < -10)
        {
            add = Math.abs(add);
            $obj.attr("add", add);
        }

        $obj.attr("val", val);
        $obj.scrollLeft(val);
        setTimeout(function ()
        {
            moveText($obj);
        }, 500);
    }
    else
        return;
}
function move($obj, speed)
{
    if ($obj.attr("move") != "1")
    {
        $obj.css("white-space", "nowrap");
        $obj.css("text-overflow", "clip");
        $obj.css("overflow", "hidden");
        $obj.attr("move", "1");
        $obj.attr("val", "0");
        if (speed == null || speed == undefined)
            speed = 20;
        $obj.attr("add", speed);
        moveText($obj);
    }

}
function startMove($objs, speed)
{
    if (speed == null && speed == undefined)
        speed = 20;
    for (var v = 0; v < $objs.length; v++)
    {
        var $obj = $objs.eq(v);
        if ($obj != null && $obj != undefined)
            move($obj, speed);
    }
}
function stop($obj)
{
    if ($obj != null && $obj != undefined)
        if ($obj.attr("move") != "0")
        {
            $obj.attr("move", "0");
            $obj.scrollLeft(0);
            //console.log("stop move");
        }
}
function stopMove($objs)
{
    for (var v = 0; v < $objs.length; v++)
        stop($objs.eq(v));
}
function reverse($objs)
{
    for (var v = 0; v < $objs.length; v++)
        $objs.eq(v).attr("val", 0);
}