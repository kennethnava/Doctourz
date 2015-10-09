Specialization = new Mongo.Collection("Specialization")

Specialization.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: 'Specialization',
        optional: false
    }
}))

SubSpecialization = new Mongo.Collection("SubSpecialization")

SubSpecialization.attachSchema(new SimpleSchema({
    spname: {
        type: String
    },
    subspname: {
        type: String,
        label: "Sub-Specialiazation"
    }
})