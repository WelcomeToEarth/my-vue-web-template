import service from "./http";
// import qs from "qs";

export default {
  //登录
  login(params) {
    return service.post("login", params);
  },
  //获取ocr结果
  getOcrResult(params) {
    return service.get("menus",params);
  },
  // 上传图片
  //角色授权
  uploadImg(formData ) {
    return service.post(("menus", formData ), {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
}
};
