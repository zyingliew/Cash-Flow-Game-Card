const express = require('express');
const app = express();

// 主页
app.get('/', (req, res) => {
    res.send('🎉 服务器已成功运行！');
});

// API 路由
app.get('/api', (req, res) => {
    res.json({ message: '这是一个简单的 API' });
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`);
});
