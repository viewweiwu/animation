class Sakura {
    paint(ctx, size) {
        let { width, height } = size
        ctx.fillStyle = '#ec683d'
        ctx.strokeStyle = '#fff'
        ctx.fillRect(0, 0, width, height)
        ctx.beginPath()
        ctx.moveTo(50, 50);
        ctx.stroke();
    }
}


registerPaint('sakura', Sakura)