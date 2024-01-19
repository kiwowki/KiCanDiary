import blueFlower from '../../assets/img/smallSticker/blue_flower.png'
import blueStar from '../../assets/img/smallSticker/blue_star.png'
import burble from '../../assets/img/smallSticker/burble.png'
import greenStar from '../../assets/img/smallSticker/green_star.png'
import orangeHeart from '../../assets/img/smallSticker/orange_heart.png'
import pinkHeart from '../../assets/img/smallSticker/pink_heart.png'
import yellowV from '../../assets/img/smallSticker/yellow_v.png'

export const getRandomSticker = () => {

    const Stickers = [
        blueFlower,
        blueStar,
        burble,
        greenStar,
        orangeHeart,
        pinkHeart,
        yellowV,
    ]
    const randomIndex = Math.floor(Math.random() * Stickers.length)
    return Stickers[randomIndex]
}
