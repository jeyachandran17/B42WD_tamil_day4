//                          Full stack development day4 task (JS)

// 1. compare two JSON have the same properties without order

var obj1={
    name:"person1",
    age:5
}

var obj2={
    age:5,
    name:"person1",
}

var result=JSON.stringify(obj1,obj2);
console.log(result);

// 2. print all countries flags:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data =request.response
    var result =JSON.parse(data);
    // console.log("Name :"+ result[31].name.common +", region :"+result[31].region+" ,subregion :"+result[31].subregion);

    for(var i=0; i<result.length; i++)
    {
        console.log("country name : "+result[i].name.common+", country flags : ", result[i].flags);
        
    }
}

// 3. print all countries name, region, subregion, population:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function()
{
    var data =request.response
    var result =JSON.parse(data);
    // console.log("Name :"+ result[31].name.common +", region :"+result[31].region+" ,subregion :"+result[31].subregion);

    for(var i=0; i<result.length; i++)
    {
        console.log("country name : "+result[i].name.common+", region : "+result[i].region+", subregion : "+result[i].subregion+", population : "+result[i].population);
        
    }
}

