class Sakura {
    paint(ctx, size) {
        let { width, height } = size
        let img = new Image()
        img.src = '../images/sakura.svg'
        ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0)
        // ctx.fillStyle = '#ec683d'
        // ctx.strokeStyle = '#fff'
        // ctx.fillRect(0, 0, width, height)
        // ctx.fillStyle = '#fff'
        // this.drawPetal(ctx, { x: 50, y: 50, size: 20 })
        // ctx.rotate(30 * Math.PI / 180)
        // this.drawPetal(ctx, { x: 50, y: 50, size: 20 })

        // ctx.fillRect(0, 0, 20, 20)
        // ctx.stroke();
    }
    drawPetal (ctx, { x, y, size }) {
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.quadraticCurveTo(x - size * 0.5, y - size * 0.5, x - size / 5, y - size) // 左侧的贝塞尔曲线
        ctx.lineTo(x, y - size * .8) // 左侧到中线
        ctx.moveTo(x, y) // 回到原点
        ctx.quadraticCurveTo(x + size * 0.5, y - size * 0.5, x + size / 5, y - size) // 右侧贝塞尔曲线
        ctx.lineTo(x, y - size * .8) // 右侧到中线
        ctx.moveTo(x, y) // 回到原点
        ctx.fill()
    }
}


registerPaint('sakura', Sakura)