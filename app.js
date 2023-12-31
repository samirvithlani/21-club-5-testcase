const express = require('express');
const app = express();
app.use(express.json());


const productRoutes = require('./routes/ProductRoutes');
app.use('/product',productRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

module.exports = {app};