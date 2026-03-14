const express = require("express");
const router = express.Router();

const {
    createArticle,
    getAllArticles,
    getArticleById,
    deleteArticle
} = require("../controllers/articleController");

const { protect, isAdmin } = require("../middleware/authMiddleware");


router.get("/", getAllArticles);

router.get("/:id", getArticleById);

router.post("/", protect, isAdmin, createArticle);

router.delete("/:id", protect, isAdmin, deleteArticle);

module.exports = router;