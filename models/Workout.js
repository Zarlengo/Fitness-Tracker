module.exports = (mongoose) => {
  const Schema = mongoose.Schema;

  const workoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: { type: Array, required: true },
    totalDuration: { type: Number }
  });

  const Workout = mongoose.model("Workout", workoutSchema);

  return Workout;
}