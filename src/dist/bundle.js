isUrl = function isUrl(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    if (regular.test(strUrl)) {
        return true;
    } else {
        return false;
    }
    //非空
    // const noEmpty = /.+/;
    // const \d+\.\d{2}$;
    // const mobile = /^1[34578]\d{8}$/;
    // const email = /^\w+\(\.\w+)*@\w+\.(\.\w+)+$/
    // const url = /^((https?)?:\/\/)?(\w+\.)+[a-zA-Z]+/;
};

var keyboards$1 = keyboards = function keyboards() {
    var inputEle = document.querySelector('.inputTest');
    inputEle.addEventListener('keypress', function (e) {
        console.log(e);
    });
};

keyboards$1();

// ;(function (){
//     const JSBits = {};
//     let a = isUrl("http://baidu.com/");
//     console.log(a);
//     JSBits.isUrl = isUrl;
//
// })()
//
// console.log("下面是有关对象的内容");
//
// function Car (name) {
//     this.name = name;
// }
// var car = new Car("blog");
//
// for (let a in car ){
//     console.log(a);
// }
//
// var b = {}
// console.log(b);