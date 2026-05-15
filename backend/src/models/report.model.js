import { Schema, model } from "mongoose";

const reportSchema = new Schema({
    activityType: { 
        type: String, 
        required: true 
    },
    beneficiaryName: { 
        type: String, 
        required: true 
    },
    region: { 
        type: String, 
        required: true 
    },
    beneficiaryCount: { 
        type: Number, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    issuesObserved: { 
        type: String 
    },
    status: { 
        type: String, 
        default: 'Submitted' 
    },
    submittedBy: { 
        type: String 
    },
    
}, { timestamps: true })


export const reports =  model('user', reportSchema);

