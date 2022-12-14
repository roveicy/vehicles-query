const { Schema, model, Types } = require("../config/mongoose");

const vehicleSchema = new Schema(
  {
    makeId: {
      type: Number,
      required: true,
      unique: true,
    },
    makeName: {
      type: String,
      required: true,
    },
    vehicleTypes: [{ type: Schema.Types.ObjectId, ref: "VehicleType" }],
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const Vehicle = model("Vehicle", vehicleSchema);

module.exports = Vehicle;
