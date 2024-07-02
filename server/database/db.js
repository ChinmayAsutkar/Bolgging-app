import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://user:2000@blogging-app.5dqybur.mongodb.net/?retryWrites=true&w=majority&appName=blogging-app`;
    // const URL = `mongodb://127.0.0.1:27017/mongosh?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10/blogging-app`;
    // const URL = `mongodb://${username}:${password}@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully chinma');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;