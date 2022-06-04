import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 其他配置项
  resolve: {
    //  忽略后缀文件名的配置选项
    // extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  // 配置局域网访问接口
  server: {
    // 配置局域网中访问项目
    // host:'192.168.103.18'
    proxy: {
      // 通过代理直接访问指定的路径
      '/homeApi': {
        // 代理的目标地址
        target: 'https://mall.api.epet.com/v3/index/home.html?pet_type=cat&version=596&is_single=0&isWeb=1&system=wap',
        // 开发模式，默认的origin是真实的 origin:localhost:3000 代理服务会把origin修改为目标地址
        changeOrigin: true,
        // 是否https接口
        secure: true,
        // 是否代理 websockets
        // ws: true,
        // rewrite target目标地址 + '/abc'，如果接口是这样的，那么不用重写
        rewrite: (path) => path.replace(/^\/homeApi/, ''),
      },
    },
  },
})
