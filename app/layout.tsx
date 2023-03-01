/*
 * @Author: 邵明洋
 * @Date: 2023-02-27 16:45:12
 * @LastEditors: 邵明洋
 * @LastEditTime: 2023-03-01 14:09:41
 * @Description: 请填写简介
 */
import './globals.css';

export const metadata = {
  title: 'title',
  description: 'website types',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  );
}
