mongoose.connect("mongodb://127.0.0.1:27017/English");
const db = mongoose.connection;

export default db