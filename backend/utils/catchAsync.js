// eslint-disable-next-line no-undef
module.exports = catchAsync = fn => {
    return (request, response, next) => {
        fn(request, response, next).catch(next);
    }
}