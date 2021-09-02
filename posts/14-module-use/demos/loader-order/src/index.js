// import "../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js"; // a1 a2 b1 b2 c1 c2 d1 d2
// import '!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js' // a1 a2 c1 c2 d1 d2
// import '-!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js' // c1 c2 d1 d2
// import '!!../loader/index.js?name=c2!../loader/index.js?name=c1!./hello.js' // c1 c2
// import '../loader/index.js?name=c2!!../loader/index.js?name=c1!./hello.js' // a1 a2 b1 b2 c1 c2 d1 d2  !写在中间只是起连接作用，不算前置符  

// Loaders 的執行可以被 inline 的特定的前置符所取消：

// !: 取消 normal Loaders 的執行
// -!: 取消 pre, normal Loaders 的執行
// !!: 取消 pre, normal, post Loaders 的執行

