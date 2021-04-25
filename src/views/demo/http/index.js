/**
 * home api
 */
import request from "@/api/request";
 
/**
 * @name:根据分类获取文章列表
 * @author: camellia
 */
 export const getArticleListByCategory = (data) => request.get("/online_advice/tlc-advice-info/getAdviceInfoList", data)