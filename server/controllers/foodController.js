import Food from "../Models/FoodModel.js";


class FoodController {
    static handleCreateFood = async (req, res) => {
        try {
            const { name, image, description, time, ingredient, processing, make, kind } = req.body;
            if (!name || !image || !ingredient || !processing || !make) {
                return res.status(404).json({
                    message: 'Missing input parameter!'
                })
            }

            const food = await Food.create({
                name: name, image, description, time, ingredient, processing, make, kind, user: req.user._id
            });
            await food.save()

            return res.status(200).json({
                message: 'Post a successful dish',
                data: {
                    _id: food._id,
                    name: name,
                    image: image
                }
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message,
                status: 500,
                error: 'Internal Server Error',
            })
        }
    }
}

export default FoodController