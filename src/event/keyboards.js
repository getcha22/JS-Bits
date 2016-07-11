export default keyboards = () => {
    let inputEle = document.querySelector('.inputTest');
    inputEle.addEventListener('keypress',function (e) {
        console.log(e);
    })
}
