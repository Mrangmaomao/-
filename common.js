import axios from 'axios';
class Fn {
    constructor(){
        this.isType = Object.prototype.toString;
    }
    isArray( arr ) { // 判断数组
        return  this.isType.call( arr ) === '[object Array]' ;
    }
    checkNaN ( obj ) { // 判断 nan
        return obj !== obj;
    }
    isNumber( num ) { //判断number
        let res = false;
        let type = this.isType.call( num );
        if ( type == '[object Number]') {
            res = true;
        } else if ( !( this.checkNaN( Number(num) )) ){
            return this.isType.call( Number(num) ) === '[object Number]';
        }
        return res;
    }
    isFunction( fn ) { // 判断 fn
        return  this.isType.call( fn ) === '[object Function]';
    }
    isString( str ) {
        return this.isType.call( str ) === '[object String]';
    }
    isReg( reg ) {
        return this.isType.call( reg ) === '[object RegExp]';
    }
    isUndefined( str ) {
        return this.isType.call( str ) === '[object Undefined]';
    }
    isObject( obj ) {
        return this.isType.call( obj ) === '[object Object]';
    }
    isNull ( obj ) {
        return this.isType.call( obj ) === '[object Null]';
    }
    isNullObject(obj){ // 判断是否为空对象
        let res = true;
        if ( this.isObject(obj)  ) {
            res = Object.keys(obj).length == 0 ? true : false;
            return res;
        } else {
            return false;
        }
    }
    isDate( date ) {
        return this.isType.call(date) === '[object Date]';
    }
    deepCopy( arr  ){ // 深拷贝
        let _this = this;
        let obj;
        if ( jsType.isArray( arr ) ) {
          obj = [];
          for ( let i=0; i< arr.length;i++ ) {
            obj.push( _this.deepCopy( arr[i] ) );
          }
        } else if ( jsType.isObject(arr)){
          obj = {};
          for ( let key in arr){
            obj[key] = this.deepCopy(arr[key]);
          }
        } else {
          return arr;
        }
        return obj;
    }
    timestampToString(time, onlyDate) {
        let date = new Date(time),
          arr = date.toLocaleDateString().split('/'),
          str1 = arr[0] + '-' +('0' + arr[1]).slice(-2) + '-' +('0' + arr[2]).slice(-2),
          str2 = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' +('0' + date.getSeconds()).slice(-2);
        return onlyDate ? str1 : (str1 + ' '+ str2)
    }
}
class Ajax extends fn{
    constructor(par){
        let _this = this;
        super(par)
        _this.initAjax();
    }
    initAjax(){
        let _this = this;
        let http = axios.create({ //创建一个axios 实例
            baseURL: '',
            timeout: 1000,
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            withCredentials: true
        });
        http.interceptors.request.use( function(config) {
            //config 根据项目写拦截信息
        },function(){ // 错误信息
        });
        _this.http = http;
    }
    getPar(par){
        let res = [];
        if ( !super.isObject(par)) {
            console.warn('参数有误请检查');
            return false;
        } else if( super.isNullObject(par) ) {
            return '';
        }
        Object.keys(par).forEach( (key,i) => {
            res.push(`${key}=${par[key]}`);
        })
        return res.join('&');
    }
    handleError(err){
        console.log(err) // 根据项目规则来展示 错误
    }
    $post(url,par = {},fn){ // post
        let _this = this;
        this.http.$post(url,par).then( (res) => {
            if ( fn && super.isFunction(fn) ) {
                fn( res.data )
            } else {
                _this.handleError( err );
            }
        }).catch((err)=>{
            _this.handleError(err)
        })
    }
    $get(url,par = {}) { // get
        let _this = this;
        let sendUrl = `${url}?${self.getPar(par)}`;
        _this.http.$get( sendUrl ).then( (res) => {
            fn( res.data )
        }).catch(( err ) => {
            _this.handleError(err)
        })
    }
}
let fn = new Fn();
export {
    fn
}