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

const cookingCourseSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        video: { type: String },
        description: { type: String, }, // mô tả món ăn
        time: { type: String, }, // thời gian nấu món ăn
        ingredient: [{ type: String, require: true }], // nguyên liệu
        prepare: [{ type: String, require: true }], // sơ chế
        make: [{ type: String, require: true }], // thực hiện món ăn
        reviews: [reviewSchema],
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        active: {
            type: Boolean,
            default: false,
        },
        category: { // Thuộc loại nào trong 5 loại món ăn trên hệ thống
            type: String,
            require: true,
            enum: categoriesEnum,
            default: categoriesEnum.regionalFood,
        },
    },
    {
        timestamps: true,
    }
);

const CookingCourse = mongoose.model("CookingCourse", cookingCourseSchema);

export default CookingCourse;
