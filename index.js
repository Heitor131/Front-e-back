const express = require("express")

const app = express();

app.use(express.json());

const tasks = [
    {
        "id": 1,
        "Title": "Minha primeira Task",
        "description": "Criar uma rota get na minha primeira API",
        "done": false
    }
];

app.get("/tasks",(req, res) => {
    res.status(200).send(tasks);  //200 
});

app.post("/tasks", (req, res) =>{
    const {Title, description} = req.body;

    const task = {
        id: tasks.length +1,
        Title,
        description,
        done: false
    };

    tasks.push(task);

    res.status(201).send(task);
});

app.patch("/tasks/:id", (req, res) =>{
    const { id } = req.params;

    const task = tasks.find(task => task.id = id)

    task.done = true;

    res.status(200).json(task);
})

app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;

    const index = tasks.findIndex(task => task.id = id);

    tasks.splice(index, 1);
    res.status(204).send();

});

app.listen(3000, () => {
    console.log("Server rodando");
});