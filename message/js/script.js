
let $main = document.querySelector('.message-envelope')
let $bg = $main.querySelector('.message-bg')
let $top = $main.querySelector('.message-top')
let $content = $main.querySelector('.message-content')
let $pack = $main.querySelector('.message-pack')
let $shadow = $main.querySelector('.message-shadow')

/** 关闭 */
const STATUS_CLOSE = 'close'
/** 打开 */
const STATUS_OPEN = 'open'
/** 打开中 */
const TUS_OPENING = 'opening'
/** 打开完成 */
const STATUS_FNINSHED = 'openFinished'
/** 拿出纸条 */
const STATUS_OUTING = 'outing'
/** 拿出纸条 */
const STATUS_OUT = 'out'

let timer
let timerOpenning
let timerStatus
let time = 300
let status = STATUS_CLOSE


$main.addEventListener('mouseenter', () => {
    timer && clearTimeout(timer)
    timerOpenning && clearTimeout(timerOpenning)
    timerStatus && clearTimeout(timerStatus)
    $top.classList.add(STATUS_OPEN)
    status = TUS_OPENING

    timerOpenning = setTimeout(() => {
        $shadow.classList.add(TUS_OPENING)
        $content.classList.add(TUS_OPENING)
        $pack.classList.add(TUS_OPENING)
    }, time)

    timer = setTimeout(() => {
        $content.classList.add(STATUS_OPEN)
        $pack.classList.add(STATUS_OPEN)
        status = STATUS_OPEN
    }, time * 2)

    timerStatus = setTimeout(() => {
        status = STATUS_FNINSHED
    }, time * 3)
})

$main.addEventListener('mouseleave', () => {
    if (status === STATUS_OUTING) {
        return
    }
    timer && clearTimeout(timer)
    if (status === STATUS_FNINSHED) {
        timerOpenning && clearTimeout(timerOpenning)
    }
    $content.classList.remove(STATUS_OPEN)

    timerOpenning = setTimeout(() => {
        $shadow.classList.remove(TUS_OPENING)
        $content.classList.remove(TUS_OPENING)
        $pack.classList.remove(TUS_OPENING)
        status = STATUS_CLOSE
    }, time * 2.5)

    timer = setTimeout(() => {
        $top.classList.remove(STATUS_OPEN)
        $pack.classList.remove(STATUS_OPEN)
    }, time * 1.5)
})

$main.addEventListener('click', () => {
    console.log(status)

    if (status === STATUS_OUT) {
        $top.classList.remove(STATUS_OUTING)
        $shadow.classList.remove(STATUS_OUTING)
        $content.classList.remove(STATUS_OUTING)
        $pack.classList.remove(STATUS_OUTING)
        $bg.classList.remove(STATUS_OUTING)

        timerStatus = setTimeout(() => {
            status = STATUS_FNINSHED
        })
        return
    }

    if (status !== STATUS_FNINSHED) {
        return
    }

    $top.classList.add(STATUS_OUTING)
    $shadow.classList.add(STATUS_OUTING)
    $content.classList.add(STATUS_OUTING)
    $pack.classList.add(STATUS_OUTING)
    $bg.classList.add(STATUS_OUTING)

    timerStatus = setTimeout(() => {
        status = STATUS_OUT
    }, 300)
})