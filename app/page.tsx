/*
 * @Author: 邵明洋
 * @Date: 2023-02-27 16:59:27
 * @LastEditors: 邵明洋
 * @LastEditTime: 2023-03-01 14:54:31
 * @Description: 请填写简介
 */
import RootLayout from './layout';

const MyApp = () => {
  return (
    <RootLayout>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <image className="h-12 w-12" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Message</div>
          <p className="text-slate-500">if you see this page the server is run success!</p>
        </div>
      </div>
    </RootLayout>
  );
};
export default MyApp;
