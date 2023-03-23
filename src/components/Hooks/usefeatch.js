//自定义fetchhook  封装组件卸载自动结束未完成的请求功能和loading功能
import React, { useState, useEffect , useRef } from 'react';
 
const useFetch = (url,args) => {
    //全局设定AbortController
    const abortController = useRef();
    //loading
    const [loading,setLoading] = useState(false);
    //结果
    const [result,setResult] = useState();
 
    //开启请求的方法
    const beginFetch = ()=>{
        abortController.current = new AbortController();
        //开启loading
        setLoading(true);
        //拼接参数
        let argsStr = '';
        if(args!=''){
            for(let key in args) {
                argsStr += key + '=' + args[key] + '&';
            }
            argsStr = '?' + argsStr.substr(0, argsStr.length-1);
        }
        //请求
        fetch(url+argsStr, {
            // 这里传入 signal 进行关联
            signal: abortController.current.signal,
        })
        .then(response => response.json())
        .then(response => {            
            setResult(response)
        })
        .finally(() => setLoading(false));//无论请求成功还是失败都强制结束loading
 
    }
 
    //组件卸载
    useEffect(()=>{
        // beginFetch()
        //组件清除时终止请求
        return () => {
            abortController.current?.abort()
        }
    },[])
    
    return{ result,loading,beginFetch }  
}
 
export default useFetch;