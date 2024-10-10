import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export const ConnectDB = async () => {
  // await mongoose.connect(
  //   'mongodb+srv://cripintort:60qRKHJbBabzfMQ7@cluster0.hdmrm.mongodb.net/'
  // )
  await mongoose.connect(MONGODB_URI)
  console.log('DB Connected')
}
