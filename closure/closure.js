import { createBulkData } from "./data-utils.js";

// Memory 분석을 위해 window 멤버로 추가
window.dataSource = createBulkData(100000);

window.arr = window.dataSource.map(( { name, birthdate, email, country, num } ) => {
  return () => `${name} - ${birthdate} - ${email} - (${country}) +${num}`;
});
