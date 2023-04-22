const app = require('./app');
const {env} = require('./configs');

const port = env.port || 8000;

// create our server
const start = async ()=> {
    try {
        app.listen(port, ()=>{
            console.log(`server is listening on port ${port}`)
        });
    } catch (error) {
        console.error(error.message);
    }
}

start();