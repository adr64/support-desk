const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        product: {
            type: String,
            required: [true, 'Please select a product'],
            enum: ['iPhone', 'Macbook Pro', 'iMac', 'iPad', 'Apple Watch']
        },
        description: {
            type: String,
            required: [true, 'Please enter a description of the issue'],
            default: false
        },
        status: {
            type: String,
            required: true,
            enum: ['new' , 'open', 'clodes'],
            default: 'new'
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Ticket', ticketSchema)