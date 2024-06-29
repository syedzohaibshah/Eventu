import {Schema ,model,models} from 'mongoose';

// Define the IEvent interface
export interface IEvent {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDatetime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: { _id: string; name: string };
    organizer: { _id: string; firstName: string; lastName: string };
  }
  
const EventSchema=new Schema({

    _id: {type:String,required:true,unique:true},
    title:{type:String,required:true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    imageUrl:{type:String,required:true},
    startDateTime:{type:Date,default:Date.now},
    endDatetime:{type:Date,default:Date.now},
    price:{type:String},
    isFree:{type:Boolean,default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId,ref:'Category'},
    organizer:{type:Schema.Types.ObjectId,ref:'User'}

})

const Event = models.Event || model<IEvent & Document>('Event', EventSchema);

export default Event;