const names  = [
    {first_name: "Handnm", last_name: "L demo"},
    {first_name: "Q Wei", last_name: "Alxezx"},
    {first_name: "Pqwern", last_name: "Ruse"},
    {first_name: "Wiruyn", last_name: "Ruby"},
    {first_name: "Erpso", last_name: "Loal"},
    {first_name: "Demors", last_name: "Poet"},
    {first_name: "Aleos", last_name: "Lkeu"},
    ]
   console.log(names.sort()); 
const updateNames = names.map( n =>({
    ...n,
    full_name: `${n.first_name} ${n.last_name}` 
}))
console.log(updateNames);
    