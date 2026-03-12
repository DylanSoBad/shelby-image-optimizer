const fastify = require('fastify')({ logger: true });
const sharp = require('sharp');
const { ShelbyClient } = require('@shelby-xyz/sdk');
require('dotenv').config();

const shelby = new ShelbyClient({ apiKey: process.env.SHELBY_API_KEY });

fastify.get('/optimize', async (request, reply) => {
    const { imageKey, width, quality = 80 } = request.query;

    try {
        const originalImage = await shelby.getObject(imageKey);

        const optimizedBuffer = await sharp(originalImage.body)
            .resize(parseInt(width) || 800)
            .webp({ quality: parseInt(quality) })
            .toBuffer();

        reply.header('Content-Type', 'image/webp');
        return reply.send(optimizedBuffer);
    } catch (error) {
        reply.status(500).send({ error: "Image processing failed" });
    }
});

fastify.listen({ port: 3000 }, () =>
    console.log('Image Optimizer running on port 3000')
);
