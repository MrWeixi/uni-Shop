var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'goods-wrapper'])
Z([3,'index'])
Z([3,'goods_item'])
Z([[7],[3,'goodsList']])
Z(z[1])
Z([3,'goods-item'])
Z([3,'goodsImg'])
Z([3,'goods-img'])
Z([[6],[[7],[3,'goods_item']],[3,'img']])
Z([3,'goodsTitle'])
Z([a,[[6],[[7],[3,'goods_item']],[3,'name']]])
Z([3,'goodsPrice'])
Z([3,'price'])
Z([a,[[2,'+'],[1,'¥ '],[[6],[[7],[3,'goods_item']],[3,'price']]]])
Z([3,'buyNum'])
Z([a,[[2,'+'],[[6],[[7],[3,'goods_item']],[3,'slogan']],[1,'人付款']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'search'])
Z([3,'text-area'])
Z([3,'__e'])
Z([3,'input_search'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'shopList']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/image/search.png'])
Z([3,'width:48rpx;height:48rpx;'])
Z([3,'inp'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-load-more'])
Z([3,'uni-load-more__img'])
Z([[2,'!'],[[2,'&&'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[7],[3,'showIcon']]]])
Z([3,'load1 load'])
Z([3,'uni-load-view_wrapper'])
Z([[2,'+'],[[2,'+'],[1,'background:'],[[7],[3,'color']]],[1,';']])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'load2 load'])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'load3 load'])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z(z[4])
Z(z[5])
Z([3,'uni-load-more__text'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'more']],[[6],[[7],[3,'contentText']],[3,'contentdown']],[[2,'?:'],[[2,'==='],[[7],[3,'status']],[1,'loading']],[[6],[[7],[3,'contentText']],[3,'contentrefresh']],[[6],[[7],[3,'contentText']],[3,'contentnomore']]]]],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-numbox'])
Z([3,'__e'])
Z([3,'uni-numbox-minus'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_calcValue']],[[4],[[5],[1,'subtract']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'yticon icon--jianhao']],[[2,'?:'],[[7],[3,'minDisabled']],[1,'uni-numbox-disabled'],[1,'']]]])
Z(z[1])
Z([3,'uni-numbox-value'])
Z([[4],[[5],[[4],[[5],[[5],[1,'blur']],[[4],[[5],[[4],[[5],[[5],[1,'_onBlur']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'disabled']])
Z([3,'number'])
Z([[7],[3,'inputValue']])
Z(z[1])
Z([3,'uni-numbox-plus'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_calcValue']],[[4],[[5],[1,'add']]]]]]]]]]])
Z([[4],[[5],[[5],[1,'yticon icon-jia2']],[[2,'?:'],[[7],[3,'maxDisabled']],[1,'uni-numbox-disabled'],[1,'']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'left-aside'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'flist']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'f-item b-b']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'item']],[3,'id']],[[7],[3,'currentId']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tabtap']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'flist']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'name']]],[1,'']]])
Z(z[6])
Z([3,'right-aside'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'asideScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'tabScrollTop']])
Z([3,'__i1__'])
Z(z[3])
Z([[7],[3,'slist']])
Z(z[5])
Z([3,'s-list'])
Z([[2,'+'],[1,'main-'],[[6],[[7],[3,'item']],[3,'id']]])
Z([3,'s-item'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'t-list'])
Z([3,'__i2__'])
Z([3,'titem'])
Z([[7],[3,'tlist']])
Z(z[5])
Z([[2,'==='],[[6],[[7],[3,'titem']],[3,'pid']],[[6],[[7],[3,'item']],[3,'id']]])
Z(z[6])
Z([3,'t-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToList']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'slist']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]],[1,'id']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'tlist']],[1,'id']],[[6],[[7],[3,'titem']],[3,'id']]],[1,'id']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'titem']],[3,'picture']])
Z([a,[[6],[[7],[3,'titem']],[3,'name']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'apps'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'back']]],[1,';']])
Z([1,true])
Z([3,'__e'])
Z([3,'carousel'])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,1000])
Z([3,'#fff'])
Z([3,'rgba(0, 0, 0, .3)'])
Z(z[3])
Z([1,3000])
Z(z[0])
Z([3,'item'])
Z([[7],[3,'imgList']])
Z(z[0])
Z([3,'carousel-item'])
Z([[6],[[7],[3,'item']],[3,'src']])
Z([3,'nav'])
Z(z[0])
Z([3,'items'])
Z([[7],[3,'menus']])
Z(z[0])
Z(z[4])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'acitveIndex']],[[7],[3,'index']]],[1,'big'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'menuClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[1,'menus'],[[7],[3,'index']]])
Z([a,[[7],[3,'items']]])
Z([3,'nav_hot'])
Z([3,'../../static/image/youhuiquan.png'])
Z([3,'新人优惠'])
Z([3,'../../static/image/VIP.png'])
Z([3,'会员优享卡'])
Z(z[4])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'all']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'../../static/image/quanbu.png'])
Z([3,'全部商品'])
Z([3,'title'])
Z([3,'font-size:40rpx;'])
Z([3,'好物日历'])
Z([3,'font-size:28rpx;margin-left:30rpx;'])
Z([3,'每日精选推荐'])
Z([3,'list-content'])
Z(z[0])
Z(z[20])
Z([[7],[3,'getLists']])
Z(z[0])
Z([3,'list-item'])
Z([3,'image'])
Z([[6],[[7],[3,'items']],[3,'imgUrl']])
Z([[2,'=='],[[6],[[7],[3,'items']],[3,'flash']],[1,2]])
Z([3,'flash'])
Z([3,'限时降价,立即查看'])
Z([3,'texts'])
Z([a,[[6],[[7],[3,'items']],[3,'text']]])
Z([[2,'=='],[[6],[[7],[3,'items']],[3,'flash']],[1,1]])
Z([3,'manxs'])
Z([3,'满减'])
Z([3,'manx'])
Z([3,'shop'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'items']],[3,'count']]]])
Z([3,'../../static/iconfont/shop-icon.png'])
Z([3,'width:42rpx;height:38rpx;'])
Z(z[37])
Z([3,'display:flex;justify-content:space-between;'])
Z(z[38])
Z([3,'新品尝鲜'])
Z(z[40])
Z([3,'每周二,周四上新'])
Z([3,'font-size:26rpx;color:#666;'])
Z([3,'margin-right:8rpx;'])
Z([3,'更多'])
Z([3,'font-family:\x27黑体\x27;'])
Z([3,'\x3e'])
Z(z[42])
Z(z[0])
Z(z[20])
Z(z[45])
Z(z[0])
Z(z[47])
Z(z[48])
Z(z[49])
Z(z[50])
Z(z[51])
Z(z[52])
Z(z[53])
Z([a,z[54][1]])
Z(z[55])
Z(z[56])
Z(z[57])
Z(z[58])
Z(z[59])
Z([a,z[60][1]])
Z(z[61])
Z([3,'width:40rpx;height:40rpx;'])
Z([3,'banner'])
Z([3,'../../static/image/banner.jpg'])
Z([3,'goodsBox'])
Z([3,'shopList'])
Z([3,'—— 商品列表 ——'])
Z([3,'__l'])
Z([[7],[3,'goodsLists']])
Z([3,'1'])
Z(z[100])
Z([[7],[3,'status']])
Z([3,'2'])
Z(z[4])
Z([3,'to-top'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goTop']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'!'],[[7],[3,'isshow']]])
Z([3,'widthFix'])
Z([3,'../../static/iconfont/top.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'user-section'])
Z([3,'user-info-box'])
Z([3,'portrait-box'])
Z([3,'portrait'])
Z([3,'../../static/image/user/missing-face.png'])
Z([3,'info-box'])
Z([3,'username'])
Z([3,'KING'])
Z([3,'vip-card-box'])
Z([3,'b-btn'])
Z([3,'立即开通'])
Z([3,'tit'])
Z([3,'ADS会员'])
Z([3,'__e'])
Z(z[13])
Z(z[13])
Z([3,'cover-container'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'coverTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'coverTransform']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[7],[3,'coverTransition']]],[1,';']]])
Z([3,'arc'])
Z([3,'../../static/image/user/arc.png'])
Z([3,'my-assets'])
Z([3,'ass'])
Z([3,'我的资产'])
Z([3,'ass_list'])
Z([3,'0.00'])
Z([3,'元'])
Z([3,'我的余额'])
Z([3,'1'])
Z([3,'我的积分'])
Z([3,'0'])
Z([3,'张'])
Z([3,'优惠卷'])
Z(z[30])
Z(z[31])
Z([3,'会员卡'])
Z(z[21])
Z(z[22])
Z([3,'我的工具'])
Z(z[24])
Z([3,'../../static/iconfont/liulanjilu.png'])
Z([3,'浏览记录'])
Z([3,'../../static/iconfont/saoyisao.png'])
Z([3,'扫一扫'])
Z([3,'../../static/iconfont/yaoqinghaoyou.png'])
Z([3,'邀请好友'])
Z([3,'../../static/iconfont/gengduo.png'])
Z([3,'更多...'])
Z(z[21])
Z(z[22])
Z([3,'使用记录'])
Z(z[24])
Z(z[30])
Z([3,'商品收藏'])
Z(z[28])
Z([3,'历史购买'])
Z([3,'12'])
Z([3,'我的足迹'])
Z(z[21])
Z(z[22])
Z(z[38])
Z(z[24])
Z([3,'../../static/iconfont/fengxianpianhaoceshi.png'])
Z([3,'测试'])
Z(z[46])
Z([3,'消息'])
Z([3,'../../static/iconfont/kefu.png'])
Z([3,'客服'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'cart-list'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'cartList']])
Z([3,'id'])
Z([[4],[[5],[[5],[1,'cart-item']],[[2,'?:'],[[2,'!=='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'cartList']],[3,'length']],[1,1]]],[1,'b-b'],[1,'']]]])
Z([3,'checkbox'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'yticon icon-xuanzhong2 chex']],[[2,'?:'],[[6],[[7],[3,'item']],[3,'checked']],[1,'checked'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'check']],[[4],[[5],[[5],[1,'item']],[[7],[3,'index']]]]]]]]]]]])
Z([3,'image-warpper'])
Z(z[8])
Z(z[8])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'loaded']]]])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'load']],[[4],[[5],[[4],[[5],[[5],[1,'onImageLoad']],[[4],[[5],[[5],[1,'cartList']],[[7],[3,'index']]]]]]]]]]],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'onImageError']],[[4],[[5],[[5],[1,'cartList']],[[7],[3,'index']]]]]]]]]]]])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'item']],[3,'image']])
Z([3,'cart-right'])
Z([3,'clamp title'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'clamp arrt'])
Z([a,[[6],[[7],[3,'item']],[3,'attr_val']]])
Z([3,'price'])
Z([a,[[2,'+'],[1,'￥'],[[6],[[7],[3,'item']],[3,'price']]]])
Z([3,'__l'])
Z(z[8])
Z([3,'step'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^eventChange']],[[4],[[5],[[4],[[5],[1,'numberChange']]]]]]]]])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'number']],[[6],[[7],[3,'item']],[3,'stock']]],[1,true],[1,false]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'number']],[1,1]])
Z([[6],[[7],[3,'item']],[3,'stock']])
Z([1,1])
Z([[2,'?:'],[[2,'>'],[[6],[[7],[3,'item']],[3,'number']],[[6],[[7],[3,'item']],[3,'stock']]],[[6],[[7],[3,'item']],[3,'stock']],[[6],[[7],[3,'item']],[3,'number']]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z(z[8])
Z([3,'del-btn yticon icon-fork'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'deleteCartItem']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'action-section'])
Z(z[8])
Z([[4],[[5],[[5],[1,'yticon icon-xuanzhong2 chexs']],[[2,'?:'],[[7],[3,'allChecked']],[1,'checked'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'check']],[[4],[[5],[1,'all']]]]]]]]]]])
Z(z[8])
Z([[4],[[5],[[5],[1,'clear-btn']],[[2,'?:'],[[7],[3,'allChecked']],[1,'show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'deleteList']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'清空'])
Z([3,'total-box'])
Z(z[23])
Z([a,[[2,'+'],[1,'￥'],[[7],[3,'total']]]])
Z([3,'coupon'])
Z([3,'优惠:'])
Z([3,'20'])
Z([3,'元'])
Z(z[8])
Z([3,'no-border confirm-btn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'go']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'去结算'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'shopList'])
Z([3,'text-area'])
Z([3,'input_search'])
Z([3,'../../static/image/search.png'])
Z([3,'width:48rpx;height:48rpx;'])
Z([3,'search'])
Z([3,'请输入商品关键字'])
Z([3,'color:#ccc;'])
Z([3,'text'])
Z([3,'goodsBox'])
Z([3,'__l'])
Z([[7],[3,'goodsLists']])
Z([3,'1'])
Z(z[10])
Z([[7],[3,'status']])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/goodsList/goodsList.wxml','./components/search/search.wxml','./components/uni-load-more/uni-load-more.wxml','./components/uni-number-box.wxml','./pages/classify/classify.wxml','./pages/index/index.wxml','./pages/main/main.wxml','./pages/shop/shop.wxml','./pages/shop/shopList/shopList.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_n('view')
_rz(z,cI,'class',5,cF,fE,gg)
var oJ=_n('view')
_rz(z,oJ,'class',6,cF,fE,gg)
var lK=_mz(z,'image',['class',7,'src',1],[],cF,fE,gg)
_(oJ,lK)
_(cI,oJ)
var aL=_n('view')
_rz(z,aL,'class',9,cF,fE,gg)
var tM=_oz(z,10,cF,fE,gg)
_(aL,tM)
_(cI,aL)
var eN=_n('view')
_rz(z,eN,'class',11,cF,fE,gg)
var bO=_n('text')
_rz(z,bO,'class',12,cF,fE,gg)
var oP=_oz(z,13,cF,fE,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('text')
_rz(z,xQ,'class',14,cF,fE,gg)
var oR=_oz(z,15,cF,fE,gg)
_(xQ,oR)
_(eN,xQ)
_(cI,eN)
_(hG,cI)
return hG
}
xC.wxXCkey=2
_2z(z,3,oD,e,s,gg,xC,'goods_item','index','index')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_n('view')
_rz(z,hU,'class',1,e,s,gg)
var oV=_mz(z,'view',['bindtap',2,'class',1,'data-event-opts',2],[],e,s,gg)
var cW=_mz(z,'image',['src',5,'style',1],[],e,s,gg)
_(oV,cW)
var oX=_n('slot')
_rz(z,oX,'name',7,e,s,gg)
_(oV,oX)
_(hU,oV)
_(cT,hU)
_(r,cT)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var aZ=_n('view')
_rz(z,aZ,'class',0,e,s,gg)
var t1=_mz(z,'view',['class',1,'hidden',1],[],e,s,gg)
var e2=_n('view')
_rz(z,e2,'class',3,e,s,gg)
var b3=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
_(e2,b3)
var o4=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
_(e2,o4)
var x5=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
_(e2,x5)
var o6=_mz(z,'view',['class',10,'style',1],[],e,s,gg)
_(e2,o6)
_(t1,e2)
var f7=_n('view')
_rz(z,f7,'class',12,e,s,gg)
var c8=_mz(z,'view',['class',13,'style',1],[],e,s,gg)
_(f7,c8)
var h9=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
_(f7,h9)
var o0=_mz(z,'view',['class',17,'style',1],[],e,s,gg)
_(f7,o0)
var cAB=_mz(z,'view',['class',19,'style',1],[],e,s,gg)
_(f7,cAB)
_(t1,f7)
var oBB=_n('view')
_rz(z,oBB,'class',21,e,s,gg)
var lCB=_mz(z,'view',['class',22,'style',1],[],e,s,gg)
_(oBB,lCB)
var aDB=_mz(z,'view',['class',24,'style',1],[],e,s,gg)
_(oBB,aDB)
var tEB=_mz(z,'view',['class',26,'style',1],[],e,s,gg)
_(oBB,tEB)
var eFB=_mz(z,'view',['class',28,'style',1],[],e,s,gg)
_(oBB,eFB)
_(t1,oBB)
_(aZ,t1)
var bGB=_mz(z,'text',['class',30,'style',1],[],e,s,gg)
var oHB=_oz(z,32,e,s,gg)
_(bGB,oHB)
_(aZ,bGB)
_(r,aZ)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var oJB=_n('view')
_rz(z,oJB,'class',0,e,s,gg)
var fKB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var cLB=_n('text')
_rz(z,cLB,'class',4,e,s,gg)
_(fKB,cLB)
_(oJB,fKB)
var hMB=_mz(z,'input',['bindblur',5,'class',1,'data-event-opts',2,'disabled',3,'type',4,'value',5],[],e,s,gg)
_(oJB,hMB)
var oNB=_mz(z,'view',['bindtap',11,'class',1,'data-event-opts',2],[],e,s,gg)
var cOB=_n('text')
_rz(z,cOB,'class',14,e,s,gg)
_(oNB,cOB)
_(oJB,oNB)
_(r,oJB)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var aRB=_mz(z,'scroll-view',['scrollY',-1,'class',1],[],e,s,gg)
var tSB=_v()
_(aRB,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oVB,bUB,gg)
var cZB=_oz(z,9,oVB,bUB,gg)
_(fYB,cZB)
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=2
_2z(z,4,eTB,e,s,gg,tSB,'item','__i0__','id')
_(lQB,aRB)
var h1B=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',10,'class',1,'data-event-opts',2,'scrollTop',3],[],e,s,gg)
var o2B=_v()
_(h1B,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_mz(z,'view',['class',18,'id',1],[],l5B,o4B,gg)
var b9B=_n('text')
_rz(z,b9B,'class',20,l5B,o4B,gg)
var o0B=_oz(z,21,l5B,o4B,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_n('view')
_rz(z,xAC,'class',22,l5B,o4B,gg)
var oBC=_v()
_(xAC,oBC)
var fCC=function(hEC,cDC,oFC,gg){
var oHC=_v()
_(oFC,oHC)
if(_oz(z,27,hEC,cDC,gg)){oHC.wxVkey=1
var lIC=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],hEC,cDC,gg)
var aJC=_n('image')
_rz(z,aJC,'src',31,hEC,cDC,gg)
_(lIC,aJC)
var tKC=_n('text')
var eLC=_oz(z,32,hEC,cDC,gg)
_(tKC,eLC)
_(lIC,tKC)
_(oHC,lIC)
}
oHC.wxXCkey=1
return oFC
}
oBC.wxXCkey=2
_2z(z,25,fCC,l5B,o4B,gg,oBC,'titem','__i2__','id')
_(e8B,xAC)
_(a6B,e8B)
return a6B
}
o2B.wxXCkey=2
_2z(z,16,c3B,e,s,gg,o2B,'item','__i1__','id')
_(lQB,h1B)
_(r,lQB)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oNC=_n('view')
_rz(z,oNC,'class',0,e,s,gg)
var xOC=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var oPC=_mz(z,'swiper',['circular',-1,'autoplay',3,'bindchange',1,'class',2,'data-event-opts',3,'duration',4,'indicatorActiveColor',5,'indicatorColor',6,'indicatorDots',7,'interval',8],[],e,s,gg)
var fQC=_v()
_(oPC,fQC)
var cRC=function(oTC,hSC,cUC,gg){
var lWC=_n('swiper-item')
_rz(z,lWC,'class',16,oTC,hSC,gg)
var aXC=_n('image')
_rz(z,aXC,'src',17,oTC,hSC,gg)
_(lWC,aXC)
_(cUC,lWC)
return cUC
}
fQC.wxXCkey=2
_2z(z,14,cRC,e,s,gg,fQC,'item','index','index')
_(xOC,oPC)
_(oNC,xOC)
var tYC=_n('view')
_rz(z,tYC,'class',18,e,s,gg)
var eZC=_v()
_(tYC,eZC)
var b1C=function(x3C,o2C,o4C,gg){
var c6C=_mz(z,'text',['bindtap',23,'class',1,'data-event-opts',2,'id',3],[],x3C,o2C,gg)
var h7C=_oz(z,27,x3C,o2C,gg)
_(c6C,h7C)
_(o4C,c6C)
return o4C
}
eZC.wxXCkey=2
_2z(z,21,b1C,e,s,gg,eZC,'items','index','index')
_(oNC,tYC)
var o8C=_n('view')
_rz(z,o8C,'class',28,e,s,gg)
var c9C=_n('view')
var o0C=_mz(z,'image',['mode',-1,'src',29],[],e,s,gg)
_(c9C,o0C)
var lAD=_n('text')
var aBD=_oz(z,30,e,s,gg)
_(lAD,aBD)
_(c9C,lAD)
_(o8C,c9C)
var tCD=_n('view')
var eDD=_mz(z,'image',['mode',-1,'src',31],[],e,s,gg)
_(tCD,eDD)
var bED=_n('text')
var oFD=_oz(z,32,e,s,gg)
_(bED,oFD)
_(tCD,bED)
_(o8C,tCD)
var xGD=_mz(z,'view',['bindtap',33,'data-event-opts',1],[],e,s,gg)
var oHD=_mz(z,'image',['mode',-1,'src',35],[],e,s,gg)
_(xGD,oHD)
var fID=_n('text')
var cJD=_oz(z,36,e,s,gg)
_(fID,cJD)
_(xGD,fID)
_(o8C,xGD)
_(oNC,o8C)
var hKD=_n('view')
_rz(z,hKD,'class',37,e,s,gg)
var oLD=_n('text')
_rz(z,oLD,'style',38,e,s,gg)
var cMD=_oz(z,39,e,s,gg)
_(oLD,cMD)
_(hKD,oLD)
var oND=_n('text')
_rz(z,oND,'style',40,e,s,gg)
var lOD=_oz(z,41,e,s,gg)
_(oND,lOD)
_(hKD,oND)
_(oNC,hKD)
var aPD=_n('view')
_rz(z,aPD,'class',42,e,s,gg)
var tQD=_v()
_(aPD,tQD)
var eRD=function(oTD,bSD,xUD,gg){
var fWD=_n('view')
_rz(z,fWD,'class',47,oTD,bSD,gg)
var hYD=_n('view')
_rz(z,hYD,'class',48,oTD,bSD,gg)
var c1D=_mz(z,'image',['mode',-1,'src',49],[],oTD,bSD,gg)
_(hYD,c1D)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,50,oTD,bSD,gg)){oZD.wxVkey=1
var o2D=_n('view')
_rz(z,o2D,'class',51,oTD,bSD,gg)
var l3D=_oz(z,52,oTD,bSD,gg)
_(o2D,l3D)
_(oZD,o2D)
}
oZD.wxXCkey=1
_(fWD,hYD)
var a4D=_n('text')
_rz(z,a4D,'class',53,oTD,bSD,gg)
var t5D=_oz(z,54,oTD,bSD,gg)
_(a4D,t5D)
_(fWD,a4D)
var cXD=_v()
_(fWD,cXD)
if(_oz(z,55,oTD,bSD,gg)){cXD.wxVkey=1
var e6D=_n('view')
_rz(z,e6D,'class',56,oTD,bSD,gg)
var b7D=_oz(z,57,oTD,bSD,gg)
_(e6D,b7D)
_(cXD,e6D)
}
else{cXD.wxVkey=2
var o8D=_n('view')
_rz(z,o8D,'class',58,oTD,bSD,gg)
_(cXD,o8D)
}
var x9D=_n('view')
_rz(z,x9D,'class',59,oTD,bSD,gg)
var o0D=_n('text')
var fAE=_oz(z,60,oTD,bSD,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_mz(z,'image',['mode',-1,'src',61,'style',1],[],oTD,bSD,gg)
_(x9D,cBE)
_(fWD,x9D)
cXD.wxXCkey=1
_(xUD,fWD)
return xUD
}
tQD.wxXCkey=2
_2z(z,45,eRD,e,s,gg,tQD,'items','index','index')
_(oNC,aPD)
var hCE=_mz(z,'view',['class',63,'style',1],[],e,s,gg)
var oDE=_n('view')
var cEE=_n('text')
_rz(z,cEE,'style',65,e,s,gg)
var oFE=_oz(z,66,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('text')
_rz(z,lGE,'style',67,e,s,gg)
var aHE=_oz(z,68,e,s,gg)
_(lGE,aHE)
_(oDE,lGE)
_(hCE,oDE)
var tIE=_n('view')
_rz(z,tIE,'style',69,e,s,gg)
var eJE=_n('text')
_rz(z,eJE,'style',70,e,s,gg)
var bKE=_oz(z,71,e,s,gg)
_(eJE,bKE)
_(tIE,eJE)
var oLE=_n('text')
_rz(z,oLE,'style',72,e,s,gg)
var xME=_oz(z,73,e,s,gg)
_(oLE,xME)
_(tIE,oLE)
_(hCE,tIE)
_(oNC,hCE)
var oNE=_n('view')
_rz(z,oNE,'class',74,e,s,gg)
var fOE=_v()
_(oNE,fOE)
var cPE=function(oRE,hQE,cSE,gg){
var lUE=_n('view')
_rz(z,lUE,'class',79,oRE,hQE,gg)
var tWE=_n('view')
_rz(z,tWE,'class',80,oRE,hQE,gg)
var bYE=_mz(z,'image',['mode',-1,'src',81],[],oRE,hQE,gg)
_(tWE,bYE)
var eXE=_v()
_(tWE,eXE)
if(_oz(z,82,oRE,hQE,gg)){eXE.wxVkey=1
var oZE=_n('view')
_rz(z,oZE,'class',83,oRE,hQE,gg)
var x1E=_oz(z,84,oRE,hQE,gg)
_(oZE,x1E)
_(eXE,oZE)
}
eXE.wxXCkey=1
_(lUE,tWE)
var o2E=_n('text')
_rz(z,o2E,'class',85,oRE,hQE,gg)
var f3E=_oz(z,86,oRE,hQE,gg)
_(o2E,f3E)
_(lUE,o2E)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,87,oRE,hQE,gg)){aVE.wxVkey=1
var c4E=_n('view')
_rz(z,c4E,'class',88,oRE,hQE,gg)
var h5E=_oz(z,89,oRE,hQE,gg)
_(c4E,h5E)
_(aVE,c4E)
}
else{aVE.wxVkey=2
var o6E=_n('view')
_rz(z,o6E,'class',90,oRE,hQE,gg)
_(aVE,o6E)
}
var c7E=_n('view')
_rz(z,c7E,'class',91,oRE,hQE,gg)
var o8E=_n('text')
var l9E=_oz(z,92,oRE,hQE,gg)
_(o8E,l9E)
_(c7E,o8E)
var a0E=_mz(z,'image',['mode',-1,'src',93,'style',1],[],oRE,hQE,gg)
_(c7E,a0E)
_(lUE,c7E)
aVE.wxXCkey=1
_(cSE,lUE)
return cSE
}
fOE.wxXCkey=2
_2z(z,77,cPE,e,s,gg,fOE,'items','index','index')
_(oNC,oNE)
var tAF=_n('view')
_rz(z,tAF,'class',95,e,s,gg)
var eBF=_mz(z,'image',['mode',-1,'src',96],[],e,s,gg)
_(tAF,eBF)
_(oNC,tAF)
var bCF=_n('view')
_rz(z,bCF,'class',97,e,s,gg)
var oDF=_n('view')
_rz(z,oDF,'class',98,e,s,gg)
var xEF=_oz(z,99,e,s,gg)
_(oDF,xEF)
_(bCF,oDF)
var oFF=_mz(z,'goods-list',['bind:__l',100,'goodsList',1,'vueId',2],[],e,s,gg)
_(bCF,oFF)
_(oNC,bCF)
var fGF=_n('view')
_(oNC,fGF)
var cHF=_mz(z,'uni-load-more',['bind:__l',103,'status',1,'vueId',2],[],e,s,gg)
_(oNC,cHF)
var hIF=_mz(z,'view',['bindtap',106,'class',1,'data-event-opts',2,'hidden',3],[],e,s,gg)
var oJF=_mz(z,'image',['mode',110,'src',1],[],e,s,gg)
_(hIF,oJF)
_(oNC,hIF)
_(r,oNC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oLF=_n('view')
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_n('view')
_rz(z,aNF,'class',1,e,s,gg)
var tOF=_n('view')
_rz(z,tOF,'class',2,e,s,gg)
var ePF=_mz(z,'image',['class',3,'src',1],[],e,s,gg)
_(tOF,ePF)
_(aNF,tOF)
var bQF=_n('view')
_rz(z,bQF,'class',5,e,s,gg)
var oRF=_n('text')
_rz(z,oRF,'class',6,e,s,gg)
var xSF=_oz(z,7,e,s,gg)
_(oRF,xSF)
_(bQF,oRF)
_(aNF,bQF)
_(lMF,aNF)
var oTF=_n('view')
_rz(z,oTF,'class',8,e,s,gg)
var fUF=_n('view')
_rz(z,fUF,'class',9,e,s,gg)
var cVF=_oz(z,10,e,s,gg)
_(fUF,cVF)
_(oTF,fUF)
var hWF=_n('view')
_rz(z,hWF,'class',11,e,s,gg)
var oXF=_oz(z,12,e,s,gg)
_(hWF,oXF)
_(oTF,hWF)
_(lMF,oTF)
_(oLF,lMF)
var cYF=_mz(z,'view',['bindtouchend',13,'bindtouchmove',1,'bindtouchstart',2,'class',3,'data-event-opts',4,'style',5],[],e,s,gg)
var oZF=_mz(z,'image',['class',19,'src',1],[],e,s,gg)
_(cYF,oZF)
var l1F=_n('view')
_rz(z,l1F,'class',21,e,s,gg)
var a2F=_n('view')
_rz(z,a2F,'class',22,e,s,gg)
var t3F=_oz(z,23,e,s,gg)
_(a2F,t3F)
_(l1F,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',24,e,s,gg)
var b5F=_n('view')
var o6F=_n('view')
var x7F=_oz(z,25,e,s,gg)
_(o6F,x7F)
var o8F=_n('text')
var f9F=_oz(z,26,e,s,gg)
_(o8F,f9F)
_(o6F,o8F)
_(b5F,o6F)
var c0F=_n('view')
var hAG=_oz(z,27,e,s,gg)
_(c0F,hAG)
_(b5F,c0F)
_(e4F,b5F)
var oBG=_n('view')
var cCG=_n('view')
var oDG=_oz(z,28,e,s,gg)
_(cCG,oDG)
_(oBG,cCG)
var lEG=_n('view')
var aFG=_oz(z,29,e,s,gg)
_(lEG,aFG)
_(oBG,lEG)
_(e4F,oBG)
var tGG=_n('view')
var eHG=_n('view')
var bIG=_oz(z,30,e,s,gg)
_(eHG,bIG)
var oJG=_n('text')
var xKG=_oz(z,31,e,s,gg)
_(oJG,xKG)
_(eHG,oJG)
_(tGG,eHG)
var oLG=_n('view')
var fMG=_oz(z,32,e,s,gg)
_(oLG,fMG)
_(tGG,oLG)
_(e4F,tGG)
var cNG=_n('view')
var hOG=_n('view')
var oPG=_oz(z,33,e,s,gg)
_(hOG,oPG)
var cQG=_n('text')
var oRG=_oz(z,34,e,s,gg)
_(cQG,oRG)
_(hOG,cQG)
_(cNG,hOG)
var lSG=_n('view')
var aTG=_oz(z,35,e,s,gg)
_(lSG,aTG)
_(cNG,lSG)
_(e4F,cNG)
_(l1F,e4F)
_(cYF,l1F)
var tUG=_n('view')
_rz(z,tUG,'class',36,e,s,gg)
var eVG=_n('view')
_rz(z,eVG,'class',37,e,s,gg)
var bWG=_oz(z,38,e,s,gg)
_(eVG,bWG)
_(tUG,eVG)
var oXG=_n('view')
_rz(z,oXG,'class',39,e,s,gg)
var xYG=_n('view')
var oZG=_n('view')
var f1G=_mz(z,'image',['mode',-1,'src',40],[],e,s,gg)
_(oZG,f1G)
_(xYG,oZG)
var c2G=_n('view')
var h3G=_oz(z,41,e,s,gg)
_(c2G,h3G)
_(xYG,c2G)
_(oXG,xYG)
var o4G=_n('view')
var c5G=_n('view')
var o6G=_mz(z,'image',['mode',-1,'src',42],[],e,s,gg)
_(c5G,o6G)
_(o4G,c5G)
var l7G=_n('view')
var a8G=_oz(z,43,e,s,gg)
_(l7G,a8G)
_(o4G,l7G)
_(oXG,o4G)
var t9G=_n('view')
var e0G=_n('view')
var bAH=_mz(z,'image',['mode',-1,'src',44],[],e,s,gg)
_(e0G,bAH)
_(t9G,e0G)
var oBH=_n('view')
var xCH=_oz(z,45,e,s,gg)
_(oBH,xCH)
_(t9G,oBH)
_(oXG,t9G)
var oDH=_n('view')
var fEH=_n('view')
var cFH=_mz(z,'image',['mode',-1,'src',46],[],e,s,gg)
_(fEH,cFH)
_(oDH,fEH)
var hGH=_n('view')
var oHH=_oz(z,47,e,s,gg)
_(hGH,oHH)
_(oDH,hGH)
_(oXG,oDH)
_(tUG,oXG)
_(cYF,tUG)
var cIH=_n('view')
_rz(z,cIH,'class',48,e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',49,e,s,gg)
var lKH=_oz(z,50,e,s,gg)
_(oJH,lKH)
_(cIH,oJH)
var aLH=_n('view')
_rz(z,aLH,'class',51,e,s,gg)
var tMH=_n('view')
var eNH=_n('view')
var bOH=_oz(z,52,e,s,gg)
_(eNH,bOH)
_(tMH,eNH)
var oPH=_n('view')
var xQH=_oz(z,53,e,s,gg)
_(oPH,xQH)
_(tMH,oPH)
_(aLH,tMH)
var oRH=_n('view')
var fSH=_n('view')
var cTH=_oz(z,54,e,s,gg)
_(fSH,cTH)
_(oRH,fSH)
var hUH=_n('view')
var oVH=_oz(z,55,e,s,gg)
_(hUH,oVH)
_(oRH,hUH)
_(aLH,oRH)
var cWH=_n('view')
var oXH=_n('view')
var lYH=_oz(z,56,e,s,gg)
_(oXH,lYH)
_(cWH,oXH)
var aZH=_n('view')
var t1H=_oz(z,57,e,s,gg)
_(aZH,t1H)
_(cWH,aZH)
_(aLH,cWH)
_(cIH,aLH)
_(cYF,cIH)
var e2H=_n('view')
_rz(z,e2H,'class',58,e,s,gg)
var b3H=_n('view')
_rz(z,b3H,'class',59,e,s,gg)
var o4H=_oz(z,60,e,s,gg)
_(b3H,o4H)
_(e2H,b3H)
var x5H=_n('view')
_rz(z,x5H,'class',61,e,s,gg)
var o6H=_n('view')
var f7H=_n('view')
var c8H=_mz(z,'image',['mode',-1,'src',62],[],e,s,gg)
_(f7H,c8H)
_(o6H,f7H)
var h9H=_n('view')
var o0H=_oz(z,63,e,s,gg)
_(h9H,o0H)
_(o6H,h9H)
_(x5H,o6H)
var cAI=_n('view')
var oBI=_n('view')
var lCI=_mz(z,'image',['mode',-1,'src',64],[],e,s,gg)
_(oBI,lCI)
_(cAI,oBI)
var aDI=_n('view')
var tEI=_oz(z,65,e,s,gg)
_(aDI,tEI)
_(cAI,aDI)
_(x5H,cAI)
var eFI=_n('view')
var bGI=_n('view')
var oHI=_mz(z,'image',['mode',-1,'src',66],[],e,s,gg)
_(bGI,oHI)
_(eFI,bGI)
var xII=_n('view')
var oJI=_oz(z,67,e,s,gg)
_(xII,oJI)
_(eFI,xII)
_(x5H,eFI)
var fKI=_n('view')
_(x5H,fKI)
var cLI=_n('view')
_(x5H,cLI)
_(e2H,x5H)
_(cYF,e2H)
_(oLF,cYF)
_(r,oLF)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oNI=_n('view')
_rz(z,oNI,'class',0,e,s,gg)
var cOI=_n('view')
_rz(z,cOI,'class',1,e,s,gg)
var oPI=_v()
_(cOI,oPI)
var lQI=function(tSI,aRI,eTI,gg){
var oVI=_n('view')
_rz(z,oVI,'class',6,tSI,aRI,gg)
var xWI=_n('view')
_rz(z,xWI,'class',7,tSI,aRI,gg)
var oXI=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],tSI,aRI,gg)
_(xWI,oXI)
_(oVI,xWI)
var fYI=_n('view')
_rz(z,fYI,'class',11,tSI,aRI,gg)
var cZI=_mz(z,'image',['lazyLoad',-1,'binderror',12,'bindload',1,'class',2,'data-event-opts',3,'mode',4,'src',5],[],tSI,aRI,gg)
_(fYI,cZI)
_(oVI,fYI)
var h1I=_n('view')
_rz(z,h1I,'class',18,tSI,aRI,gg)
var o2I=_n('text')
_rz(z,o2I,'class',19,tSI,aRI,gg)
var c3I=_oz(z,20,tSI,aRI,gg)
_(o2I,c3I)
_(h1I,o2I)
var o4I=_n('text')
_rz(z,o4I,'class',21,tSI,aRI,gg)
var l5I=_oz(z,22,tSI,aRI,gg)
_(o4I,l5I)
_(h1I,o4I)
var a6I=_n('text')
_rz(z,a6I,'class',23,tSI,aRI,gg)
var t7I=_oz(z,24,tSI,aRI,gg)
_(a6I,t7I)
_(h1I,a6I)
var e8I=_mz(z,'uni-number-box',['bind:__l',25,'bind:eventChange',1,'class',2,'data-event-opts',3,'index',4,'isMax',5,'isMin',6,'max',7,'min',8,'value',9,'vueId',10],[],tSI,aRI,gg)
_(h1I,e8I)
_(oVI,h1I)
var b9I=_mz(z,'text',['bindtap',36,'class',1,'data-event-opts',2],[],tSI,aRI,gg)
_(oVI,b9I)
_(eTI,oVI)
return eTI
}
oPI.wxXCkey=4
_2z(z,4,lQI,e,s,gg,oPI,'item','index','id')
_(oNI,cOI)
var o0I=_n('view')
_rz(z,o0I,'class',39,e,s,gg)
var xAJ=_n('view')
var oBJ=_mz(z,'view',['catchtap',40,'class',1,'data-event-opts',2],[],e,s,gg)
_(xAJ,oBJ)
var fCJ=_mz(z,'view',['catchtap',43,'class',1,'data-event-opts',2],[],e,s,gg)
var cDJ=_oz(z,46,e,s,gg)
_(fCJ,cDJ)
_(xAJ,fCJ)
_(o0I,xAJ)
var hEJ=_n('view')
_rz(z,hEJ,'class',47,e,s,gg)
var oFJ=_n('text')
_rz(z,oFJ,'class',48,e,s,gg)
var cGJ=_oz(z,49,e,s,gg)
_(oFJ,cGJ)
_(hEJ,oFJ)
var oHJ=_n('text')
_rz(z,oHJ,'class',50,e,s,gg)
var lIJ=_oz(z,51,e,s,gg)
_(oHJ,lIJ)
var aJJ=_n('text')
var tKJ=_oz(z,52,e,s,gg)
_(aJJ,tKJ)
_(oHJ,aJJ)
var eLJ=_oz(z,53,e,s,gg)
_(oHJ,eLJ)
_(hEJ,oHJ)
_(o0I,hEJ)
var bMJ=_mz(z,'button',['bindtap',54,'class',1,'data-event-opts',2],[],e,s,gg)
var oNJ=_oz(z,57,e,s,gg)
_(bMJ,oNJ)
_(o0I,bMJ)
_(oNI,o0I)
_(r,oNI)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oPJ=_n('view')
_rz(z,oPJ,'class',0,e,s,gg)
var fQJ=_n('view')
_rz(z,fQJ,'class',1,e,s,gg)
var cRJ=_n('view')
_rz(z,cRJ,'class',2,e,s,gg)
var hSJ=_mz(z,'image',['src',3,'style',1],[],e,s,gg)
_(cRJ,hSJ)
var oTJ=_mz(z,'input',['confirmType',5,'placeholder',1,'placeholderStyle',2,'type',3],[],e,s,gg)
_(cRJ,oTJ)
_(fQJ,cRJ)
_(oPJ,fQJ)
var cUJ=_n('view')
_rz(z,cUJ,'class',9,e,s,gg)
var oVJ=_mz(z,'goods-list',['bind:__l',10,'goodsList',1,'vueId',2],[],e,s,gg)
_(cUJ,oVJ)
_(oPJ,cUJ)
var lWJ=_mz(z,'uni-load-more',['bind:__l',13,'status',1,'vueId',2],[],e,s,gg)
_(oPJ,lWJ)
_(r,oPJ)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\n@font-face { font-family: yticon; font-weight: normal; font-style: normal; src: url(\x22https://at.alicdn.com/t/font_1078604_w4kpxh0rafi.ttf\x22) format(\x22truetype\x22); }\n.",[1],"yticon { font-family: \x22yticon\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-yiguoqi1:before { content: \x22\\E700\x22; }\n.",[1],"icon-iconfontshanchu1:before { content: \x22\\E619\x22; }\n.",[1],"icon-iconfontweixin:before { content: \x22\\E611\x22; }\n.",[1],"icon-alipay:before { content: \x22\\E636\x22; }\n.",[1],"icon-shang:before { content: \x22\\E624\x22; }\n.",[1],"icon-shouye:before { content: \x22\\E626\x22; }\n.",[1],"icon-shanchu4:before { content: \x22\\E622\x22; }\n.",[1],"icon-xiaoxi:before { content: \x22\\E618\x22; }\n.",[1],"icon-jiantour-copy:before { content: \x22\\E600\x22; }\n.",[1],"icon-fenxiang2:before { content: \x22\\E61E\x22; }\n.",[1],"icon-pingjia:before { content: \x22\\E67B\x22; }\n.",[1],"icon-daifukuan:before { content: \x22\\E68F\x22; }\n.",[1],"icon-pinglun-copy:before { content: \x22\\E612\x22; }\n.",[1],"icon-dianhua-copy:before { content: \x22\\E621\x22; }\n.",[1],"icon-shoucang:before { content: \x22\\E645\x22; }\n.",[1],"icon-xuanzhong2:before { content: \x22\\E62F\x22; }\n.",[1],"icon-gouwuche_:before { content: \x22\\E630\x22; }\n.",[1],"icon-icon-test:before { content: \x22\\E60C\x22; }\n.",[1],"icon-icon-test1:before { content: \x22\\E632\x22; }\n.",[1],"icon-bianji:before { content: \x22\\E646\x22; }\n.",[1],"icon-jiazailoading-A:before { content: \x22\\E8FC\x22; }\n.",[1],"icon-zuoshang:before { content: \x22\\E613\x22; }\n.",[1],"icon-jia2:before { content: \x22\\E60A\x22; }\n.",[1],"icon-huifu:before { content: \x22\\E68B\x22; }\n.",[1],"icon-sousuo:before { content: \x22\\E7CE\x22; }\n.",[1],"icon-arrow-fine-up:before { content: \x22\\E601\x22; }\n.",[1],"icon-hot:before { content: \x22\\E60E\x22; }\n.",[1],"icon-lishijilu:before { content: \x22\\E6B9\x22; }\n.",[1],"icon-zhengxinchaxun-zhifubaoceping-:before { content: \x22\\E616\x22; }\n.",[1],"icon-naozhong:before { content: \x22\\E64A\x22; }\n.",[1],"icon-xiatubiao--copy:before { content: \x22\\E608\x22; }\n.",[1],"icon-shoucang_xuanzhongzhuangtai:before { content: \x22\\E6A9\x22; }\n.",[1],"icon-jia1:before { content: \x22\\E61C\x22; }\n.",[1],"icon-bangzhu1:before { content: \x22\\E63D\x22; }\n.",[1],"icon-arrow-left-bottom:before { content: \x22\\E602\x22; }\n.",[1],"icon-arrow-right-bottom:before { content: \x22\\E603\x22; }\n.",[1],"icon-arrow-left-top:before { content: \x22\\E604\x22; }\n.",[1],"icon-icon--:before { content: \x22\\E744\x22; }\n.",[1],"icon-zuojiantou-up:before { content: \x22\\E605\x22; }\n.",[1],"icon-xia:before { content: \x22\\E62D\x22; }\n.",[1],"icon--jianhao:before { content: \x22\\E60B\x22; }\n.",[1],"icon-weixinzhifu:before { content: \x22\\E61A\x22; }\n.",[1],"icon-comment:before { content: \x22\\E64F\x22; }\n.",[1],"icon-weixin:before { content: \x22\\E61F\x22; }\n.",[1],"icon-fenlei1:before { content: \x22\\E620\x22; }\n.",[1],"icon-erjiye-yucunkuan:before { content: \x22\\E623\x22; }\n.",[1],"icon-Group-:before { content: \x22\\E688\x22; }\n.",[1],"icon-you:before { content: \x22\\E606\x22; }\n.",[1],"icon-forward:before { content: \x22\\E607\x22; }\n.",[1],"icon-tuijian:before { content: \x22\\E610\x22; }\n.",[1],"icon-bangzhu:before { content: \x22\\E679\x22; }\n.",[1],"icon-share:before { content: \x22\\E656\x22; }\n.",[1],"icon-yiguoqi:before { content: \x22\\E997\x22; }\n.",[1],"icon-shezhi1:before { content: \x22\\E61D\x22; }\n.",[1],"icon-fork:before { content: \x22\\E61B\x22; }\n.",[1],"icon-kafei:before { content: \x22\\E66A\x22; }\n.",[1],"icon-iLinkapp-:before { content: \x22\\E654\x22; }\n.",[1],"icon-saomiao:before { content: \x22\\E60D\x22; }\n.",[1],"icon-shezhi:before { content: \x22\\E60F\x22; }\n.",[1],"icon-shouhoutuikuan:before { content: \x22\\E631\x22; }\n.",[1],"icon-gouwuche:before { content: \x22\\E609\x22; }\n.",[1],"icon-dizhi:before { content: \x22\\E614\x22; }\n.",[1],"icon-fenlei:before { content: \x22\\E706\x22; }\n.",[1],"icon-xingxing:before { content: \x22\\E70B\x22; }\n.",[1],"icon-tuandui:before { content: \x22\\E633\x22; }\n.",[1],"icon-zuanshi:before { content: \x22\\E615\x22; }\n.",[1],"icon-zuo:before { content: \x22\\E63C\x22; }\n.",[1],"icon-shoucang2:before { content: \x22\\E62E\x22; }\n.",[1],"icon-shouhuodizhi:before { content: \x22\\E712\x22; }\n.",[1],"icon-yishouhuo:before { content: \x22\\E71A\x22; }\n.",[1],"icon-dianzan-ash:before { content: \x22\\E617\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/goodsList/goodsList.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"goods-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-flex-flow: wrap; -ms-flex-flow: wrap; flex-flow: wrap; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,0]," ",[0,30],"; }\n.",[1],"goods-wrapper .",[1],"goods-item { width: 48%; height: ",[0,460],"; border-radius: ",[0,20],"; background-color: #fff; overflow: hidden; -webkit-box-shadow: 0px ",[0,2]," ",[0,24]," rgba(0, 0, 0, 0.1); box-shadow: 0px ",[0,2]," ",[0,24]," rgba(0, 0, 0, 0.1); margin-bottom: ",[0,30],"; }\n.",[1],"goods-wrapper .",[1],"goods-item:nth-last-child(1), .",[1],"goods-wrapper .",[1],"goods-item:nth-last-child(2) { margin-bottom: 0; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsImg { height: ",[0,300],"; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsImg .",[1],"goods-img { width: 100%; height: ",[0,300],"; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsTitle { display: -webkit-box; height: ",[0,90],"; -webkit-box-orient: vertical; -webkit-line-clamp: 2; padding: 0 ",[0,20],"; overflow: hidden; font-size: ",[0,26],"; line-height: ",[0,35],"; margin: 0; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsPrice { height: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding: 0 ",[0,26],"; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsPrice .",[1],"price { color: #13227a; font-size: ",[0,30],"; font-weight: bold; }\n.",[1],"goods-wrapper .",[1],"goods-item .",[1],"goodsPrice .",[1],"buyNum { color: #807c87; font-size: ",[0,24],"; }\n",],undefined,{path:"./components/goodsList/goodsList.wxss"});    
__wxAppCode__['components/goodsList/goodsList.wxml']=$gwx('./components/goodsList/goodsList.wxml');

__wxAppCode__['components/search/search.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"text-area { height: ",[0,100],"; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"text-area \x3e .",[1],"input_search { height: ",[0,70],"; width: 90%; border: #ccc solid ",[0,1],"; border-radius: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-left: ",[0,20],"; }\n.",[1],"text-area \x3e .",[1],"input_search wx-input { margin-left: ",[0,40],"; }\n",],undefined,{path:"./components/search/search.wxss"});    
__wxAppCode__['components/search/search.wxml']=$gwx('./components/search/search.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-load-more { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: ",[0,80],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }\n.",[1],"uni-load-more__text { font-size: ",[0,28],"; color: #999 }\n.",[1],"uni-load-more__img { height: 24px; width: 24px; margin-right: 10px }\n.",[1],"uni-load-more__img\x3e.",[1],"load { position: absolute }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper { width: 6px; height: 2px; border-top-left-radius: 1px; border-bottom-left-radius: 1px; background: #999; position: absolute; opacity: .2; -webkit-transform-origin: 50%; -ms-transform-origin: 50%; transform-origin: 50%; -webkit-animation: load 1.56s ease infinite; animation: load 1.56s ease infinite }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); top: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); top: 11px; right: 0 }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); bottom: 2px; left: 9px }\n.",[1],"uni-load-more__img\x3e.",[1],"load .",[1],"uni-load-view_wrapper:nth-child(4) { top: 11px; left: 0 }\n.",[1],"load1, .",[1],"load2, .",[1],"load3 { height: 24px; width: 24px }\n.",[1],"load2 { -webkit-transform: rotate(30deg); -ms-transform: rotate(30deg); transform: rotate(30deg) }\n.",[1],"load3 { -webkit-transform: rotate(60deg); -ms-transform: rotate(60deg); transform: rotate(60deg) }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: 0s; animation-delay: 0s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: .13s; animation-delay: .13s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(1) { -webkit-animation-delay: .26s; animation-delay: .26s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .39s; animation-delay: .39s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .52s; animation-delay: .52s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(2) { -webkit-animation-delay: .65s; animation-delay: .65s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: .78s; animation-delay: .78s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: .91s; animation-delay: .91s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(3) { -webkit-animation-delay: 1.04s; animation-delay: 1.04s }\n.",[1],"load1 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.17s; animation-delay: 1.17s }\n.",[1],"load2 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.3s; animation-delay: 1.3s }\n.",[1],"load3 .",[1],"uni-load-view_wrapper:nth-child(4) { -webkit-animation-delay: 1.43s; animation-delay: 1.43s }\n@-webkit-keyframes load { 0% { opacity: 1 }\n100% { opacity: .2 }\n}",],undefined,{path:"./components/uni-load-more/uni-load-more.wxss"});    
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['components/uni-number-box.wxss']=setCssToHead([".",[1],"uni-numbox { position:absolute; left: ",[0,30],"; bottom: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width:",[0,230],"; height: ",[0,70],"; background:#f5f5f5; }\n.",[1],"uni-numbox-minus, .",[1],"uni-numbox-plus { margin: 0; background-color: #f5f5f5; width: ",[0,70],"; height: 100%; line-height: ",[0,70],"; text-align: center; position: relative; }\n.",[1],"uni-numbox-minus .",[1],"yticon, .",[1],"uni-numbox-plus .",[1],"yticon{ font-size: ",[0,36],"; color: #555; }\n.",[1],"uni-numbox-minus { border-right: none; border-top-left-radius: ",[0,6],"; border-bottom-left-radius: ",[0,6],"; }\n.",[1],"uni-numbox-plus { border-left: none; border-top-right-radius: ",[0,6],"; border-bottom-right-radius: ",[0,6],"; }\n.",[1],"uni-numbox-value { position: relative; background-color: #f5f5f5; width: ",[0,90],"; height: ",[0,50],"; text-align: center; padding: 0; font-size: ",[0,30],"; }\n.",[1],"uni-numbox-disabled.",[1],"yticon { color: #d6d6d6; }\n",],undefined,{path:"./components/uni-number-box.wxss"});    
__wxAppCode__['components/uni-number-box.wxml']=$gwx('./components/uni-number-box.wxml');

__wxAppCode__['pages/classify/classify.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody, .",[1],"content { height: 100%; background-color: #f8f8f8; }\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"left-aside { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; width: ",[0,200],"; height: 100%; background-color: #fff; }\n.",[1],"f-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; width: 100%; height: ",[0,100],"; font-size: ",[0,28],"; color: #666; position: relative; }\n.",[1],"f-item.",[1],"active { color: #13227a; background: #f8f8f8; }\n.",[1],"f-item.",[1],"active:before { content: \x27\x27; position: absolute; left: 50%; -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%); height: ",[0,48],"; width: 80%; background-color: rgba(0, 0, 0, 0.2); border-radius: ",[0,30],"; }\n.",[1],"right-aside { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; padding: ",[0,0]," ",[0,0]," ",[0,0]," ",[0,20],"; margin-bottom: ",[0,60],"; }\n.",[1],"s-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: ",[0,70],"; padding-top: ",[0,8],"; font-size: ",[0,28],"; color: #333; }\n.",[1],"t-list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; width: 100%; background: #fff; padding-top: ",[0,12],"; }\n.",[1],"t-list:after { content: \x27\x27; -webkit-box-flex: 99; -webkit-flex: 99; -ms-flex: 99; flex: 99; height: 0; }\n.",[1],"t-item { -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,176],"; font-size: ",[0,26],"; color: #666; padding-bottom: ",[0,20],"; }\n.",[1],"t-item wx-image { width: ",[0,140],"; height: ",[0,140],"; }\n",],undefined,{path:"./pages/classify/classify.wxss"});    
__wxAppCode__['pages/classify/classify.wxml']=$gwx('./pages/classify/classify.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { background-color: #f8f8f8; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"index { -webkit-box-sizing: border-box; box-sizing: border-box; padding-bottom: ",[0,88],"; }\n.",[1],"index .",[1],"to-top { width: ",[0,90],"; height: ",[0,90],"; line-height: ",[0,90],"; border-radius: 50%; background-color: #fff; position: fixed; right: ",[0,23],"; bottom: ",[0,300],"; z-index: 9999; -webkit-box-shadow: 0px 3px 5px 3px #ccc; box-shadow: 0px 3px 5px 3px #ccc; text-align: center; }\n.",[1],"index .",[1],"to-top wx-image { width: ",[0,36],"; height: auto; }\n.",[1],"index .",[1],"nav { height: ",[0,70],"; color: #13227a; font-size: ",[0,32],"; font-weight: bold; background-color: #fff; margin: ",[0,10]," ",[0,0]," ",[0,14]," ",[0,0],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: 0 ",[0,20],"; }\n.",[1],"index .",[1],"nav .",[1],"big { font-size: ",[0,38],"; }\n.",[1],"index .",[1],"nav_hot { height: ",[0,160],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"index .",[1],"nav_hot \x3e wx-view { text-align: center; padding: ",[0,10]," ",[0,0]," ",[0,30]," ",[0,0],"; background-color: #fff; margin-top: ",[0,10],"; -webkit-box-sizing: border-box; box-sizing: border-box; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"index .",[1],"nav_hot \x3e wx-view wx-image { width: ",[0,90],"; height: ",[0,76],"; }\n.",[1],"index .",[1],"nav_hot \x3e wx-view wx-text { display: block; font-size: ",[0,28],"; color: #666; }\n.",[1],"index .",[1],"title { color: #13227a; background-color: #fff; margin: ",[0,10]," 0; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20]," ",[0,30],"; }\n.",[1],"index .",[1],"list-content { -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,0]," ",[0,30],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"index .",[1],"list-content .",[1],"list-item { height: ",[0,360],"; width: ",[0,225],"; overflow: hidden; background-color: #fff; margin-top: ",[0,15],"; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"image { width: 100%; height: ",[0,220],"; position: relative; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"image wx-image { width: 100%; height: 100%; position: absolute; top: 0; left: 0; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"image .",[1],"flash { height: ",[0,45],"; line-height: ",[0,45],"; width: 100%; position: absolute; bottom: 0; background-color: rgba(0, 0, 122, 0.9); font-size: ",[0,24],"; color: #fff; text-align: center; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"texts { overflow: hidden; white-space: nowrap; font-size: ",[0,26],"; color: #333; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"manxs { width: ",[0,100],"; height: ",[0,36],"; line-height: ",[0,36],"; font-size: ",[0,24],"; letter-spacing: ",[0,2],"; border: #13227a solid ",[0,1],"; color: #13227a; text-align: center; border-radius: ",[0,6],"; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"manx { height: ",[0,36],"; }\n.",[1],"index .",[1],"list-content .",[1],"list-item .",[1],"shop { padding: 0 ",[0,5],"; color: #13227a; font-size: ",[0,26],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; font-weight: bold; letter-spacing: ",[0,2],"; margin-top: ",[0,5],"; }\n.",[1],"index .",[1],"banner { height: ",[0,200],"; width: 100%; padding: ",[0,30],"; background-color: #fff; -webkit-box-sizing: border-box; box-sizing: border-box; margin: ",[0,30]," auto; }\n.",[1],"index .",[1],"banner \x3e wx-image { width: 100%; height: 100%; }\n.",[1],"index .",[1],"shopList { height: ",[0,100],"; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; color: #13227a; font-size: ",[0,36],"; }\n.",[1],"index .",[1],"goodsBox { padding: ",[0,20]," 0; }\n.",[1],"apps { -webkit-transition: .4s; -o-transition: .4s; transition: .4s; background-color: #DD524D; padding-top: ",[0,40],"; }\n.",[1],"carousel { padding: ",[0,100]," ",[0,0]," ",[0,20]," ",[0,0],"; }\n.",[1],"carousel { width: 100%; height: ",[0,300],"; }\n.",[1],"carousel .",[1],"carousel-item { width: 100%; height: 100%; padding: 0 ",[0,28],"; -webkit-box-sizing: border-box; box-sizing: border-box; overflow: hidden; }\n.",[1],"carousel wx-image { width: 100%; height: 100%; border-radius: ",[0,10],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/main/main.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { width: 100%; height: 100%; background-color: #f5f5f9; }\n.",[1],"cover-container { width: 100%; background: #ccc; margin-top: ",[0,-200],"; padding: 0 ",[0,30],"; position: relative; background: #f5f5f5; padding-bottom: ",[0,88],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"cover-container .",[1],"arc { position: absolute; left: 0; top: ",[0,-32],"; width: 100%; height: ",[0,36],"; }\n.",[1],"cover-container .",[1],"my-assets { background-color: #fff; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 ",[0,30],"; width: 100%; margin-top: ",[0,20],"; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass { height: ",[0,80],"; width: 100%; font-size: ",[0,32],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-bottom: ",[0,1]," solid #f2f2f2; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: space-evenly; -webkit-justify-content: space-evenly; -ms-flex-pack: space-evenly; justify-content: space-evenly; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list \x3e wx-view { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; font-size: ",[0,28],"; text-align: center; margin: ",[0,30]," ",[0,0],"; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list \x3e wx-view \x3e wx-view:nth-child(1) { font-size: ",[0,32],"; font-weight: bold; color: #123597; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list \x3e wx-view \x3e wx-view:nth-child(1) wx-image { width: ",[0,56],"; height: ",[0,56],"; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list \x3e wx-view \x3e wx-view:nth-child(1) wx-text { font-size: ",[0,26],"; font-weight: 500; }\n.",[1],"cover-container .",[1],"my-assets .",[1],"ass_list \x3e wx-view \x3e wx-view:nth-child(2) { color: #999; margin-top: ",[0,10],"; }\n.",[1],"user-section { height: ",[0,460],"; padding: ",[0,80]," ",[0,30]," 0; position: relative; background: #123597; }\n.",[1],"user-info-box { height: ",[0,180],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; z-index: 1; }\n.",[1],"user-info-box .",[1],"portrait { width: ",[0,130],"; height: ",[0,130],"; border: ",[0,5]," solid #fff; border-radius: 50%; }\n.",[1],"user-info-box .",[1],"username { font-size: ",[0,42],"; color: rgba(255, 255, 255, 0.7); margin-left: ",[0,20],"; }\n.",[1],"vip-card-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: #f7d680; height: ",[0,280],"; background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.6))); background: -o-linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)); background: linear-gradient(left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)); border-radius: ",[0,16]," ",[0,16]," 0 0; overflow: hidden; position: relative; padding: ",[0,20]," ",[0,24],"; }\n.",[1],"vip-card-box .",[1],"card-bg { position: absolute; top: ",[0,20],"; right: 0; width: ",[0,380],"; height: ",[0,200],"; }\n.",[1],"vip-card-box .",[1],"b-btn { position: absolute; right: ",[0,20],"; top: ",[0,20],"; width: ",[0,160],"; height: ",[0,50],"; text-align: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,26],"; color: #36343c; border-radius: 20px; background: -webkit-gradient(linear, left top, right top, from(#f9e6af), to(#ffd465)); background: -o-linear-gradient(left, #f9e6af, #ffd465); background: linear-gradient(left, #f9e6af, #ffd465); z-index: 1; }\n.",[1],"vip-card-box .",[1],"tit { font-size: ",[0,30],"; color: #f7d680; margin-bottom: ",[0,28],"; }\n.",[1],"vip-card-box .",[1],"e-b { font-size: ",[0,28],"; color: #d8cba9; margin-top: ",[0,10],"; }\n",],undefined,{path:"./pages/main/main.wxss"});    
__wxAppCode__['pages/main/main.wxml']=$gwx('./pages/main/main.wxml');

__wxAppCode__['pages/shop/shop.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { width: 100%; height: 100%; background-color: #F5F5F5; }\n.",[1],"container { padding-bottom: ",[0,190],"; }\n.",[1],"action-section { position: fixed; bottom: 0; left: 0; z-index: 99; height: ",[0,120],"; width: 100%; padding: 0 ",[0,30],"; background: white; border-top: ",[0,1]," solid #eee; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"action-section .",[1],"clear-btn { position: absolute; left: ",[0,32],"; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); z-index: 4; width: ",[0,0],"; height: ",[0,54],"; line-height: ",[0,54],"; padding-left: ",[0,100],"; font-size: ",[0,26],"; color: #fff; background-color: rgba(0, 0, 0, 0.6); border-radius: 0 50px 50px 0; opacity: 0; -webkit-transition: .2s; -o-transition: .2s; transition: .2s; }\n.",[1],"action-section .",[1],"clear-btn.",[1],"show { opacity: 1; width: ",[0,100],"; }\n.",[1],"total-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"total-box .",[1],"price { font-size: ",[0,28],"; color: #13227a; }\n.",[1],"total-box .",[1],"coupon { font-size: ",[0,26],"; }\n.",[1],"total-box .",[1],"coupon wx-text { color: #666; }\n.",[1],"confirm-btn { padding: 0 ",[0,38],"; margin: 0; border-radius: 100px; height: ",[0,80],"; line-height: ",[0,80],"; font-size: ",[0,28],"; background: #13227a; }\n.",[1],"checkbox { width: ",[0,120],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"chexs, .",[1],"chex { padding: ",[0,6],"; line-height: 2; font-size: ",[0,44],"; color: #ccc; border-radius: 50px; position: relative; z-index: 99; background-color: #FFFFFF; }\n.",[1],"chexs { padding: ",[0,6]," ",[0,12],"; font-size: ",[0,54],"; }\n.",[1],"checked { color: #13227a; }\n.",[1],"clamp { overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; display: block; }\n.",[1],"cart-list { -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,20],"; }\n.",[1],"cart-item { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-sizing: border-box; box-sizing: border-box; padding: ",[0,30]," ",[0,40]," ",[0,30]," ",[0,0],"; border-radius: ",[0,20],"; margin-bottom: ",[0,20],"; background-color: #fff; }\n.",[1],"cart-item .",[1],"image-warpper { width: ",[0,220],"; height: ",[0,220],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; position: relative; }\n.",[1],"cart-item .",[1],"image-warpper wx-image { border-radius: ",[0,8],"; width: 100%; height: 100%; }\n.",[1],"cart-item .",[1],"cart-right { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; overflow: hidden; position: relative; padding-left: ",[0,30],"; }\n.",[1],"cart-item .",[1],"cart-right .",[1],"title, .",[1],"cart-item .",[1],"cart-right .",[1],"price { height: ",[0,40],"; line-height: ",[0,40],"; font-size: ",[0,32],"; }\n.",[1],"cart-item .",[1],"cart-right .",[1],"arrt { font-size: ",[0,30],"; color: #666; }\n.",[1],"cart-item .",[1],"cart-right .",[1],"price { color: #13227a; height: ",[0,50],"; line-height: ",[0,50],"; }\n.",[1],"cart-item .",[1],"del-btn { padding: ",[0,4]," ",[0,16],"; font-size: ",[0,34],"; height: ",[0,34],"; color: #13227a; background-color: rgba(0, 0, 0, 0.1); border-radius: ",[0,30],"; }\n",],undefined,{path:"./pages/shop/shop.wxss"});    
__wxAppCode__['pages/shop/shop.wxml']=$gwx('./pages/shop/shop.wxml');

__wxAppCode__['pages/shop/shopList/shopList.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"goodsBox { padding: ",[0,20]," 0; }\n.",[1],"text-area { height: ",[0,100],"; background-color: #fff; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"text-area \x3e .",[1],"input_search { height: ",[0,70],"; width: 90%; border: #ccc solid ",[0,1],"; border-radius: ",[0,50],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-left: ",[0,20],"; }\n.",[1],"text-area \x3e .",[1],"input_search wx-input { margin-left: ",[0,40],"; }\n",],undefined,{path:"./pages/shop/shopList/shopList.wxss"});    
__wxAppCode__['pages/shop/shopList/shopList.wxml']=$gwx('./pages/shop/shopList/shopList.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
