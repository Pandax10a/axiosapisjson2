// listening to an event of mouse click on button
document.querySelector(`#for_axios`).addEventListener(`click`, list_ailments);

// once click event is triggered, a request to api is sent
function list_ailments(Ailments) {
    axios.request({
        url: `https://mhw-db.com/ailments`
    }).then(successFunction).catch(failureFunction);
}

function successFunction(response222) {
//list all available ailment.
for(let i = 0; i<response222[`data`].length;i++)
document.body.insertAdjacentHTML(`beforeend`, `<h3>Ailment ${i+1}: ${response222[`data`][i][`name`]}</h3>
<p> Description: ${response222[`data`][i][`description`]}`);
console.log(`success`);
}

function failureFunction(error333333333) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);

}