export default function paginationResultsOf(Model) {
    return async (req, res, next) => {
        const results = {}
        res.paginatedResults = results
        if (req.query !== {}) {
            const page = parseInt(req.query.page) 
            const limit = parseInt(req.query.limit) 
            const skipIndex = (page - 1) * limit

            try {
                results.results = await Model.find()
                    .sort({_id: 1})
                    .limit(limit)
                    .skip(skipIndex)
                    .exec() 
                res.paginatedResults = results 
                next() 
            } catch (e) {
                res.status(500).json({message: "Error Occured"}) 
            }
        }else{
            next()
        }
    }
}