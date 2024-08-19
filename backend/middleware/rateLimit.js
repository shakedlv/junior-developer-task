const { rateLimit } = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 1000, // 1 sec
	limit: 5, // 5 req in 1 sec
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
	message: "To Many Requests",
})

module.exports = {limiter}