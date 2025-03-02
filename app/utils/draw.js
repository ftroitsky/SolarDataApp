export const drawCircle = (canvas, cx, cy, r, color, cb) => {
  const context = canvas.getContext('2d')
  context.beginPath()
  context.arc(cx, cy, r, 0, 2 * Math.PI, false)
  context.strokeStyle = color || 'blue'
  context.lineWidth = 1
  context.stroke()
  cb ? cb() : null
}

export const drawContour = (canvas, markers, color, cb) => {
  const context = canvas.getContext('2d')
  context.beginPath()
  context.moveTo(markers[0].x, markers[0].y)
  markers.forEach(marker => context.lineTo(marker.x, marker.y))
  context.lineTo(markers[0].x, markers[0].y)
  context.strokeStyle = color || 'blue'
  context.stroke()
  context.closePath()
  cb ? cb() : null
}

export const drawMarker = (canvas, x, y, size = 3, color) => {
  const context = canvas.getContext('2d')
  context.beginPath()
  context.moveTo(x - size, y - size)
  context.lineTo(x + size, y + size)
  context.moveTo(x - size, y + size)
  context.lineTo(x + size, y - size)
  context.strokeStyle = color || 'blue'
  context.stroke()
  context.closePath()
}