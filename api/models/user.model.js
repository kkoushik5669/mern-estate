import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        //user name type is string
        type: String,
        //numbers or boolean can't be added to the user name
        required: true,
        //no one can have the same username
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });
//timestamps true ->add extra information of timestaps
const User = mongoose.model('User', userSchema);

export default User;