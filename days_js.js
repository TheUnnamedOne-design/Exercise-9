function calculatedays(day_array) {
    array = day_array.split(' ');
    var hot = 0;
    var pleasant = 0;
    var cold = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 85) hot++;
        else if (array[i] >= 60) pleasant++;
        else cold++;
    }
    document.getElementById('hot').innerHTML = hot;
    document.getElementById('pleasant').innerHTML = pleasant;
    document.getElementById('cold').innerHTML = cold;

    var text = '<table border="2px solid black" cellpadding="5px" cellspacing="3px">';
    text += '<tr><th>Day no.</th><th>Temperature</th><th>Category</th></tr>';

  
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 85)
                {
                    text += '<tr><th>'+i+'</th><th>'+array[i]+'</th><th>Hot</th></tr>';
                }
            else if (array[i] >= 60)
                {
                    text += '<tr><th>'+i+'</th><th>'+array[i]+'</th><th>Pleasant</th></tr>';
                }
            else 
            {
                text += '<tr><th>'+i+'</th><th>'+array[i]+'</th><th>Cold</th></tr>';
            }
        }

    text += '</table>';

    document.getElementById("data").innerHTML=text;
}