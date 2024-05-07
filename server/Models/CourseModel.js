import mongoose from "mongoose";
import { categoriesEnum } from "../utils/enum";


// Đánh giá về món ăn
const reviewSchema = mongoose.Schema(
    {
        rating: { type: Number, required: true }, //số sao
        comment: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const courseSchema = mongoose.Schema(
    {
        name: { type: String, required: true }, //tên món ăn
        image: { type: String },
        video: { type: String },
        time: { type: String, }, // thời lượng khóa học
        description: { type: String, }, // mô tả khóa học 
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        commitment: { type: String }, // Cam kết
        reviews: [reviewSchema],
        active: {
            type: Boolean,
            default: false,
        },
        category: { // Thuộc loại nào trong 5 loại khóa học trên hệ thống
            type: String,
            require: true,
            enum: categoriesEnum,
            default: categoriesEnum.regionalFood,
        },
        view: { type: Number, default: 0 },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        foodList: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Food",
        }],
    },
    {
        timestamps: true,
    }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
