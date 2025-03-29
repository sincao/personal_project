import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // Thư mục chứa test
  timeout: 30000, // Timeout cho mỗi test (30 giây)
  retries: 2, // Số lần chạy lại khi test fail
  use: {
    headless: true, // Chạy không hiển thị giao diện trình duyệt
    viewport: { width: 1280, height: 720 }, // Kích thước màn hình
    screenshot: "only-on-failure", // Chụp màn hình khi test fail
    video: "retain-on-failure", // Ghi video nếu test fail
    trace: 'off',
  },
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
/*    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "WebKit",
      use: { browserName: "webkit" },
    },
*/
  ],
  //outputDir: 'test-results/', // Thư mục chứa logs & output
  reporter: [
    ['json', { outputFile: 'reports/report.json' }], // Lưu file JSON vào reports/
    ['junit', { outputFile: 'reports/results.xml' }], // Lưu file XML vào reports/
    ['html', { outputFolder: 'reports/html-report', open: 'never' }] // Lưu báo cáo HTML vào reports/
  ],
});
