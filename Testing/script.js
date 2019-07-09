document.getElementById("sendData").addEventListener("click", getData); 


function getData(){
    const course_url = document.getElementById("dataField").value

    const url = "http://0.0.0.0:4000/"
    async function test(url){
        const result = await fetch(url, {
            method: "POST", 
            body: JSON.stringify({
                courseUrl: course_url, 
            }), 
        }); 
        const res = await result.text(); 
        console.log(res);
    }


    test(url); 
}



