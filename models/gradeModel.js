export default (mongoose) => {
  const schema = mongoose.Schema({
    name: String,
    subject: String,
    type: String,
    value: { type: Number, min: 0 },
    lastModified: { type: Date, default: Date.now },
  });

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();

    object.id = _id;

    return object;
  });

  const Grade = mongoose.model('grade', schema, 'grade');

  return Grade;
};
