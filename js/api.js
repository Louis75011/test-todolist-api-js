const serverUrl =  'http://127.0.0.1:9000/v1'

async function getTodoList() {
    const response = await axios.get(`${serverUrl}/tasks`)
    console.log(response);
}

getTodoList()