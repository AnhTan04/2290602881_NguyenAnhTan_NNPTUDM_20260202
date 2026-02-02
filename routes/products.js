const express = require('express');
const router = express.Router();

const data = [
  {
    id: 1,
    title: "Áo thun nam basic cotton",
    slug: "ao-thun-nam-basic-cotton",
    price: 189000,
    description: "Áo thun basic cotton chất lượng cao, thoáng mát",
    category: {
      id: 1,
      name: "Áo thun",
      slug: "ao-thun",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-01T00:00:00.000Z",
    updatedAt: "2026-02-01T00:00:00.000Z"
  },
  {
    id: 2,
    title: "Quần jeans ống suông nam",
    slug: "quan-jeans-ong-suong-nam",
    price: 450000,
    description: "Quần jeans ống suông thiết kế hiện đại",
    category: {
      id: 2,
      name: "Quần jeans",
      slug: "quan-jeans",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-01T10:00:00.000Z",
    updatedAt: "2026-02-01T10:00:00.000Z"
  },
  {
    id: 3,
    title: "Áo sơ mi trắng công sở nam",
    slug: "ao-so-mi-trang-cong-so-nam",
    price: 320000,
    description: "Áo sơ mi trắng lịch sự cho công sở",
    category: {
      id: 1,
      name: "Áo thun",
      slug: "ao-thun",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-01T15:00:00.000Z",
    updatedAt: "2026-02-01T15:00:00.000Z"
  },
  {
    id: 4,
    title: "Giày sneaker trắng unisex",
    slug: "giay-sneaker-trang-unisex",
    price: 780000,
    description: "Giày sneaker trắng phù hợp mọi lứa tuổi",
    category: {
      id: 3,
      name: "Giày",
      slug: "giay",
      image: "https://i.imgur.com/YmFSTKL.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-01T16:00:00.000Z",
    updatedAt: "2026-02-01T16:00:00.000Z"
  },
  {
    id: 5,
    title: "Áo khoác bomber đen unisex",
    slug: "ao-khoac-bomber-den-unisex",
    price: 650000,
    description: "Áo khoác bomber đen cá tính, dễ phối",
    category: {
      id: 4,
      name: "Áo khoác",
      slug: "ao-khoac",
      image: "https://i.imgur.com/KJqXOHa.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-01T17:00:00.000Z",
    updatedAt: "2026-02-01T17:00:00.000Z"
  },
  {
    id: 6,
    title: "Classic Comfort Fit Joggers",
    slug: "classic-comfort-fit-joggers",
    price: 45,
    description: "Comfortable classic joggers for everyday wear",
    category: {
      id: 2,
      name: "Quần jeans",
      slug: "quan-jeans",
      image: "https://i.imgur.com/ZANVnHE.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-02T08:00:00.000Z",
    updatedAt: "2026-02-02T08:00:00.000Z"
  },
  {
    id: 7,
    title: "Classic Cotton T-Shirt",
    slug: "classic-cotton-t-shirt",
    price: 25,
    description: "Premium classic cotton t-shirt",
    category: {
      id: 1,
      name: "Áo thun",
      slug: "ao-thun",
      image: "https://i.imgur.com/QkIa5tT.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-02T09:00:00.000Z",
    updatedAt: "2026-02-02T09:00:00.000Z"
  },
  {
    id: 8,
    title: "Classic Leather Jacket",
    slug: "classic-leather-jacket",
    price: 95,
    description: "Stylish classic leather jacket",
    category: {
      id: 4,
      name: "Áo khoác",
      slug: "ao-khoac",
      image: "https://i.imgur.com/KJqXOHa.jpeg",
      createdAt: "2026-02-01T19:28:25.000Z",
      updatedAt: "2026-02-01T19:28:25.000Z"
    },
    images: ["https://placeimg.com/640/480"],
    createdAt: "2026-02-02T10:00:00.000Z",
    updatedAt: "2026-02-02T10:00:00.000Z"
  }
];

// GET /api/v1/products with query parameters
router.get('/', function (req, res, next) {
  let result = [...data];

  // Filter by title (includes - case insensitive)
  if (req.query.title) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(req.query.title.toLowerCase())
    );
  }

  // Filter by slug (exact match)
  if (req.query.slug) {
    result = result.filter(p => p.slug === req.query.slug);
  }

  // Filter by minPrice
  if (req.query.minPrice) {
    const minPrice = parseFloat(req.query.minPrice);
    result = result.filter(p => p.price >= minPrice);
  }

  // Filter by maxPrice
  if (req.query.maxPrice) {
    const maxPrice = parseFloat(req.query.maxPrice);
    result = result.filter(p => p.price <= maxPrice);
  }

  res.json({
    success: true,
    count: result.length,
    data: result
  });
});

// GET /api/v1/products/:id
router.get('/:id', function (req, res, next) {
  const id = parseInt(req.params.id);
  const product = data.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.json({
    success: true,
    data: product
  });
});

module.exports = router;