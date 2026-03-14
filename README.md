# 🖼 Shelby Image Optimizer

A specialized image transformation and delivery service built on **Shelby Global Object Storage**.

## 🚀 The Core Problem
High-resolution images slow down web performance and drive up egress costs. Legacy CDNs charge a premium for real-time optimization.

## 💡 The Shelby Solution
By combining **Sharp's** processing power with **Shelby's low-latency fiber network**, this tool provides:
- **On-the-fly Resizing:** Deliver the perfect size for every device.
- **WebP Conversion:** Reduce image weight by up to 80% automatically.
- **Global Egress Savings:** Leverage Shelby's 70% cheaper data transfer.

## 🛠 Installation
1. `npm install`
2. Configure `SHELBY_API_KEY` in `.env`.
3. `node server.js`

## 🔗 API Example
`GET /optimize?imageKey=banner.jpg&width=400&quality=75`

---
*Developed by **dylann** | Shelby Early Access Developers*

