export default isUrl = (strUrl) => {
    const regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    if ( regular.test(strUrl) ) {
        return true;
    }
    else {
        return false;
    }
    //非空
    // const noEmpty = /.+/;
    // const \d+\.\d{2}$;
    // const mobile = /^1[34578]\d{8}$/;
    // const email = /^\w+\(\.\w+)*@\w+\.(\.\w+)+$/
    // const url = /^((https?)?:\/\/)?(\w+\.)+[a-zA-Z]+/;
}
