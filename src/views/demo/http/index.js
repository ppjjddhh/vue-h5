/**
 * home api
 */
import request from "@/api/request";
 
/**
 * @name:根据分类获取文章列表
 * @author: camellia
 * @email: guanchao_gc@qq.com
 * @date: 2021-03-01 
 */
 export const getArticleListByCategory = (data) => request.get("/online_advice/tlc-advice-info/getAdviceInfoList", data)