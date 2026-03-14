const Article = require("../models/Article");


exports.createArticle = async (req, res) => {

    try {

        const { title, content, category, author, tags } = req.body;

        const article = await Article.create({
            title,
            content,
            category,
            author,
            tags
        });

        res.status(201).json({
            message: "Article created successfully",
            article
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error: error.message
        });

    }

};



exports.getAllArticles = async (req, res) => {

    try {

        const articles = await Article.find().sort({ createdAt: -1 });

        res.json(articles);

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }

};



exports.getArticleById = async (req, res) => {

    try {

        const article = await Article.findById(req.params.id);

        if (!article) {

            return res.status(404).json({
                message: "Article not found"
            });

        }

        res.json(article);

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }

};



exports.deleteArticle = async (req, res) => {

    try {

        const article = await Article.findByIdAndDelete(req.params.id);

        if (!article) {

            return res.status(404).json({
                message: "Article not found"
            });

        }

        res.json({
            message: "Article deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }

};