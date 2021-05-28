var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];
const courseSales = document.querySelector("#course_sales")
courseSales.innerHTML=""
amount = 0;
sales.forEach(function(i){
    line = `  <tr>
    <td >${i.student}</td>
    <td >${i.date} </td>
    <td >${i.amount} </td>
    </tr>`
    courseSales.innerHTML += line;
    if(i.refundRequested==null){
        amount+=i.amount;
    
    }
})
document.querySelector(".btn").addEventListener("click", function(){
    document.querySelector("#total_sold").innerHTML = amount;
})
