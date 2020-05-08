import Jimp from 'jimp'

/*
font

FONT_SANS_8_BLACK
FONT_SANS_10_BLACK
FONT_SANS_12_BLACK
FONT_SANS_14_BLACK
FONT_SANS_16_BLACK
FONT_SANS_32_BLACK
FONT_SANS_64_BLACK
FONT_SANS_128_BLACK
FONT_SANS_8_WHITE
FONT_SANS_16_WHITE
FONT_SANS_32_WHITE
FONT_SANS_64_WHITE
FONT_SANS_128_WHITE
*/

async function main() {
  // 直接創建一個純顏色資料圖片
  // const image = await Jimp.read(200, 200, 'white')

  // 讀取圖片檔案
  const image = await Jimp.read('./image/background-sky-blue.jpg')
  const pen = await Jimp.read('./image/mask.png')

  // 改變大小(width, height)
  await pen.resize(50, Jimp.AUTO)
  await image.resize(200, Jimp.AUTO)

  // 將圖片放到另一張圖上
  await image.blit(pen, 0, 0)

  // 讀取字體
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)

  // 將文字放在圖片上(字體, x, y, 文字, maxWidth, maxHeight)
  await image.print(font, 0, 50, 'Hello World!')

  // await image.normalize()

  image.write('./image/newImage-normalize.jpg')

  // 也有 Async 版的
  // await image.writeAsync('test/image.png')
}

main()