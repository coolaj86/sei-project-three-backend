import mongoose from 'mongoose'

const tripSchema = new mongoose.Schema({
  title: { type: String, maxlength: 50,required: true },
  notes: { type: String, maxlength: 300 },
  countryVisited: { type: String, required: true },
  dateStarted: { type: String },
  dateFinished: { type: String },
  memories: [{ type: mongoose.Schema.ObjectId, ref: 'Memory' }],
})

// todo add virtuals centerPoint, isPlanned, summaryImage 

export default mongoose.model('Trip', tripSchema)